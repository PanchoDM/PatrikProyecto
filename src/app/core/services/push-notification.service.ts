import { Injectable, inject } from '@angular/core';
import { WebSocketService } from './websocket.service';

/**
 * Notificaciones push en el navegador: pide permiso una vez y muestra una
 * Notification nativa cuando llega un mensaje por /topic/push/{userId}.
 */
@Injectable({ providedIn: 'root' })
export class PushNotificationService {
  private readonly ws = inject(WebSocketService);
  private started = false;

  async start(userId: string): Promise<void> {
    if (this.started || !('Notification' in window)) {
      return;
    }
    this.started = true;

    if (Notification.permission === 'default') {
      await Notification.requestPermission();
    }

    this.ws.watchPush(userId).subscribe((payload) => {
      if (Notification.permission !== 'granted') {
        return;
      }
      const subject = String(payload['subject'] ?? 'Torre de Control');
      const message = String(payload['message'] ?? '');
      new Notification(subject, { body: message, icon: '/favicon.ico' });
    });
  }
}

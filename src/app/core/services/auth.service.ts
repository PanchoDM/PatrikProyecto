import { Injectable, signal } from '@angular/core';
import { createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly supabase: SupabaseClient = createClient(
    environment.supabaseUrl,
    environment.supabaseAnonKey,
  );

  readonly session = signal<Session | null>(null);
  readonly loading = signal(true);

  constructor() {
    this.supabase.auth.getSession().then(({ data }) => {
      this.session.set(data.session);
      this.loading.set(false);
    });

    this.supabase.auth.onAuthStateChange((_event, session) => {
      this.session.set(session);
    });
  }

  get client(): SupabaseClient {
    return this.supabase;
  }

  get accessToken(): string | null {
    return this.session()?.access_token ?? null;
  }

  get userId(): string | null {
    return this.session()?.user.id ?? null;
  }

  async signIn(email: string, password: string): Promise<string | null> {
    const { error } = await this.supabase.auth.signInWithPassword({ email, password });
    return error?.message ?? null;
  }

  async signOut(): Promise<void> {
    await this.supabase.auth.signOut();
  }
}

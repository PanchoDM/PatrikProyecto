import { Directive, ElementRef, OnDestroy, OnInit, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import flatpickr from 'flatpickr';
import { Spanish } from 'flatpickr/dist/l10n/es';
import type { Instance } from 'flatpickr/dist/types/instance';

@Directive({
  selector: '[appFlatpickrDatetime]',
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FlatpickrDatetimeDirective),
      multi: true,
    },
  ],
})
export class FlatpickrDatetimeDirective implements OnInit, OnDestroy, ControlValueAccessor {
  private readonly host = inject(ElementRef<HTMLInputElement>);
  private instance: Instance | null = null;
  private onChange: (value: Date | null) => void = () => {};
  private onTouched: () => void = () => {};

  ngOnInit(): void {
    this.instance = flatpickr(this.host.nativeElement, {
      locale: Spanish,
      enableTime: true,
      time_24hr: true,
      dateFormat: 'j \\d\\e F \\d\\e Y, H:i',
      onChange: (selectedDates) => {
        this.onChange(selectedDates[0] ?? null);
        this.onTouched();
      },
    });
  }

  ngOnDestroy(): void {
    this.instance?.destroy();
  }

  writeValue(value: Date | null): void {
    this.instance?.setDate(value ?? '', false);
  }

  registerOnChange(fn: (value: Date | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.host.nativeElement.disabled = isDisabled;
    this.instance?.set('clickOpens', !isDisabled);
  }
}

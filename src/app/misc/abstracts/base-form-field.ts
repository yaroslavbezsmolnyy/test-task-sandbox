import { ChangeDetectorRef, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export enum FormFieldMode {
  row = 'row',
  column = 'column'
}

export enum FormFieldFloatLabelMode {
  auto = 'auto',
  always = 'always',
  never = 'never'
}

export abstract class BaseFormField implements OnChanges, OnDestroy {
  private destroy: Subject<void> = new Subject<void>();
  @Input() icon: string;
  @Input() placeholder: string;
  @Input() label: string;
  @Input() required = false;
  @Input() disabled = false;
  @Input() readonly = false;
  @Input() secondTier = false;
  @Input() value = '';
  @Input() layout: FormFieldMode = FormFieldMode.row;
  @Input() control: AbstractControl = new FormControl();
  @Input() floatLabel: FormFieldFloatLabelMode = FormFieldFloatLabelMode.never;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges({ value, disabled, placeholder, control }: SimpleChanges): void {
    if (disabled && typeof disabled.currentValue === 'boolean') {
      if (this.disabled) {
        this.control.disable();
      } else {
        this.control.enable();
      }
    }

    if (control && control.currentValue instanceof AbstractControl) {
      control.currentValue.valueChanges.pipe(takeUntil(this.destroy)).subscribe(() => this.cdr.detectChanges());
    }

    this.cdr.detectChanges();
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

  get isRowMode(): boolean {
    return this.layout === FormFieldMode.row;
  }

  get isColumnMode(): boolean {
    return this.layout === FormFieldMode.column;
  }

  get formControl(): FormControl {
    return this.control as FormControl;
  }

  get errorMessage(): string {
    switch (true) {
      case this.control.hasError('required'):
        return 'PLEASE_ADD_ENTITY';
      case this.control.hasError('email'):
        return 'INVALID_EMAIL_ADDRESS';
      case this.control.hasError('password'):
        return 'PASSWORD_IS_NOT_VALID';
      default:
        return null;
    }
  }
}

import { AbstractControl, FormControl } from '@angular/forms';
import { CedulaValidators } from './ng-validator.validator';

describe('NgValidator', () => {
  const control: AbstractControl = new FormControl('input');

  // VALID
  it('should be a valid cedula 8-1234-12345', () => {
    control.setValue('8-1234-12345');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual(null);
  });
  it('should be a valid cedula PE-1234-12345', () => {
    control.setValue('PE-1234-12345');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual(null);
  });
  it('should be a valid cedula E-8-102017', () => {
    control.setValue('E-8-102017');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual(null);
  });
  it('should be a valid cedula N-1234-12345', () => {
    control.setValue('N-1234-12345');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual(null);
  });
  it('should be a valid cedula E-1234-12345', () => {
    control.setValue('E-1234-12345');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual(null);
  });

  it('should be a valid cedula 1PI-1234-12345', () => {
    control.setValue('1PI-1234-12345');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual(null);
  });
  it('should be a valid cedula 13AV-1234-12345', () => {
    control.setValue('13AV-1234-12345');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual(null);
  });
  // NOT VALID
  it('should NOT be valid cedula 11111', () => {
    control.setValue('11111');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual({ invalid: true });
  });
  it('should NOT be valid cedula A', () => {
    control.setValue('A');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual({ invalid: true });
  });
  it('should NOT be valid cedula P-', () => {
    control.setValue('P-');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual({ invalid: true });
  });
  it('should NOT be valid cedula 14-', () => {
    control.setValue('14-');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual({ invalid: true });
  });
  it('should NOT be valid cedula 13-12345', () => {
    control.setValue('13-12345');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual({ invalid: true });
  });
  it('should NOT be valid cedula 12-1234-1234567', () => {
    control.setValue('12-1234-1234567');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual({ invalid: true });
  });
  it('should NOT be valid cedula EMPTY', () => {
    control.setValue('');
    control.markAsDirty();
    expect(CedulaValidators.verificar(control)).toEqual({ invalid: true });
  });
});

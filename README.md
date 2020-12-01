# Ng2-cedula-panama

Esta libreria es para utilizar como Validator de formato de cédulas panameñas en ReactiveForms en Angular (Probada en Angular 11).

Basada en el Regex de [Merlo](https://github.com/merlos/cedula-panama) cedula-panama en JS

## Instalación

`npm i ng2-cedula-panama`.

## Uso

Para utilizar el [Validator](https://github.com/oidacra/ng2-cedula-panama/blob/main/projects/ng2-cedula-panama-example/src/app/examples/examples-reactive/examples-reactive.component.ts) en un formulario reactivo hacemos lo siguiente en nuestro componente:

`this.form = this.fb.group({ cedula: [, [CedulaValidators.verificar, Validators.required]], email: [, [Validators.email, Validators.required]], });`

En nuestro html, podemos verificar esto como normalmente realizamos en [Angular](https://github.com/oidacra/ng2-cedula-panama/blob/main/projects/ng2-cedula-panama-example/src/app/examples/examples-reactive/examples-reactive.component.html) :
`<label>Ingrese No. de Cédula</label>
<input formControlName="cedula" placeholder="Ej: 8-123-456" />

  <div *ngIf="(cedula.invalid && cedula.touched) || cedula.dirty">
    <small *ngIf="cedula.hasError('required')">Cédula es requerida</small>
    <small *ngIf="cedula.hasError('invalid')">Cédula es inválida</small>
  </div>`

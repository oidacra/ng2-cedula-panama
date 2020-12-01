# Ng2-cedula-panama

Esta libreria es para utilizar como Validator de formato de cédulas panameñas en ReactiveForms en Angular (Probada en Angular 11).

Basada en el Regex de [Merlo](https://github.com/merlos/cedula-panama) cedula-panama en JS

## Instalación

`npm i ng2-cedula-panama`.

## Uso

Para utilizar el [Validator](https://github.com/oidacra/ng2-cedula-panama/blob/main/projects/ng2-cedula-panama-example/src/app/examples/examples-reactive/examples-reactive.component.ts) en un formulario reactivo hacemos lo siguiente en nuestro componente:

![imagen componente](https://github.com/oidacra/ng2-cedula-panama/blob/main/projects/ng2-cedula-panama-example/src/assets/component.png?raw=true)

En nuestro html, podemos verificar esto como normalmente realizamos en [Angular](https://github.com/oidacra/ng2-cedula-panama/blob/main/projects/ng2-cedula-panama-example/src/app/examples/examples-reactive/examples-reactive.component.html) :

![imagen componente html](https://github.com/oidacra/ng2-cedula-panama/blob/main/projects/ng2-cedula-panama-example/src/assets/component-html.png?raw=true)

## Patrones aceptados / _Accepted patterns_

- Regular (provincia-libro-tomo). Ej: 1-1234-12345
- Panameño nacido en el extranjero (PE-libro-tomo). Ej: PE-1234-123456
- Extranjero con cédula (E-libro-tomo). Ej: E-1234-12345
- Naturalizado (N-libro-tomo). Ej: N-1234-12345
- Panameños nacidos antes de la vigencia (provinciaAV-libro-tomo). Ej: 1AV-1234-12345
- Población indigena (provinciaPI-libro-tomo). Ej: 1PI-1234-12345

Identificación de las provincias

1. Bocas del Toro
2. Coclé
3. Colón
4. Chiriquí
5. Darién
6. Herrera
7. Los Santos
8. Panamá
9. Veraguas
10. Guna Yala
11. Emberá Wounaan
12. Ngäbe-Buglé
13. Panamá Oeste

Basada en el Regex de [Merlo](https://github.com/merlos/cedula-panama)

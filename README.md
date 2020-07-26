# Gian's CMS (Teste CMS)

Projeto realizado para fins de teste.

## Instalação
Após clonar o projeto, rode o seguinte comando:
```bash
npm install
```

## Uso
```bash
ng serve -o
```
ou
```bash
npm start
```

## Design System
O Design System utilizado no projeto foi o [Material Design](https://material.io/), que é oficial do Google e amplamente utilizado.

## Temas
O projeto consta com um tema pré definido (encontrado no arquivo _theme.scss) o que facilita muito futuras mudanças e manutenções.
```scss
@import "~@angular/material/theming";

@include mat-core();

$transp-dark: rgba(0, 0, 0, .87);
$transp-medium: rgba(0, 0, 0, .6);
$transp-light: rgba(0, 0, 0, .12);

$primary: mat-palette($mat-indigo, A700);
$accent: mat-palette($mat-amber, A700);

$warn: mat-palette($mat-red);

$theme: mat-light-theme($primary, $accent, $warn);

@include angular-material-theme($theme);

```
No arquivo definimos as cores primárias e secundárias do projeto, além de tons de cinza para textos etc.

## Componentes
Todos os [componentes do Material UI](https://material.angular.io/components/categories) utilizados no projeto foram separados em um módulo exclusivo (material.module.ts), o que garante uma boa organização no código final.

## Validações
Todos os formulários do projeto tem uma ou mais validações, onde utilizei a ferramenta de [Reactive Form](https://angular.io/guide/reactive-forms) disponibilizada pelo próprio Angular.

## Cadastro de usuário
O projeto não consta com um back-end para que possamos cadastrar um novo usuário, porém o valor dos campos de cadastro pode ser facilmente encontrado no console do navegador. A forma como foi implementado o cadastro permite de maneira fácil um POST para uma API REST.

## Nested CSS @container

Estoy haciendo pruebas con una nueva feature de CSS, se llama @container. Todavía no está implementada en los navegadores actuales, pero es posible probar en Chrome Canary o en Brave.

## Habilitar @container en el navegador

Para habilitarlo hay que ir a "chrome://flags/" y buscar por "container queries" y "Habilitar". Para Brave el procedimiento es el mismo pero entrando por "brave://flags/"
Y si te vas a poner a trastear recomiendo Chrome Canary ya que además de poder ver las diferentes Queries que tengas definidas, Canary añade en el marcado HTML los diferentes @container que tengas asociado a el/los elementos HTML.

Como he comentado, no está aún implementada, y su estado es UNOFF https://caniuse.com/css-container-queries por lo que mucho de que estoy probando podría cambiar o no llegar a implementarse, aunque espero que no, porque su potencia es enorme

## ¿Qué es CSS @container?

@container es similar a @media queries, pero en lugar de aplicar estilos en función del ancho del "viewport" los estilos se aplican en función del ancho del elemento HTML que sea definido como @container.

Estoy realizando un componente TABS, en el que cada uno de sus elementos sea "independiente" y pueda tener estilos propios en función de su tamaño concreto. No me quiero enredar con esto, ya que lo publicaré en una próxima entrada.

## Anidación de @container dentro de otras

Quería probar si era posible que elementos hijos de un @container pudieran tener otras @container. Es posible!!

Básicamente, necesitamos tener un envolvente que se defina como @container y dentro los elementos que necesitamos.

El ejemplo CSS:

```css
.layout {
  contain: layout inline-size style; // elemento @container principal
  &-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    align-items: center;
    text-align: center;
  }
  &__top {
    grid-column: 1 / -1;
  }
  &__left {
    contain: layout inline-size style; // elemento @container nested
  }
  &__right {
    contain: layout inline-size style; // elemento @container nested
  }
}
```

Y el ejemplo HTML, escrito en PUG:

```pug
main.layout // es envolvente, sólo defino @container
  .layout-wrapper
    .layout__top(data-width='') // es envolvente, sólo defino @container
      .data Superior >700
        span
    .layout__left(data-width='') // es envolvente, sólo defino @container
      .data Izquierda <250
        span
    .layout__right(data-width='') // es envolvente, sólo defino @container
      .data Derecha >500
        span
```

# Ejemplo simple de uso de @container queries

Se puede ver ejemplo en este codepen: https://codepen.io/ivan_albizu/pen/MWmdNXa

## Navegadores

A la fecha 18/08/2021 sólo está soportado en Chrome +95. Lo ideal es usar Chrome Canary si se desea trastear, ya que te permite ver las diferentes Queries que tengas definidas

Requiere habilitar flag tal como se indica la imagen

![alt text](https://raw.githubusercontent.com/ivanalbizu/container-queries-simple-cards/main/chrome-flag.png)

## Parcel

La hoja de estilos está linkada en el HTML directamente a .SCSS

Se puede levantar servidor con parceljs. Para ello se puede instalar globalmente y sobre el proyecto ejecutar:

```
parcel index.html
```

Si no se ejecuta con parcel hay que tener en cuenta la manera en la que se genere el .CSS
# Repaso de Javascript y DOM
Repaso de los conceptos JS y DOM vistos hasta ahora en el campus.


## Información previa

Vamos a continuar el ejercicio del [ToDo](https://github.com/campusboream/week5_day4), añadiendo nueva funcionalidad que nos permita repasar los conceptos básico de JS (Funciones, Datos primitivos, Objetos, Arrays, etc).

## Iteracción 1
Actualmente, la lista de tareas es una consecución de nodos `li` dentro del elemento `ul` de nuestra página web. Extrae la lista a un `array` dentro del js y refactoriza el código para que el pintado de los `li`'s se ejecute dentro de una `function pintar()` que recorra dicho array y pinte tantos `li` como elementos tenga el array. En esta primera iteracción el `array` es un `array` que contengan `string`.

Añadir una nueva tarea inserta la tarea al final.

## Iteracción 2
Cada tarea, además del texto que describe la tarea debe tener una fecha de finalización, indicando cuando la tarea debe estar resuelta. Para conseguir esto, lo que tenemos que hacer es transformar cada elemento del `array` de un `string` a un `object`. Además habrá que modificar nuestra función `pintar()` para que tenga en cuenta que debe pintar la fecha también. Cada elemento del array será del tipo
```
{
  id: number,
  text: string,
  end: Date,
  visible: boolean
}
```

## Iteracción 3
Queremos que las fechas se muestren de forma legible para un usuario en España, por lo que tenemos que formatearlas de la siguiente manera:
`Lunes, 3 de febrero de 2020`.
Lo podéis hacer a mano, con las utilidades que ofrece la API del objeto `Date` o hacer uso de la librería `moment.js`.

## Iteracción 4
Además de mostrar la fecha y el texto, queremos que cada línea también muestre los días que quedan para la finalización de la tarea. Este dato no tiene que estar dentro de nuestra estructura del `array`, si no que tiene que ser derivada del dato `todo.end`. 

Igualmente os podéis valer de la libreria `moment.js` para hacer ésto o no. Tened en cuenta que tiene que funcionar igualmente para los años bisiestos.

## Iteracción 5 
Queremos que nuestra lista de ToDo's pueda ser ordenada. Tiene que ser ordenada alfabéticamente según el campo `todo.text` y también ordenada en función de los días que quedan para que se cumpla.

Por defecto, las tareas están ordenadas por el orden de insercción.

Para ello vamos a crear tres botones debajo del `input` de añadir ToDo. 

El primero servirá para ordenar alfabéticamente. Cuando el orden sea natural (A-Z), el botón deberá mostrar el `(A-Z)` y si está al revés `(Z-A)`.

El segundo servirá para ordenar por los días que falta hasta el fin de la tarea. Cuando el orden sea de menor a mayor, el texto del botón debe ser `Prioritarios primero`. Si se le vuelve a pulsar el orden de las tareas cambiará y el texto del botón también, a `Prioritarios después`.

En los dos casos, pulsar sobre el orden alfabético o pulsar sobre el orden de fechas, deshabilita el ordenado anterior.

Hay que tener en cuenta que insertar una tarea con un orden dado, debe insertar en su posición correcta. (Esto dejadlo para el final).

El tercer botón es para quitar todos los órdenes y dejar el orden por defecto (el orden de insercción de la tarea).

## Iteracción 6
Para finalizar el ejercicio, queremos filtrar las tareas.

Primero filtraremos por el contenido de `todo.text`. Añadiremos un campo de texto más encima de la lista para incluir el filtro en forma de texto. Si el input contiene algún string, sólo debemos mostrar las tareas que tengan dicho string, independientemente de si las tareas están ordenadas o no, pero respetando el orden.

Por último, filtraremos los ToDo's por dias que quedan. Tendremos un nuevo input donde meteremos el número de dias que deben quedar para la finalización de la tarea. Se deben mostrar todas las tareas que tengan un número de dias menor o igual al valor de ese nuevo campo de texto.

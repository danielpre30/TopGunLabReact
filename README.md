# TopGunLab React
Daniel Preciado Tamayo

## Clase 1 - 27/04/2019

- Protocolo IP
- DNS
- Protocolo TCP/IP

### HTML (HyperText Markup Language)
Determina el contenido de la pagina web pero no su funcionalidad

#### Elementos
- Etiquetas de apertura y cierre
- Contenido
- Atributo

#### Elementos de:
- Bloque: Ocupa todo el ancho de la pantalla
- Linea: El contenido determina el ancho

### DOM - Document Object Model
Es un árbol con los elementos del HTML

### CSS
Modelo de Caja
- Padding
- Border
- Margin

#### Propiedad box-sizing:
- content-box (por defecto)
- border-box

#### Selectores
- Etiqueta
- Class .
- Id #
- Pseudoclases: Es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado :

#### Especificidad
Prioridad en la que se aplican los estilos

Style, ID, Class/Pseudo-class/attribute, elements

Si tienen la misma queda el ultimo elemento

### Git
Control de Versiones

### Nodeschool
https://nodeschool.io/es/

#### Javascripting
https://github.com/timoxley/functional-javascript-workshop

## Clase 2: Javascript - 11/05/2019

Interpretado
Dinámico
Orientado a objetos basado en prototipos
Débilmente tipado

### Falsy values

- false
- null
- ""
- undifined
- 0
- NaN

### ¿Como ejecutar javascript?

####Navegador

Devtools
Archivo html

#### Node.js

- Consola
    - node
- Archivo js
    - node archivo.js

### Tipos de datos

- number
- symbol
- boolean
- object
- null
- undefined

typeof(variable)

#### Strings

- Se puede inicializar con comillas dobles comillas simples
- Importante mantener un estándar

- Funciones
    - repeat(2)
    - lenght
    - trim()
    - indexof(G)
    - charAt()
    - split(" ")
    - concat()
    - '${} something'

#### Number

toFixed(2)
toExponential(3)

- Metodos Globales
```
parseInt(a, 10)
parseFloat(b,10)
```

Math object

### Boolean

- true
- false

== compara valor
=== compara valor y tipo

!=
!==

### Objects

#### Creación de objetos

- Objetos literales
- Constructores

#### Acceder a las propiedades

```
objeto.propiedad
objeto["llave"]
```

Se puenden crear propiedades igualmente

#### Eliminar propiedades

```
delete arreglo.propiedad
```

### Arreglos

var arreglo = []

#### Metodos

- arreglo[1]
- push(); agregar elemento al final
- pop(): elimina el ultimo
- shift(): elimina el primero
- unshift(): agrega elementos al inicio
- slice(): Obtener porcion del arreglo
- splice(): suprimir, insertar o reemplazar elementos segun sus pocisiones

## Variables

Puede contener letras, digitos, $, _
No puede iniciar con un numero
Key sensitive

### Scope

Global
Local: Solo vive dentro de la funcion

### Declaracion

- var: Tienen su scope limitado a las funciones y pueden ser reasignadas
- let: Tienen su scope limitado a los bloques y pueden ser reasignadas.
- const: Deben ser asignadas al momento de definirlas, tienen su scope limitado a los bloques y no pueden ser alteradas

### Hoisting

Mecanismo de JS en donde las variables y las funciones declaradas son movidas hacia el comienzo de su scope (arriba), antes de su ejecución.

Funciona con:
- var: a nivel de bloque
- Indicando solo el nombre de la variable: a nivel global

## Condiciones
- if
- switch

## Ciclos

- for 
- do ... while
- while
- for ... in 
- for ... of : La sentencia for...of crea un bucle iterando sobre objetos iterables (incluyendo Array, Map, Set, argumentos, objetos etc), invocando una iteración personalizada conectando con sentencias para ser ejecutadas por el valor de cada propiedad distinta.

### Palabras reservadas

- break: Use la sentencia break para salir de un bucle, switch, o en conjunto con una sentencia label.
- continue: La sentencia continue puede usarse para reiniciar una sentencia while, do-while, for, o label.

## Programacion funcional

- map: Crea un nuevo arreglo a partir de la aplicación de las sentencias entregadas sobre cada elemento. (valor, index)
- filter: Encuentra el primer elemento del arreglo que cumpla con la condición entregada, si ninguno cumple, devuelve undefined.
- find: Crea un nuevo arreglo con los elementos del arreglo que cumplan con la condición entregada.
- reduce: Aplica la función entregada a un acumulador y cada elemento para reducirlo a un sólo valor.

## Funciones

Funciones anonimas
Arrow functions
(parametros) => {}
'use strict';
let cadJSON ={"nombres":"Juan Andres"}
//[ARREGLO] , {OBJETO}

let datos =[{
    "nombres": "Juan Andres",
    "apellidos": "Vargas Solano",
    "edad": 34,
    "materias": ["lógica","programación","matemáticas" ],
    "soltero": true
},
{
    

"nombres": "Mario Andres",
"apellidos": "Fernandez",
"edad": 23,
"materias": ["lógica","programación","matemáticas" ],
"soltero": true
}
];
Object.entries(datos).forEach((e)=> console.log(e));

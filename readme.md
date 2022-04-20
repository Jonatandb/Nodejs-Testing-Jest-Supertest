# Nodejs Testing con Jest y Supertest - Fazt

https://www.youtube.com/watch?v=lZJ1mar_znk

---

### Inicialización del proyecto:

      npm init -y

### Instalación de [express](https://expressjs.com/es/):

      npm install express

### Instalación de jest y supertest:

      npm install -D jest supertest

---

### [jest](https://jestjs.io/):

- Framework de pruebas unitarias que permite usar funciones que permiten comparar objetos, saber si un array tiene elementos, si un valor es de tipo string, number, etc.

### [supertest](https://www.npmjs.com/package/supertest):

- Framework de pruebas que permite hacer peticiones HTTP a un servidor y obtener la respuesta. En este caso, cuando se reciba la respuesta será Jest el que se va a encargar de compararla con la respuesta esperada.

---

### Habilitar el uso de import/export en un proyecto NodeJS:

- Agregar 'type' al package.json:

  `"type": "module"`

- Al momento de hacer imports se debe especificar el **_.js_** al final del nombre del archivo:

  `import sum from 'utils.js'`

---

### Ejecución de tests con Jest y [soporte experimental para ECMAScript Modules (ESM)](https://jestjs.io/docs/ecmascript-modules):

- Unix:

      En un terminal:

      $ cd /ruta/al/proyecto
      $ node src/index.js

      Y en otro terminal:

      $ cd /ruta/al/proyecto
      $ NODE_OPTIONS=--experimental-vm-modules npx jest

- Windows:

      En una consola:

      c:\>cd /ruta/al/proyecto
      [rutaACarpetaDelProyecto]> node src\index.js

      Y en otra consola:

      c:\>cd /ruta/al/proyecto
      [rutaACarpetaDelProyecto]> set NODE_OPTIONS=--experimental-vm-modules && npx jest

---

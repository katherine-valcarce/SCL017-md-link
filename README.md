# MD-Links

## Index

* [MD-Links-kyvh](#MD-Links-kyvh)
* [Instalación](#Instalación)
* [Guía de uso](#Guía-de-uso)
* [API](#API)
* [Diagrama de flujo](#Diagrama-de-flujo)
* [Imagen resultado de ejecución de libreria](#Imagen-resultado-de-ejecución-de-libreria)

***

## MD-Links-kyvh 🚀

Cuarto proyecto de especialización Front End generación 16 de Laboratoria Markdown Links, es una libreria que extrae y valida cada link que haya dentro de archivos en formato markdown.

## Instalación 🔧

Para comenzar la instalación de esta libreria necesitas primero instalar Node.js y luego ejecutar el comando:

` npm install -g md-links-kyvh`

## Guía de uso 📋

Una vez instalado, debes ejecutar el siguiente comando en la terminal:
```
$ md-links-kyvh ./ --validate
```

## API
    mdLinks(path, options)
** Argumentos:
    - path: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es relativa, debe resolverse como relativa al directorio desde donde se invoca node - current working directory).
    - options: Un objeto con únicamente la siguiente propiedad:
    - validate: Booleano que determina si se desea validar los links encontrados.

## Diagrama de flujo 🛠️
![diagrama](https://user-images.githubusercontent.com/83970233/132140710-cdb93af4-ab45-4378-9637-3110751b3b64.png)

## Imagen resultado de ejecución de libreria ⚙️
<img width="745" alt="Captura de pantalla 2021-09-05 173132" src="https://user-images.githubusercontent.com/83970233/132140717-db08cdf0-72be-4972-bf50-6bc20002bc35.png">


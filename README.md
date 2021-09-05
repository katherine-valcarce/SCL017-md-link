# MD-Links

## Index

* [MD-Links-kyvh](#md-links-kyvh-)
* [Instalación](#instalación-)
* [Guía de uso](#guía-de-uso-)
* [API](#API)
* [Diagrama de flujo](#diagrama-de-flujo-%EF%B8%8F)
* [Imagen resultado de ejecución de libreria](#imagen-resultado-de-ejecución-de-libreria-%EF%B8%8F)

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
![Captura de pantalla 2021-09-05 173132](https://user-images.githubusercontent.com/83970233/132140849-e2b4faf5-178d-4791-8fd6-8f0ef6b66e58.png)


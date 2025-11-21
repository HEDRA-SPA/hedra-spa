# Documentación

Este documento describe la estructura y los componentes clave del proyecto HedraSPA, incluyendo su organización de código fuente, funciones serverless y archivos de configuración.

---

## 1. Estructura de Directorios Principal

| Directorio | Descripción |
| :--- | :--- |
| **`/api`** | Contiene las **funciones *serverless*** (servidor sin estado) desplegadas en Vercel. Estas funciones son utilizadas para la lógica de *backend*, incluyendo el **envío de correos** (para notificaciones de Hedra) y la **confirmación de procesos/servicios** para el cliente. |
| **`/node_modules`** | Directorio generado automáticamente que almacena todos los **módulos de JavaScript** necesarios, instalados a partir de `package.json`. **Este directorio debe ser ignorado por Git.** |
| **`/public`** | Directorio para **archivos estáticos** que se sirven directamente (imágenes, fuentes, `favicon.ico`). |
| **`/src`** | Contiene el **código fuente** principal de la aplicación frontend. |
| **`.gitignore`** | Archivo de configuración que especifica qué archivos y carpetas **no deben ser versionados** por Git (ej. `/node_modules`, archivos `.env`). |
| **`package.json`** | Archivo de metadatos principal que define las **dependencias** del proyecto y los **scripts** de ejecución (`start`, `build`, etc.). |
| **`vercel.json`** | Archivo de **configuración de despliegue en Vercel** para definir *rewrites*, *headers* y la configuración de las funciones *serverless*. |

---

## 2. Detalle del Código Fuente (`/src`)

El código de la aplicación se organiza internamente en el directorio `/src`:

| Subdirectorio | Contenido y Propósito |
| :--- | :--- |
| **`/src/components`** | Almacena los **componentes de React** reutilizables que construyen la interfaz de usuario. |
| &nbsp;&nbsp;&nbsp;&nbsp; - `ServiceDetail` | Componente específico para la visualización de los **detalles de un servicio**. |
| **`/src/styles`** | Contiene los **archivos de estilo** (CSS, SCSS, etc.). Aquí se definen los estilos globales, variables de diseño y archivos específicos de componentes. |
| **`/src/locales`** | Directorio clave para la **Internacionalización (i18n)**. Contiene los textos de la aplicación en formato **JSON** para los idiomas soportados, actualmente **Español (es)** e **Inglés (en)**. |
| **`/src/hooks`** | Almacena **hooks personalizados** para encapsular y reutilizar lógica de estado o efectos secundarios. |
| **`/src/utils`** | Contiene **funciones de utilidad** misceláneas (helpers de formateo, validaciones, lógica auxiliar de API). |
| **`/src/pages`** | Contiene los componentes de nivel superior que representan las **vistas o páginas** principales de la aplicación. |

---


## 4. Repositorio de Código

El código fuente.

[https://github.com/HEDRA-SPA/hedra-spa](https://github.com/HEDRA-SPA/hedra-spa)
# Frontend - Verificación y Consulta de Pagos

Este proyecto es una aplicación web construida en Angular y Bootstrap que permite consultar pagos y registrar verificaciones de aspirantes mediante interacción con dos endpoints del backend.

## 📦 Tecnologías utilizadas

 # Frontend
- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [TypeScript](https://www.typescriptlang.org/)
- HTML/CSS

 # Backend
- Spring Boot
- JPA / Hibernate
- Oracle Database
- REST API

---

## 🚀 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/anlopez95/frontend_uniandes.git
cd frontend-app
```
### 🛫 Instala las dependencias:

```bash
npm install
```

### 📁 Estructura del proyecto
```bash
registro-verificacion-angular/
|-- src/
|   |-- app/
|   |   |-- registro-verificacion.component.ts
|   |   |-- registro-verificacion.html
|-- assets/
|   |-- logo_uniandes.png
|-- proxy.conf.json
|-- angular.json
|-- package.json
```

### ⚙️ Endpoints utilizados
GET /consulta-pagos Consulta pagos según código de programa y periodo.

POST /registro-verificacion Registra una verificación con los datos del aspirante.

### 🌐 Configuración de proxy (evitar CORS)

Para conectar correctamente el frontend con el backend (que corre en el puerto 8089), hemos configurado un **proxy local**.

### Archivo: `proxy.conf.json`
```json
{
  "/operaciones-verificacion": {
    "target": "http://localhost:8089",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
}
```
### 🧪 Ejecución en entorno local
```bash
"npm start" o "ng serve --proxy-config proxy.conf.json"
```
La aplicación estará disponible en: http://localhost:4200

> Asegúrate de que el backend esté en funcionamiento y configurado para aceptar solicitudes.

### 📄 Licencia
Este proyecto es de uso académico y puede ser adaptado libremente.

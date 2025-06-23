# Frontend - Verificación y Consulta de Pagos

Este proyecto es una aplicación web construida en Angular y Bootstrap que permite consultar pagos y registrar verificaciones de aspirantes mediante interacción con dos endpoints del backend.

## 📦 Tecnologías utilizadas

- [Angular](https://angular.io/)
- [Bootstrap](https://getbootstrap.com/)
- [TypeScript](https://www.typescriptlang.org/)
- HTML/CSS

---

## 🚀 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/frontend-app.git
cd frontend-app
```
### 🛫 Instala las dependencias:

```bash
npm install
```
### 🧪 Ejecución en entorno local
```bash
npm start
```
La aplicación estará disponible en: http://localhost:4200

> Asegúrate de que el backend esté en funcionamiento y configurado para aceptar solicitudes desde el puerto 4200. Puedes configurar un proxy si es necesario.

### 📁 Estructura del proyecto
```bash
src/
├── app/
│   ├── consulta-pagos/              # Componente para el formulario de consulta de pagos
│   └── registro-verificacion/       # Componente para el formulario de registro
├── assets/
├── styles.css                       # Estilos generales (incluye Bootstrap)
└── main.ts                          # Punto de entrada de Angular
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


### 📄 Licencia
Este proyecto es de uso académico y puede ser adaptado libremente.

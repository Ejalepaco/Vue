# 🏐 Volleyball Manager

Aplicación web para gestionar jugadores de un equipo de voleibol. Permite listar y registrar jugadores con sus datos: nombre, dorsal, experiencia y posición.

## 🛠 Tecnologías utilizadas

- **Frontend:** Vue 3 + Vite + TypeScript + Bootstrap 5 + SweetAlert2
- **Backend:** Node.js + Express + MySQL2
- **Base de datos:** MySQL

---

## 📁 Estructura del proyecto

volleyball-manager/
│
├── backend/ # Servidor Express (API REST)
│ ├── db.js # Conexión MySQL
│ ├── routes.js # Rutas para jugadores
│ └── index.js # Punto de entrada del servidor
│
├── frontend/ # Proyecto Vue 3 (Vite)
│ ├── src/
│ │ ├── components/
│ │ │ └── Jugadores.vue
│ │ ├── services/
│ │ │ └── api.ts # Funciones Axios para consumir la API
│ │ └── App.vue
│ └── index.html # Incluye Bootstrap y SweetAlert2 por CDN
│
└── package.json # Script para ejecutar ambos proyectos con concurrently




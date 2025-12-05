## 📦 Proyecto Final – CaribeSupply S.A.S.

Este proyecto es un sitio web que simula un e-commerce para una empresa dominicana llamada **CaribeSupply S.A.S.**, que conecta artesanos y microempresas con clientes.

El sitio permite ver productos, agregarlos al carrito y hacer un checkout ficticio. También tiene login y modo oscuro.

---

## 🔧 Equipo de desarrollo (GRUPO D)

| Nombre   | Matricula      |
| ---------- | --------------------- |
| Enrique García   | 100614566 |
| Ismael Taveras    | 100617778 |
| María Angelica Rojas | 100493911 |

---

## 🧭 Contenido del Proyecto

* Home con presentación de la empresa
* Catálogo de productos
* Carrito de compras
* Checkout (simulado)
* Login / Registro
* Modo oscuro
* Responsive para móviles
* Navbar y Footer

---

## 🔧 Tecnologías usadas

| Sección    | Tecnología / API      |
| ---------- | --------------------- |
| Frontend   | React + Vite          |
| Estilos    | TailwindCSS           |
| Navegación | React Router          |
| Carrito    | useState / useContext |
| Hosting    | Netlify               |

---

## 🧩 Problemas

1. **El carrito se reiniciaba cuando cambiaba de página.**
   → Se resolvio usando `useContext` y evitando que el estado quedara en un componente suelto.

2. **El sitio no era responsive.**
   → Se usaron clases de Tailwind (`md:`, `lg:`) y ajuste de grid.

3. **El modo oscuro no funcionaba.**
   → Se agrego el estado global `darkMode` y la clase `"dark"` al `<body>`.

4. **Los productos no cargaban bien en algunas rutas.**
   → Se arreglo el import y las rutas de React Router.

5. **Error de Vite por JSX mal cerrado.**
   → Se reviso el `<Route />` y se cerraron correctamente las etiquetas.

---

## 📸 Capturas

1. Home
<img width="1600" height="743" alt="image" src="https://github.com/user-attachments/assets/ba366467-7008-4647-a8f2-02a9dca33363" />

2. Catálogo
<img width="1597" height="743" alt="image" src="https://github.com/user-attachments/assets/265da37d-681c-4283-a8cf-c0a45542202d" />

3. Carrito
<img width="1600" height="735" alt="image" src="https://github.com/user-attachments/assets/cf0d4b22-310a-4809-8e08-0285344cd66f" />

4. Checkout
<img width="1598" height="738" alt="image" src="https://github.com/user-attachments/assets/f03d3a03-b22c-48d5-84ff-cadcf9967280" />

5. Login
<img width="1600" height="736" alt="image" src="https://github.com/user-attachments/assets/1f68c155-0bf3-427f-88c2-983ee91961eb" />

6. Modo oscuro
<img width="1600" height="740" alt="image" src="https://github.com/user-attachments/assets/0029cce1-a105-4447-9e4b-af90fd62aef0" />
<img width="1597" height="743" alt="image" src="https://github.com/user-attachments/assets/e8fe1565-0a1a-4066-bb1a-f8c97d0134ec" />



---

## 🔗 Enlace de Producción (Hosting)

https://caribesupplyd.netlify.app

---

## 📁 Repositorio GitHub

https://github.com/Dazkor/caribesupplyproject

---

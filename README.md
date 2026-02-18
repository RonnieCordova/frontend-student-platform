<<<<<<< HEAD
# Tutorias-Platform Frontend 🎓

This is the web-based user interface for the Peer-to-Peer Tutoring Platform. The frontend is built with **React** and **Vite**, designed to provide a seamless and secure experience for both students and tutors.

## 🚀 Overview
The application serves as the gateway to a cloud-native tutoring ecosystem. It allows students to find tutors by subject and book sessions, while enabling tutors to manage their availability and requests in real-time.

## 🛠️ Tech Stack
* **Framework:** React 18 (Vite)
* **HTTP Client:** Axios for REST API consumption
* **Routing:** React Router DOM for SPA navigation
* **State Management:** LocalStorage for JWT persistence
* **Styling:** CSS3 / Tailwind CSS (Optional)

## 🛡️ Security Features
As part of a **Cloud Security Architect** portfolio, this frontend implements:
* **JWT Authentication:** Secure login flow with token-based access and persistent sessions.
* **RBAC (Role-Based Access Control):** Conditional rendering and route protection based on 'Student', 'Tutor', and 'Admin' roles.
* **Input Validation:** Frontend-side sanitization before API submission.

## ☁️ Architecture
The frontend consumes a **FastAPI** backend deployed on **AWS ECS (Fargate)**, integrated with an **RDS PostgreSQL** database.



## 🔧 Installation & Setup
1. **Clone the repository:**
   ```bash
   git clone [https://github.com/YOUR_USER/frontend-tutorias.git](https://github.com/YOUR_USER/frontend-tutorias.git)

2. **Install dependencies:**
   npm install

3. **Configure Environment Variables:
Create a .env file in the root directory:**
    VITE_API_URL=[http://52.90.95.173:8000/api/v1](http://52.90.95.173:8000/api/v1)

4. **Run the development server:**
   npm run dev

## 📈 Future Roadmap
- CDN Deployment: Integration with AWS CloudFront for global delivery.
- WAF Protection: Implementing AWS Web Application Firewall for request filtering.
- SSL/TLS: Migration to HTTPS using AWS Certificate Manager (ACM).
=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 2e1010c (Start the server and test that the token is saved)

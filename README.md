# 🚀 Saketh Yadala | Portfolio Website

A clean, responsive, and modern personal portfolio showcasing projects and technical skills.

This project is built using the latest industry standards for **high performance** and **accessibility**, and is deployed via **GitHub Actions** for Continuous Deployment.

---

## ✨ Key Features & Stack

| **Category**     | **Technologies / Tools**                    |
|------------------|---------------------------------------------|
| Frontend        | React, TypeScript, Vite                     |
| Styling         | Tailwind CSS, Shadcn/ui                     |
| Design System   | Radix UI (for accessible components)        |
| Deployment      | GitHub Pages + GitHub Actions (CI/CD)       |
| Domain          | Custom Domain: [sakethyadala.dev](https://sakethyadala.dev) |
| Source Code     | Lovable (Initial structure)                 |

---

## 🏗️ Project Structure
The project is structured for easy development and fast build times using **Vite**.
portfolio-website/
├── .github/ # GitHub Actions workflow for deployment
│ └── workflows/
│ └── deploy.yml # Auto-builds and deploys the 'dist/' folder
├── src/ # All source code (React components, pages, logic)
│ ├── components/
│ ├── lib/
│ └── pages/
├── public/ # Static assets (favicon, manifest)
├── package.json # Project dependencies and scripts
└── vite.config.ts # Vite configuration

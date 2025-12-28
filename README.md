
# InfinityEra Hosting Panel

A React + Tailwind based VPS / Bot Hosting Dashboard frontend.

## 🚀 Tech Stack

- React 18
- TailwindCSS
- Lucide Icons

## 📂 Project Structure

src/
 ├─ App.jsx
 ├─ index.jsx
 ├─ index.css
 └─ InfinityEraHosting.jsx

## 📦 Install Dependencies

npm install
npm install lucide-react

## 🎨 Tailwind Setup

npx tailwindcss init -p

tailwind.config.js

content: [
  "./public/index.html",
  "./src/**/*.{js,jsx}"
]

src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

## ▶ Run Project (Development)

npm start

App opens at:
http://localhost:3000

## 🏗 Build for Production

npm run build

Output folder:
build/

## 🌐 Deploy on VPS (Nginx)

rm -rf /var/www/html/*
cp -r build/* /var/www/html/
systemctl restart nginx

Website live at your VPS IP.

## ✨ Credits

InfinityEra Panel UI

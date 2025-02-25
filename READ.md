use the following to run it in ur local machine

first set the environment

npm init -y 
npm install react react-dom 
npm install --save-dev vite @vitejs/plugin-react

then use

npm run dev

if the code still doesn't run in ur local machine manually edit the package.json --> 
"scripts": { 
"dev": "vite", 
"build": "vite build", 
"preview": "vite preview"
}

# INKTALE ➺ 🖊️ Unleash Your Stories 📖

Inktale is a fully responsive blog application built with `Express`, `Node`, `MongoDB`, and `EJS` (MEEN Stack). It features a mobile-first design, user authentication, and a variety of functionalities for managing blogs and user profiles. Along with support of `MARKDOWN` language as Blog content.

<br/>

<h1 align="center"> 

<a href="https://inktale.onrender.com/"><strong> ➥ Live Your Thoughts 🕊️
</strong></a>

</h1>

<br/>


# Screenshots 🥡🍥

![image](https://github.com/user-attachments/assets/b91ff4d3-bd28-4a0d-bbd9-383eff56f807)

<br/>

# 💻 Tech Stack ⛅️🏞️


![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) &nbsp;  ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) &nbsp; ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) &nbsp; ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) &nbsp; ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) &nbsp; ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) &nbsp; ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) &nbsp; ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) &nbsp; ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white) &nbsp;![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) &nbsp; ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) &nbsp; ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 

<br/>

## Table of Contents 🍲🍯

- [Features 🧸🍂](#features)
- [Technologies Used 🤖👩🏻‍💻](#technologies-used)
- [Installation ✈️](#installation)
- [Usage 🍵🍰](#usage)
- [Folder Structure 🗂️📒](#folder-structure)

<br/>

## Features 🧸🍂

- `Responsive Design` ➺ Optimized for **mobile-first design**.
- `User Authentication` ➺ Secure **login** and **signup** using `bcrypt`.
- `Blog Management` ➺ **Create**, **edit**, **delete**, and **view** blogs.
- `User Profile` ➺ Manage user **information** and blogs.
- `Image Upload` ➺ Upload images using `Cloudinary`.
- `Error Handling` ➺ Comprehensive `error handling` with **flash** messages.

<br/>

## Technologies Used 🤖👩🏻‍💻

- `bcrypt` ➺ Library for **hashing passwords** to enhance security.
- `cloudinary` ➺ **Cloud-based image** and video management service for uploading media.
- `compression` ➺ Middleware to **compress HTTP responses**, improving performance.
- `connect-mongo` ➺ **MongoDB session store** for Express and Connect, used for storing session data.
- `dotenv` ➺  Loads **environment variables** from a `.env` file into `process.env`.
- `ejs` ➺  Embedded **JavaScript templating engine** for rendering dynamic HTML content.
- `express` ➺  Fast and minimalist **web framework** for building Node.js applications.
- `express-session` ➺ Middleware for **managing sessions** in Express apps.
- `highlight.js` ➺ Library for **syntax highlighting** in code blocks for better readability.
- `markdown-it` ➺ **Markdown parser** that converts markdown text into HTML.
- `mongoose` ➺ MongoDB **object modeling tool** designed to work in an asynchronous environment.
- `nodemon` ➺ Tool that **automatically restarts the server** when file changes are detected.

<br/>

## Installation ✈️

1. Clone 🗃️ the repository 

      `For window 🍃`

    ```bash
      git clone https ➺//github.com/Prakhar-002/INKTALE-The-Blog-Site.git
      cd INKTALE-The-Blog-Site
    ```

    `For Linux and macOS 🌿`

    ```bash
      git clone https ➺//github.com/Prakhar-002/INKTALE-The-Blog-Site.git
      cd INKTALE-The-Blog-Site
    ```

2. Install⚡️dependencies ➺
    ```bash
      npm install
    ```

3. Create a `.env` file in the root directory and `add the following` ➺
    ```bash
      MONGO_CONNECTION_URL=your_mongo_connection_URL
      SESSION_SECRET=your_session_secret
      SESSION_MAX_AGE=your_allowed_time
      CLOUDINARY_CLOUD_NAME=your_cloud_name
      CLOUDINARY_API_KEY=your_cloud_key
      CLOUDINARY_API_SECRET=your_cloud_secret
    ```

4. Start 🎉 the application ➺
    ```bash
      npm run dev
    ```

5. Access the app in your browser at `http://localhost:8080`.

<br/>

## Usage 🍵🍰

- `Home Page` ➺ View **all blogs**.
- `Authentication` ➺ **Sign up** and **log in** to create and manage blogs.
- `User Profile` ➺ **Access and edit** your **personal** information.
- `Create a Blog` ➺ Write and publish new blog posts.
- `Edit/Delete a Blog` ➺ Manage your published blogs throw `Dashboard`.
- `Reading List` ➺ **Add blogs** from other users to your **personal reading list** for future reference.
- `React to Blogs` ➺ **Like** and **engage** with other users' blogs to show **appreciation**.

<br/>

## Folder Structure 🗂️📒

      INKTALE-The-Blog-Site/
      │
      ├── config/                    🔸Configuration files (database, cloudinary, etc.)
      │   └── cloudinary.js          🔹Cloudinary configuration for media uploads
      │
      ├── controllers/               🔸Request handlers for routes
      │   ├── blogController.js      🔹Blog-related logic
      │   └── userController.js      🔹User-related logic (authentication, profiles)
      │
      ├── middlewares/               🔸Custom middleware functions
      │   └── auth.js                🔹Authentication middleware
      │
      ├── models/                    🔸Mongoose models
      │   ├── Blog.js                🔹Blog schema
      │   └── User.js                🔹User schema
      │
      ├── public/                    🔸Static assets (CSS, images, JavaScript)
      │   ├── css/                   🔹Stylesheets
      │   ├── images/                🔹Images for the site
      │   └── js/                    🔹Client-side JavaScript
      │
      ├── routes/                    🔸Application routes
      │   ├── blogRoutes.js          🔹Routes for blog actions
      │   └── userRoutes.js          🔹Routes for user actions (login, signup)
      │
      ├── utils/                     🔸Utility functions and helpers
      │   └── validators.js          🔹Input validation utilities
      │
      ├── views/                     🔸EJS templates for dynamic HTML rendering
      │   ├── partials/              🔹Reusable EJS partials (header, footer)
      │   ├── blogs/                 🔹Blog templates (create, edit, view)
      │   └── users/                 🔹User-related templates (profile, login, signup)
      │
      ├── .gitignore                 🔸Files and directories to ignore in git
      ├── app.js                     🔸Main application entry point
      ├── package.json               🔸Project dependencies and scripts
      └── README.md                  🔸Project documentation


<br/>

## 🚀 About Me

Meet `Prakhar Katiyar` 🙋🏻‍♂️ , An avid learner with a passion for mastering the `MERN (MongoDB, Express.js, React.js, Node.js)` stack 🎯  and diving deep into `Data Structures and Algorithms (DSA)` 🧑🏻‍💻
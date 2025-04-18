# INKTALE ➺ 🖊️ Unleash Your Stories 📖

Inktale is a fully responsive blog application built with `Express`, `Node`, `MongoDB`, and `EJS` (MEEN Stack). It features a mobile-first design, user authentication, and a variety of functionalities for managing blogs and user profiles. Along with support of `MARKDOWN` language as Blog content.

<br/>

<h1 align="center"> 

<a href="https://inktale.onrender.com/"><strong> ➥ Bring Ideas To Life 🕊️
</strong></a>

</h1>

# Screenshots 🥡🍥

<img src="https://github.com/user-attachments/assets/28f61f8d-8b78-419e-87dd-230a2f308c1f" />

<br/>

# 💻 Tech Stack ⛅️🏞️

![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) &nbsp;  ![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white) &nbsp; ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) &nbsp; ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) &nbsp; ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) &nbsp; ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) &nbsp; ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white) &nbsp; ![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD) &nbsp; ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white) &nbsp;![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) &nbsp; ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) &nbsp; ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) 

<br/>

# Features🍂🧸

- `Responsive Design` 🍁 Optimized for **mobile-first design**.
- `User Authentication` 🍁 Secure **login** and **signup** using `bcrypt`.
- `Blog Management` 🍁 **Create**, **edit**, **delete**, and **view** blogs.
- `User Profile` 🍁 Manage user **information** and blogs.
- `Image Upload` 🍁 Upload images using `Cloudinary`.
- `Error Handling` 🍁 Comprehensive `error handling` with **flash** messages.

<br/>

# Technologies Used 👩🏻‍💻🤖

- `bcrypt` 🌸 Library for **hashing passwords** to enhance security.
- `cloudinary` 🌸 **Cloud-based image** and video management service for uploading media.
- `compression` 🌸 Middleware to **compress HTTP responses**, improving performance.
- `connect-mongo` 🌸 **MongoDB session store** for Express and Connect, used for storing session data.
- `dotenv` 🌸  Loads **environment variables** from a `.env` file into `process.env`.
- `ejs` 🌸  Embedded **JavaScript templating engine** for rendering dynamic HTML content.
- `express` 🌸  Fast and minimalist **web framework** for building Node.js applications.
- `express-session` 🌸 Middleware for **managing sessions** in Express apps.
- `highlight.js` 🌸 Library for **syntax highlighting** in code blocks for better readability.
- `markdown-it` 🌸 **Markdown parser** that converts markdown text into HTML.
- `mongoose` 🌸 MongoDB **object modeling tool** designed to work in an asynchronous environment.
- `nodemon` 🌸 Tool that **automatically restarts the server** when file changes are detected.

<br/>

# Installation 🌐

1. Clone 🗃️ the repository 

      `For window 🍦`

    ```bash
      git clone https ➺//github.com/Prakhar-002/INKTALE-The-Blog-Site.git
      cd INKTALE-The-Blog-Site
    ```

    `For Linux and macOS 🧋`

    ```bash
      git clone https ➺//github.com/Prakhar-002/INKTALE-The-Blog-Site.git
      cd INKTALE-The-Blog-Site
    ```

2. Install⚡️dependencies ➺
    ```bash
      npm install
    ```

3. Create a `.env` file in the root directory and `add the following` ➺
    ```Javascript
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

# Usage 🍵🍰

- `Home Page` 🌼 View **all blogs**.
- `Authentication` 🌼 **Sign up** and **log in** to create and manage blogs.
- `User Profile` 🌼 **Access and edit** your **personal** information.
- `Create a Blog` 🌼 Write and publish new blog posts.
- `Edit/Delete a Blog` 🌼 Manage your published blogs throw `Dashboard`.
- `Reading List` 🌼 **Add blogs** from other users to your **personal reading list** for future reference.
- `React to Blogs` 🌼 **Like** and **engage** with other users' blogs to show **appreciation**.

<br/>

# Folder Structure 📒🗂️

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

# 🚀 About Me

Meet `Prakhar Katiyar` 🙋🏻‍♂️ , An avid learner with a passion for mastering the `MERN (MongoDB, Express.js, React.js, Node.js)` stack 🎯  and diving deep into `Data Structures and Algorithms (DSA)` 🧑🏻‍💻

<br/>

# Picture Library 📷📖

![SignIn](https://github.com/user-attachments/assets/21fb41aa-ff3e-4b7e-8054-ec08018449a6)
![Log In](https://github.com/user-attachments/assets/63d1af2a-2779-4805-ad25-a0e491a0676e)
![1](https://github.com/user-attachments/assets/41a34e36-29be-4f5e-826c-e97ae800596a)
![3](https://github.com/user-attachments/assets/f3ac92a4-015e-4005-b01f-ee7617eab48c)
![4](https://github.com/user-attachments/assets/b4c4e63e-6502-45c1-bb50-a8caaa6200eb)
![5](https://github.com/user-attachments/assets/086ace97-5009-4ffe-9c7e-7d2e933add46)
![6](https://github.com/user-attachments/assets/c5e2e4e7-ede8-4b2c-b983-8a88243e2ffe)
![7](https://github.com/user-attachments/assets/7b109dc9-1bd5-4941-98fc-689d7d53bb47)
![8](https://github.com/user-attachments/assets/37ede528-11ed-493c-92f3-64130589d96d)
![9](https://github.com/user-attachments/assets/a7437850-c559-4d86-aecf-f5e024b5276d)
![10](https://github.com/user-attachments/assets/9edd4340-ac43-4bcb-a52c-0015681209c0)
![11](https://github.com/user-attachments/assets/84c40960-a46e-4a34-9f59-3295e7933b6a)
![12](https://github.com/user-attachments/assets/a14cd4d1-9c21-41cd-af6f-f034cc0eecf1)
![13](https://github.com/user-attachments/assets/73024562-2b67-4145-8cb3-6e9de6e82286)
![14](https://github.com/user-attachments/assets/6ad431ea-e515-4fe4-bb51-3456ce67c61b)
![15](https://github.com/user-attachments/assets/a75d6acf-12b1-44d7-ae97-25ca1a4ed15f)
![16](https://github.com/user-attachments/assets/b0e59285-8df3-4e5a-96d2-774f6d65d7dd)
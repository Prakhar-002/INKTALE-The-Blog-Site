/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';

//? node modules

const express = require('express');
const path = require("path");
require('dotenv').config();
const session = require('express-session');
const MongoStore = require('connect-mongo');
const compression = require('compression');


// custom modules
const register = require('./src/routes/register_route.js');
const login = require('./src/routes/login_route.js');
const {connectDB, disconnectDB} = require('./src/config/mongoose_config.js');
const home = require('./src/routes/home_route.js');
const createBlog = require('./src/routes/create_blog_route.js');
const logout = require('./src/routes/logout_route.js');
const userAuth = require('./src/middlewares/user_auth_middleware.js');
const blogDetail = require('./src/routes/blog_detail_route.js');
const readingList = require('./src/routes/reading_list_route.js');
const blogUpdate = require('./src/routes/blog_update_route.js');
const profile = require('./src/routes/profile_route.js');
const dashboard = require('./src/routes/dashboard_route.js');
const deleteBlog = require('./src/routes/blog_delete_route.js');
const settings = require('./src/routes/settings_route.js');


// Initial express
const app = express();

// Compress response body
app.use(compression())


// setting view engine
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');


// Set public directory
app.use(express.static(`${__dirname}/public`));


// parse urlencoded body
app.use(express.urlencoded({ extended: true }));


// Parse json bodies
app.use(express.json({ limit: '10mb' }));


// Instance for session storage
const store = new MongoStore({
      mongoUrl: process.env.MONGO_CONNECTION_URL,
      collectionName: 'sessions',
      dbName: 'inktale'
});


// Initial express session
app.use(session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      store,
      cookie: {
            maxAge: Number(process.env.SESSION_MAX_AGE)
      }
}));


// Register page
app.use('/register', register);

// Log in Page
app.use('/login', login);

// Sign out
app.use('/logout', logout);


// Home page
app.use('/', home);

// Blog details page
app.use('/blogs', blogDetail);

// Profile page
app.use('/profile', profile);

// user authorization
app.use(userAuth);

// Create Blog page
app.use('/createblogs', createBlog);

// reading list page
app.use('/readinglist', readingList);

// blog update AND delete blog
app.use('/blogs', blogUpdate, deleteBlog);

// dashboard
app.use('/dashboard', dashboard);

// Settings page
app.use('/settings', settings);


// start the server
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
      console.log(`App is listening on http://localhost:${PORT}`);
      connectDB(process.env.MONGO_CONNECTION_URL)
});

server.on('close', async () => await disconnectDB());
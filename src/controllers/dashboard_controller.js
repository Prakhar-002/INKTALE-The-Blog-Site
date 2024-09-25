/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';


//? custom module
const User = require('../models/user_model.js');

const renderDashboard = async (req, res) => {
      try {

            // Get Logged user username
            const { username } = req.session.user;

            // Get session user data
            const loggedUser = await User.findOne({ username })
                              .select('totalVisits totalReactions blogPublished blogs')
                              .populate({
                                    path: 'blogs',
                                    select: 'title createdAt updatedAt reaction totalVisit',
                                    options: { sort: { createdAt: 'desc' } }
                              });

            res.render('./pages/dashboard.ejs', {
                  sessionUser: req.session.user,
                  loggedUser
            });


      } catch (error) {

            //  throw and log the error if any
            console.error('Error rendering dashboard: ', error.message);
            throw error;

      }
}

module.exports = renderDashboard;
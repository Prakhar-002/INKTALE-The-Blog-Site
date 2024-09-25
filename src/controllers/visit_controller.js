/*
      ! https://github.com/Prakhar-002
      ? © prakhar.katiyar.002@gmail.com
*/ 

'use strict';


//? custom module
const Blog = require(`../models/blog_model.js`);

const updateVisit = async (req, res) => {
      try {

            // Destructure blogId from request params
            const { blogId } = req.params;

            // Find the blog and update it's totalVisit count
            const visitedBlog = await Blog.findById(blogId)
                        .select('totalVisit owner')
                        .populate({
                              path: 'owner',
                              select: 'totalVisits'
                        });

            visitedBlog.totalVisit++;
            await visitedBlog.save();

            // update visited blog owner totalVisits count
            visitedBlog.owner.totalVisits++;
            await visitedBlog.owner.save();

            res.sendStatus(200);

      } catch (error) {

            //  throw and log the error if any
            console.error('Error updating totalVisits: ', error.message);
            throw error;

      }
}


module.exports = updateVisit;
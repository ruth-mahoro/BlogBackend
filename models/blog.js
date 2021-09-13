const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create blog Schema & model
const BlogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    content: {
        type: String
    },
    Date: {
        type: Date,default: Date.now
    },
    Name: {
        type: String
    },
});

const Blog = mongoose.model('blog', BlogSchema);

module.exports = Blog;

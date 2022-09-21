const mongoose = require('mongoose');

const BlogPostSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Please add a title'],
        unique: true,
        trim: true,
    },

    description : {
            type: String,
            required: true,
    },

    content: {
        type: String,
        required: true,
    },

    picture: {
        type: String,
    }

})

module.exports = mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
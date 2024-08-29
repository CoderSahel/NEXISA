const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },

    department: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    yop: {
        type: Number,
        required: true
    },

    domain:{
        type: String,
        required: true
    },

    driveLink: {
        type: String,
        required: true
    },
    createdAt: {
		type: Date,
		default: Date.now,
		expires: 60 * 60 * 24 * 90, // The document will be automatically deleted after 5 minutes of its creation time
	},
})

module.exports = mongoose.model('Register', registerSchema);
const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/vandecntt', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('connect succesfully');
    } catch (error) {
        console.log('failure');
    }
}

module.exports = { connect };

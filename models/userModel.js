const mongoose = require ('mongoose');

const UserSchema = mongoose.Schema(
    {
        username: {
        type: String,
        trim: true,
        maxLength: 50,
        required: [true, 'Username Required']
        },
        email: {
            type: String,
            required: [true, 'Email Required'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Your email was Wrong,please enter a valid email address",]
        },
        thoughts: {

        },
        friends: {

        }
    
    },
    
    {
        timestamps: true
    },

    {
        unique : true
    },

    {
        toJSON: {
          getters: true,
        },
    }
    
)

module.exports = UserSchema;
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    given_name: {
        type: String,
        required: true
    },
    family_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    verified_email: {
        type: Boolean,
        required: true,
        default: false
    },
    picture: {
        type: String,
        required: true
    },  
    locale: {
        type: String,
        required: true
    },
    tokenVersion: {
        type: Number,
        required: true,
        default: 0
    }
},{
    timestamps: true
});

// userSchema.methods.matchPassword = async function (enteredPassword) {
//     return await bcrypt.compare(enteredPassword, this.password);
// }

// userSchema.pre('save', async function (next) {
//     if(!this.isModified('password')) {
//         next()
//     }
    
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt)
// })

const User = mongoose.model('User', userSchema);

export default User;
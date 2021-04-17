import mongoose from 'mongoose';


const goalSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    goal: {
        type: String,
        required: true
    },
    month: {
        type: String,
        required: true
    }, 
    year: {
        type: String,
        required: true
    }
})

const Goal = mongoose.model('Goal', goalSchema);

export default Goal;
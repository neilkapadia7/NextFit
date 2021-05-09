import mongoose from 'mongoose';

const workoutDetails = mongoose.Schema({
    weight: {
        type: Number,
        required: true
    },
    date_of: {
        type: String,
        required: true,
    }
})

const weightSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    weightData: [workoutDetails]
})

const Weight = mongoose.model('Weight', weightSchema);

export default Weight;
import mongoose from 'mongoose';

const exerciseSchema = mongoose.Schema({
    exercise: {
        type: String,
        required: true
    },
    max_weight: {
        type: Number,
        required: true,
    },
    rep_range: {
        type: String,
        required: true
    }
})

const workoutSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    workoutInfo: exerciseSchema,
    date_of: {
        type: Date,
        required: true,
    }
})

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
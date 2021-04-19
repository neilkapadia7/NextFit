import mongoose from 'mongoose';

const workoutSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    workoutInfo: [
        {
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
            },
        }
    ],
    date_of: {
        type: String,
        required: true,
    },
    workoutType: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Workout = mongoose.model('Workout', workoutSchema);

export default Workout;
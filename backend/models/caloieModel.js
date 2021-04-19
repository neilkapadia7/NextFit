import mongoose from 'mongoose';

const userDetails = mongoose.Schema({
    calorie: {
        type: Number,
        required: true
    },
    date_of: {
        type: String,
        required: true,
    }
})

const calorieSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    calorieData: [userDetails],
    calorie_max: {
        type: Number,
        required: true,
        default: 2000
    }
});

const Calorie = mongoose.model('Calorie', calorieSchema);
export default Calorie;
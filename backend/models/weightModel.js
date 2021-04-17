import mongoose from 'mongoose';

const userDetails = mongoose.Schema({
    weight: {
        type: Number,
        required: true
    },
    date_of: {
        type: Date,
        required: true,
    }
})

const weightSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    weightData: userDetails
})

const Weight = mongoose.model('Weight', weightSchema);

export default Weight;
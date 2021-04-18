import asyncHandler from 'express-async-handler';
import Weight from '../models/weightModel.js'

/**
 * @route GET /api/weight
 * @description Get all Weights
 */
export const getWeights = asyncHandler(async (req, res) => {
    const weights = await Weight.findOne({ userId: req.user._id});

    if(weights) {
        res.json(weights);
    }
    else {
        res.status(404);
        res.json({message: 'No Weight Added for the Registered User'});
    }
});

/**
 * @route POST /api/weight
 * @description Post Weight
 */
export const addWeight = asyncHandler(async (req, res) => {
    const weights = await Weight.findOne({ userId: req.user._id});

    if(!weights) {
        res.status(401);
        res.json({message: 'Unauthorized to Add Weight'});
        throw new Error('Unauthorized to Add Weight')
    }

    const {
        weight,
        date_of
    } = req.body;

    const weightData = {
        weight,
        date_of
     }

     weights.weightData.push(weightData);

     await weights.save()
     res.status(201).json({ message: 'Weight added' })
});
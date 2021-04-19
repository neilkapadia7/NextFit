import asyncHandler from 'express-async-handler';
import Calorie from "../models/caloieModel.js";

/**
 * @route GET /api/calorie
 * @description Get Calories
 */
export const getCalories = asyncHandler(async (req, res) => {
    const calories = await Calorie.findOne({userId: req.user._id});

    if(calories) {
        res.status(200);
        res.json(calories);
    }
});

/**
 * @route POST /api/calorie
 * @description Add Calorie
 */
export const addCalories = asyncHandler(async (req, res) => {
    const calories = await Calorie.findOne({ userId: req.user._id});

    if(!calories) {
        res.status(401);
        res.json({message: 'Unauthorized to Add Calorie'});
        throw new Error('Unauthorized to Add Calorie')
    }

    const {
        calorie,
        date_of
    } = req.body;

    const calorieData = {
        calorie,
        date_of
     }

     weights.calorieData.push(calorieData);

     await weights.save()
     res.status(201).json({ message: 'Weight added' })
});
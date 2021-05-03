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
    else {
        const {
            calorie,
            date_of
        } = req.body;
    
        const calorieResult = calories.calorieData.some(data => data.date_of == date_of)

        if(calorieResult) {
            res.status(400).json({ message: 'Calories for the day already added' })
        }
        else {
            const calorieData = {
                calorie,
                date_of
            }
        
            calories.calorieData.push(calorieData);
        
            await calories.save()
            res.status(201).json({ calorieData: calories.calorieData })
        }
    }
});
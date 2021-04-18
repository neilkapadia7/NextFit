import Goal from '../models/goalModel.js';
import asyncHandler from 'express-async-handler';
import Moment from 'moment';

/**
 * @route POST /api/goal
 * @description Add A Goal(monthly)
 */
export const addGoal = asyncHandler(async (req, res) => {
    const {
        goal,
        month, 
        year
    } = req.body;

    const checkMonthYear = await Goal.find({userId: req.user._id, month: month, year: year});

    if(checkMonthYear.length > 0) {
        res.status(405)
        res.json({message: 'Goal for the month already added.'});
    }

    else {
        const goalAdd = new Goal({
            userId: req.user._id,
            goal,
            month,
            year
        }); 

        const checkGoalAdded = await goalAdd.save();

        if(checkGoalAdded) { 
            res.status(200)
            res.json({
                _id: goalAdd._id,
                userId: goalAdd.userId,
                goal: goalAdd.goal,
                month: goalAdd.month,
                year: goalAdd.year
            })
        }
    }

})

/**
 * @route GET /api/goal
 * @description Get Goal(monthly)
 */
export const getGoal = asyncHandler(async (req, res) => {
    const month = Moment().format('MMMM');
    const year = Moment().format('YYYY');
    const userId = req.user._id;

    const getMonthYearGoal = await Goal.find({userId, month, year});

    if(getMonthYearGoal.length > 0) {
        res.json(getMonthYearGoal)
    } else {
        res.json([]);
    }
})

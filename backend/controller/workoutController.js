import Workout from '../models/workoutModel.js'
import asyncHandler from 'express-async-handler'
import Moment from 'moment'

/**
 * @route POST /api/workout
 * @description Add Workout
 */
export const addWorkout = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    // const date_of = Moment().format('DD-MM-YYYY');

    const {
        workoutInfo,
        date_of,
        workoutType
    } = req.body;

    const checkWorkout = await Workout.find({userId, date_of});

    if(checkWorkout.length === 0) {
        const workout = new Workout({
            userId,
            workoutInfo,
            date_of,
            workoutType
        })

        const saveWorkout = await workout.save();

        if(saveWorkout) {
            res.json({
                userId: workout.userId,
                workoutInfo: workout.workoutInfo,
                date_of: workout.date_of
            })
        }
    }

    else {
        res.status(400);
        throw Error('Workout Already Added');
    }
})

/**
 * @route GET /api/workout
 * @description get all user workouts
 */
export const getWorkouts = asyncHandler(async (req, res) => {
    const allWorkout = await Workout.find({ userId: req.user._id });

    res.json(allWorkout);
})
import axios from 'axios';
import store from '../store';

export async function getMetricsForDays(fromDaysAgo, toDaysAgo) {
    try {

        const state = store.getState();
        const {user: {access_token}} = state

        var start = new Date();
        start.setHours(0,0,0,0); //Date.setHours(hour, min, sec, millisec)
        // start.setDate(start.getDate() - toDaysAgo);
        start.setDate(start.getDate());
    
        var end = new Date();
        end.setHours(23,59,59,999);
        // end.setDate(end.getDate() - fromDaysAgo);
        end.setDate(end.getDate());
        
        // var fitService = getFitService();
        
        var request = {
                "aggregateBy": [{
                  "dataTypeName": "com.google.step_count.delta",
                  "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
                }],
                "bucketByTime": { "durationMillis": 86400000 },
                "startTimeMillis": start.getTime(),
                "endTimeMillis": end.getTime()
        // "aggregateBy": [
        //     {
        //     "dataTypeName": "com.google.step_count.delta",
        //     "dataSourceId": "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
        //     },
        //     {
        //     "dataTypeName": "com.google.weight.summary",
        //     "dataSourceId": "derived:com.google.weight:com.google.android.gms:merge_weight"
        //     },
        //     {
        //     "dataTypeName": "com.google.distance.delta",
        //     "dataSourceId": "derived:com.google.distance.delta:com.google.android.gms:merge_distance_delta"
        //     }
        // ],
        // "bucketByTime": { "durationMillis": 86400000 },
        // "startTimeMillis": start.getTime(),
        // "endTimeMillis": end.getTime()
        };
        
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${access_token}`
            }
        }

        var response = await axios.post('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', 
            request
            , config);
        
        // var json = JSON.parse(response);

        console.log('Google fit Res ::::::::', response)
        // var ss = SpreadsheetApp.getActiveSpreadsheet();
        // var sheet = ss.getSheetByName(tabName);
        
        // for(var b = 0; b < json.bucket.length; b++) {
        // // each bucket in our response should be a day
        // var bucketDate = new Date(parseInt(json.bucket[b].startTimeMillis, 10));
        
        // var steps = -1;
        // var weight = -1;
        // var distance = -1;
        
        // if (json.bucket[b].dataset[0].point.length > 0) {
        //     steps = json.bucket[b].dataset[0].point[0].value[0].intVal;
        // }
        
        // if (json.bucket[b].dataset[1].point.length > 0) {
        //     weight = json.bucket[b].dataset[1].point[0].value[0].fpVal;
        // }
        
        // if (json.bucket[b].dataset[2].point.length > 0) {
        //     distance = json.bucket[b].dataset[2].point[0].value[0].fpVal;
        // }
        
        // console.log('Google FIt',[bucketDate, 
        //                 steps == -1 ? ' ' : steps, 
        //                 weight == -1 ? ' ' : weight, 
        //                 distance == -1 ? ' ' : distance]);
        // }
    } 
    catch (err ){
        console.log('Google Fit ERRORRRR: ::::::::::',err)
    }
}
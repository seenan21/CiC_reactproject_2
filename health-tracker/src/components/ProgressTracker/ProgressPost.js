import CanvasJSReact from '@canvasjs/react-charts';
import { useEffect, useState } from 'react';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const ProgressPost = ({ goals, posts }) => {
    const[ dataPoints, setDataPoints] = useState([]);


    useEffect   (() => {
        findWeekGoals(posts);
    }, [posts])

    function checkWithinWeek(date, startDay) {
        let date1 = new Date(date);
        let date2 = new Date(startDay);
        let diffTime = date1.getTime() - date2.getTime();
        let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays < 7;
    }

   let findWeekGoals = (posts) => {
        let totalDuration = 0;
        let totalCalories = 0;
        let startDay = goals[2];

        let updatedDataPoints = [];

        let sortedPosts = posts.sort((a, b) => new Date(a.date) - new Date(b.date));
        for (let i = 0; i < sortedPosts.length; i++) {
            if (checkWithinWeek(sortedPosts[i].date, startDay)){
                totalDuration += sortedPosts[i].duration;
                totalCalories += sortedPosts[i].calories;
                updatedDataPoints.push({x: new Date(sortedPosts[i].date), y: totalCalories});
                
            }
        }
        const initialDataPoint = {x: new Date(startDay), y: 0};
        updatedDataPoints.unshift(initialDataPoint);
        setDataPoints(updatedDataPoints);
    }


    
        
    
    
    const options = {
        responsive:true,
        title: {
            text: "Weekly goals for week starting from " + String(goals[2]),
        },
        axisY: {
            title: "Calories burned",
            suffix: "cal",
            //set max
            maximum: goals[1],
        },
        axisX: {
            //set intervals to be days
            intervalType: "day",
             interval: 1, // Set the interval to 1 to display scale intervals by days
            valueFormatString: "DD MMM", // Format x-axis labels
            title: "Activity throughout the week",  
            
        },
        data: [{		
                  theme: "light2",		
                  type: "line",
                  xValueFormatString: "D’th’ MMMM hh:mm	",
				  yValueFormatString: "#,###,.cal",
				  dataPoints: dataPoints
         }]
    }


    return (
        <div className='prog-post' style={{ width: '30rem', height: '400px' }}>
            <h2>Progress Tracker</h2>
            <CanvasJSChart  options={options} containerProps={{ width: '100%', height: '300px' }} />
        </div>
    )

}

export default ProgressPost;
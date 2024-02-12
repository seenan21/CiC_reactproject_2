import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const ProgressPost = ({ goals }) => {
    const dataPoints = [];
    
    const options = {
        title: {
            text: "Weekly goals for week" + String(goals[2]),
        },
        axisY: {
            title: "Calories burned",
            includeZero: false,
            suffix: "cal",
            //set max
            maximum: goals[1],
            viewportmaximum: goals[1],
        },
        axisX: {
            title: "Activity throughout the week",  
            interval: 1,
            
        },
        data: [{		
                  theme: "light2",		
                  type: "line",
                  xValueFormatString: "D’th’ MMMM hh:mm tt	",
				  yValueFormatString: "#,###,.##cal",
				  dataPoints: dataPoints
         }]
    }


    return (
        <div>
            <h2>Progress Tracker</h2>
            <CanvasJSChart  options={options}/>
        </div>
    )

}

export default ProgressPost;
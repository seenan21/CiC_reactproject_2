import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const ProgressPost = ({ goals }) => {
    


    return (
        <div>
            <h2>Progress Tracker</h2>
            <CanvasJSChart   />
        </div>
    )

}

export default ProgressPost;
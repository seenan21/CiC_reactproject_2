
import React, { useState } from 'react';
import './Activity.css'
const ActivityForm = ({ setPosts }) => {

    const [radio, setRadio] = useState('low')

    const handleRadio = (e) => {
        setRadio(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        let activity = e.target[0].value;
        let date = e.target[1].value;
        let duration = parseInt(e.target[2].value);
        let calories = parseInt(e.target[7].value);
        
        console.log("Activity: "+ activity,"date: " + date,"duration: " + duration,"intensity: "+radio, "calories: " + calories);
        
        setPosts(x => {
            console.log("updating", x);

            let updatedPosts = [...x]
            updatedPosts.unshift({
                activity, date, duration, calories, intensity: radio
            })
            return updatedPosts
        })
    }

    return (

        <form onSubmit={handleSubmit} id='activity-form'>
            <div>

                <label >Activity:</label>
                <input id='activity' placeholder='Name of Activity' required />
            </div>
            <div>
                <label >Date:</label>
                <input type='date' required />
            </div>
            <div>
                <label >Duration:</label>
                <input placeholder='minutes' required type='number' />

            </div>
            <label>Intensity: </label>
            <div>
                <div>
                    <input type="radio" id="option1" name="group1" value="low" onChange={handleRadio} required />
                    <label htmlFor="option1">Low</label>
                    <input type="radio" id="option2" name="group1" value="moderate" onChange={handleRadio} />
                    <label htmlFor="option2">Moderate</label>
                    <input type="radio" id="option3" name="group1" value="high" onChange={handleRadio} />
                    <label htmlFor="option3">High</label>
                    <input type="radio" id="option4" name="group1" value="very high" onChange={handleRadio} />
                    <label htmlFor="option4">Very High</label>
                </div>
                <div>
                </div>
                <label >Calories Burned:</label>

                <input placeholder='calories burned' required type='number' />
            </div>


            <button type=''>Submit</button>
        </form>
    )

    // Implement this function to handle the form submission


}

export default ActivityForm;
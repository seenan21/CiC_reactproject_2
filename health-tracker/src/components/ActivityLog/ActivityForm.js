
import React, { useState } from 'react';
import './Activity.css'
const ActivityForm = () => {

    const [radio, setRadio] = useState('low')

    const handleRadio = (e) => {
        setRadio(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
        console.log(radio);
        let name = e.target[0].value;
        let date = e.target[1].value;
        let duration = e.target[2].value;
        let calories = e.target[7].value;
        console.log(name, date, duration, calories);
    }

    return (

        <form onSubmit={handleSubmit} id='activity-form'>
            <div>

                <label >Activity:</label>
                <input id='activity' placeholder='Name of Activity' />
            </div>
            <div>
                <label >Date:</label>
                <input type='date' />
            </div>
            <div>
            <label >Duration:</label>
            <input placeholder='duration' />

            </div>
            <div>
                <input type="radio" id="option1" name="group1" value="low" onChange={handleRadio} required />
                <label htmlFor="option1">Low</label>
                <input type="radio" id="option2" name="group1" value="moderate" />
                <label htmlFor="option2">Moderate</label>
                <input type="radio" id="option3" name="group1" value="high" />
                <label htmlFor="option3">High</label>
                <input type="radio" id="option4" name="group1" value="very-high" />
                <label htmlFor="option4">Very High</label>
            </div>
            <div>
            <label >Calories Burned:</label>

            <input placeholder='calories burned' />
            </div>


            <button type=''>Submit</button>
        </form>
    )

    // Implement this function to handle the form submission


}

export default ActivityForm;
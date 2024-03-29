import React, { useState } from 'react';
const ActivityForm = ({ setPosts }) => {
    // State to control radio buttons
    const [radio, setRadio] = useState('low')

    const handleRadio = (e) => {
        setRadio(e.target.value)
    }


    const putActivity = (activity, date, duration, intensity, calories) => {
        fetch('https://65e0e270d3db23f7624a3bf8.mockapi.io/act/activities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                activity, date, duration, intensity, calories
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    const handleSubmit = (e) => {
        e.preventDefault()

        // getting the html elements
        let activity = e.target[0].value;
        let date = e.target[1].value;
        let duration = parseInt(e.target[2].value);
        let calories = parseInt(e.target[7].value);

        console.log("Activity: " + activity, "date: " + date, "duration: " + duration, "intensity: " + radio, "calories: " + calories);

        // uploads the activity.
        putActivity(activity, date, duration, radio, calories);

        // Resets input on submit
        e.target[0].value = '';
        e.target[1].value = '';
        e.target[2].value = '';
        e.target[7].value = '';

        // adds the new activity locally
        setPosts((prev) => {
            return [...prev, { activity, date, duration, intensity: radio, calories }]
        }
        )
    }
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 7);

    return (

        <form onSubmit={handleSubmit} id='activity-form' className='card'>
            <div>

                <label >Activity:</label>
                <input id='activity' placeholder='Name of Activity' type='text' required />
            </div>
            <div>
                <label >Date:</label>
                <input type='date' min={new Date().toISOString().split('T')[0]} max={maxDate.toISOString().split('T')[0]} required />
            </div>
            <div>
                <label >Duration:</label>
                <input placeholder='minutes' required type='number' />

            </div>
            <div>
                <label>Intensity: </label>

            </div>
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
                    <label >Calories Burned:</label>
                    <input placeholder='calories burned' required type='number' />
                </div>
            </div>


            <button type=''>Submit</button>
        </form>
    )


}

export default ActivityForm;
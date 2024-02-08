import React, { useState } from 'react';

const ProgressForm = ({progress, setProgress}) => {

    const [duration, setDuration] = useState(0)
    const [calories, setCalories] = useState(0)
    const [startDay, setStartDay] = useState('')

    
    // Check progress form is for new week

    const checkProgressForm = (progress) => {
        let lastWeek = progress[2];
        lastWeek = new Date(lastWeek);
        let currentWeek = new Date(startDay);
        

        const diffTime = currentWeek.getTime() - lastWeek.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 7) {
            return true;
        }
    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (checkProgressForm(progress)) {
            alert('You can only submit progress for a new week. Please set goals for the next week.');
            return;
        }
        console.log("duration: " + duration, "calories: " + calories, "startDay: " + startDay);
        setProgress([duration, calories, startDay])
    }

    const handleDuration = (e) => {
        setDuration(e.target.value)
    }
    const handleCalories = (e) => {
        setCalories(e.target.value)
    }
    const handleStartDay = (e) => {
        setStartDay(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} id='progress-form'>
            <div>
                <label >Goal for total duration of exercise in a week:</label>
                <input placeholder='minutes' required type='number' onChange={handleDuration} />
            </div>
            <div>
                <label > Goal for calories burned:</label>
                <input placeholder='calories' required type='number' onChange={handleCalories} />
            </div>
            <div>
                <label >Start Day:</label>
                <input type='date' required onChange={handleStartDay} />
            </div>
            <button type='submit'>Submit</button>
        </form>
    )



}

export default ProgressForm;
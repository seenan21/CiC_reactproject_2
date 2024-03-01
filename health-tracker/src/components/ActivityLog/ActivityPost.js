export default function ActivityPost({activity,date,duration,intensity,calories}) {
    return(
        <div className="card">
            <h2>Activity: {activity}</h2>
            <p>Date: {date}</p>
            <p>Duration: {duration} minutes</p>
            <p>Intensity: {intensity}</p>
            <p>Calories burned: {calories}</p>

        </div>
    )
}
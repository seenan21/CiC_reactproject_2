export default function ActivityPost({activity,date,duration,intensity,calories}) {
    return(
        <div className="card">
            <h2>Activity: {activity}</h2>
            <p>date: {date}</p>
            <p>duration: {duration} minutes</p>
            <p>intensity: {intensity}</p>
            <p>calories burned: {calories}</p>

        </div>
    )
}
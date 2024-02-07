import ActivityPost from "./ActivityPost"

export default function ActivityLog({posts}) {
    console.log(posts);
    
    return(
        <div className="activity-log-container">
            {posts && posts.map(x=>{
                return <ActivityPost activity={x.activity} date={x.date} duration={x.duration} intensity={x.intensity} calories={x.calories} />
            })}
            
        </div>
    )
}
import React from 'react';
import './module.dashboard.css';


const Dashboard = ({thumbImage, trainerImage, workout_title, time, mile, singleWorkout}) => {
    return (
        <div className="dashboard-container">
            <div className="thumb-image-container">
                <img className="img-container" alt="" src={thumbImage}/>
            </div>
            <div className="title-and-image-container">
                <span> {workout_title} </span>
                <img className="small-image-container" alt="" src={trainerImage}/>
            </div>
            <div className="description-container">
              { singleWorkout && <i className="far fa-clock"></i>}
              { singleWorkout && <span>{time} </span>}
              { singleWorkout && <i className="fas fa-football-ball"></i>}
              { singleWorkout && <span>{mile}</span>}
            </div>

            <div className="view-details-container">
                <a href="" target="_blank">View Details</a>
            </div>
        </div>
    )
}

export default Dashboard;

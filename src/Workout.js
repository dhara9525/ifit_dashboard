import React from 'react';
import './module.workout.css';
import minutes20Thumb from'./iFit_images/minutes20Thumb.jpg';

const Workout=()=>{

  return(
    <div className="workout-container">
      <div className="background-thumb-image-container">
          <img className="background-thumb-image" alt="" src={minutes20Thumb}/>
          <div className="workout-details">
            <p> 12</p>
            <p> Workout </p>
            <i className="fas fa-stream"></i>
          </div>

      </div>
    </div>
  )
}

export default Workout;

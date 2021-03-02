import './App.css';
import Dashboard from './Dashboard.js';
import Workout from './Workout.js'


import lake_inniscarra_trainer from './iFit_images/lakeInniscarraTrainer.jpg';
import lake_inniscarra_thumb from './iFit_images/lakeInniscarraThumb.jpg';

import performanceSeriesThumb from './iFit_images/performanceSeriesThumb.jpg';
import performanceSeriesTrainer from './iFit_images/lakeInniscarraTrainer.jpg';

import slowPullsThumb from './iFit_images/slowPullsThumb.jpg';
import slowPullsTrainer from './iFit_images/slowPullsTrainer.jpg';


import minutes20Thumb from './iFit_images/minutes20Thumb.jpg';
import minutes20Trainer from './iFit_images/minutes20Trainer.jpg';

import charlesRaceThumb from './iFit_images/charlesRaceThumb.jpg';
import charlesRaceTrainer from './iFit_images/charlesRaceTrainer.jpg';


import fullBodyThumb from './iFit_images/fullBodyThumb.jpg';
import fullBodyTrainer from './iFit_images/fullBodyTrainer.jpg';

import kafueRiverThumb from './iFit_images/kafueRiverThumb.jpg';
import kafueRiverTrainer from './iFit_images/kafueRiverTrainer.jpg';

import shredAndBburnThumb from './iFit_images/shredAndBburnThumb.jpg';
import shredAndBburnTrainer from './iFit_images/shredAndBburnTrainer.jpg';

function App() {

    var workout = [
        {
            id: 1,
            singleWorkout: true,
            thumbImage: lake_inniscarra_thumb,
            trainerImage: lake_inniscarra_trainer,
            workout_title: 'Lake Inniscarra',
            time: 200,
            mile: '105 M '
        },
        {
            id: 2,
            singleWorkout: false,
            thumbImage: performanceSeriesThumb,
            trainerImage: performanceSeriesTrainer,
            workout_title: 'Performance Series',
            time: null,
            mile: null
        },
        {
            id: 3,
            singleWorkout: true,
            thumbImage: slowPullsThumb,
            trainerImage: slowPullsTrainer,
            workout_title: 'Slow Pulls and Fast Intervals',
            time: 500,
            mile: '5514 M'
        },
        {
            id: 4,
            singleWorkout: false,
            thumbImage: minutes20Thumb,
            trainerImage: minutes20Trainer,
            workout_title: '20 Minutes to toned',
            time: null,
            mile: null
        },
        {
            id: 5,
            singleWorkout: true,
            thumbImage: charlesRaceThumb,
            trainerImage: charlesRaceTrainer,
            workout_title: 'Charles rase, Boston, Massachusetts',
            time: 30,
            mile: '5050 M '
        },
        {
            id: 6,
            singleWorkout: false,
            thumbImage: fullBodyThumb,
            trainerImage: fullBodyTrainer,
            workout_title: 'Full Body HIIT series',
            time: null,
            mile: null
        },
        {
            id: 7,
            singleWorkout: true,
            thumbImage: kafueRiverThumb,
            trainerImage: kafueRiverTrainer,
            workout_title: 'kafue River ',
            time: 30,
            mile: '5050 M '
        },
        {
            id: 8,
            singleWorkout: false,
            thumbImage: shredAndBburnThumb,
            trainerImage: shredAndBburnTrainer,
            workout_title: 'Shred And Burn',
            time: null,
            mile: null
        },

    ]
    return (
        <div className="App">
            {workout.map((value) =>
                (
                    <Dashboard
                        key={value.id}
                        thumbImage={value.thumbImage}
                        trainerImage={value.trainerImage}
                        workout_title={value.workout_title}
                        time={value.time}
                        mile={value.mile}
                        singleWorkout={value.singleWorkout}
                    />
                ))}
                
        </div>

    );
}

export default App;

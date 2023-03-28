import React from 'react';
import {Link} from 'react-router-dom'
import Auth from '../utils/auth';

// Insirational quote api.  Couldn't figure out how to implement. setting aside for now
// fetch("https://type.fit/api/quotes")
// .then(function(response) {
//   return response.json();
// })
// .then(function(data) {
//   const randomData = data[Math.floor(Math.random() * data.length)]
//   console.log(data)
//   const quote = randomData.text
//   return quote
// })


const Home = () => {


  return (
    <main className='row'>
      <div className='col-12'>
        <h3>

        </h3>
      </div>
      <div className='col-4'>
        <h1>Rack</h1>
        <button className='btn btn-info'>
          <h3 className='p-5'>
          View Workouts
          </h3>
        </button>
        </div>

        <div className='col-4'>
        <h1>Track</h1>
        <button className='btn btn-info'>
          <h3 className='p-5'>
          View Activity
          </h3>
        </button>
        </div>

        <div className='col-4'>
        <h1>Max</h1>
        <button className='btn btn-info'>
        <Link to='/NewWorkout' >
          <h3 className='p-5'>
          Start Workout
          </h3>
          </Link>
        </button>
        </div>

    </main>
  );
}

export default Home;

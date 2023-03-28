import { useMutation } from "@apollo/client";
import React, { useState } from "react";

import Auth from '../utils/auth'
import { ADD_WORK } from "../utils/mutations";

const NewWorkout = () => {
    const[workoutState, setWorkState] = useState({
        workoutTitle: '',
    });
    let username = '';
    const expired = Auth.isTokenExpired(Auth.getToken());
    if (!expired) {
        username = Auth.getUsername();
    }
    
    const[createWorkout, {error}] = useMutation(ADD_WORK)
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setWorkState({
            ...workoutState,
            [name]: value,
        })
        
    };
    
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            await createWorkout({
                variables: { ...workoutState },
            });
            window.location.reload()
            
            // clear form value
            setWorkState('');
        } catch (e) {
            console.error(e);
        }
    };
    
    return (
        <main className="row">
            {Auth.loggedIn() ? (        <div className="card col-12 col-md-8">
        <h4 className="card-header">Name Workout</h4>
        <div className="card-body">
        
        <form>
        <div className="form-group">
        <label for="workoutTitle">Workout</label>
        <input 
        type="workoutTitle" 
        className="form-control" 
        id="workoutTitle" 
        name="workoutTitle"
        placeholder="Enter workout name"
        value={workoutState.workoutTitle}
        onChange={handleChange}
        ></input>
        </div>
        
        <button type="submit" onClick={handleFormSubmit} class="btn btn-primary mt-2">Submit</button>
        </form>
        
        </div>
        </div>) : (
        <>
        <h2>Please Login to record workout</h2>
        </>)}

        </main>
        )
    }
    
    export default NewWorkout
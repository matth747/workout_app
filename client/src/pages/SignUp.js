import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error }] = useMutation(ADD_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="row">
        <div className="card col-md-8 col-12">
          <h4 className="card-header">Sign Up</h4>
          <div className="card-body">
            
          <form>
            <div className="form-group">
              <label for="username">Username</label>
              <input 
              type="username" 
              className="form-control" 
              id="username" 
              name="username"
              placeholder="Username"
              value={formState.username}
              onChange={handleChange}
              ></input>
            </div>
            <div className="form-group">
              <label for="email">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="email" 
                name="email"
                placeholder="Enter email"
                value={formState.email}
                onChange={handleChange}
                ></input>
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <input type="password" 
              className="form-control" 
              id="password" 
              name="password"
              placeholder="Password"
              value={formState.password}
              onChange={handleChange}
              ></input>
            </div>

            <button type="submit" onClick={handleFormSubmit} className="btn btn-primary mt-2">Submit</button>
          </form>
            {error && <div className='text-center'>Signup Failed😕</div>}
          </div>
        </div>

    </main>
  );
};

export default Signup;

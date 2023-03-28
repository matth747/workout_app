import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ 
    email: '', 
    password: '', 
  });
  const [login, { error }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }


  };

  return (
    <main className="row">
    <div className="card col-6">
      <h4 className="card-header">Login</h4>
      <div className="card-body">
        
      <form>
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

        <button type="submit" onClick={handleFormSubmit} class="btn btn-primary mt-2">Submit</button>
      </form>
        {error && <div className='text-center'>😕Login Failed😕</div>}
      </div>
    </div>

</main>
  );
};

export default Login;

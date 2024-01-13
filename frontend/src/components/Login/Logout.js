import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';

const Signout = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const { setToken } = useContext(userContext);

  const handleSignOut = () => {
    // Implement your sign-out logic here
    // For example, clear the token from localStorage
localStorage.clear();


    // Update the state to reflect the user is signed out
    setToken(null);

    // Redirect to the dashboard page after sign-out
    navigate('/Home');
  };
  handleSignOut()
  return (
    <button type="button" className="btn btn-primary" onClick={handleSignOut}>
      Sign out
    </button>
  );
};

export default Signout;

import { useDispatch } from 'react-redux';
import { signOut } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const SignOutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(signOut());
    navigate('/signin'); 
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
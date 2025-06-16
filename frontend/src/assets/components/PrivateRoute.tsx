import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../../services/auth';

interface Props {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: Props) {
  return isAuthenticated() ? children : <Navigate to="/login" />;
}
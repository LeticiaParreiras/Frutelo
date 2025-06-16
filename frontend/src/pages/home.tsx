import { logout } from '../services/auth';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      
      <button onClick={handleLogout}>Sair</button>
    </div>
  );
}
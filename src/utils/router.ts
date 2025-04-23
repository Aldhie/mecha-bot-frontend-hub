
import { useNavigate, useLocation } from 'react-router-dom';

export const useRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return {
    pathname: location.pathname,
    query: new URLSearchParams(location.search),
    navigate,
    push: (path: string) => navigate(path),
  };
};

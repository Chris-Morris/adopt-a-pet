import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navigation />
      <HomePage />
    </div>
  );
}

export default App;

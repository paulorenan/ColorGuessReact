import { Switch, Route, BrowserRouter } from 'react-router-dom';
import MainPage from './components/MainPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={ MainPage } />
    </Switch>
    </BrowserRouter>
  );
}

export default App;

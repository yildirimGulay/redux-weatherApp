
import './App.css';
import Form from './components/Form';
import Titles from './components/Titles';
import WeatherApp from './components/WeatherApp';

function App() {
  return (
    <div className="App">

      <Titles/>
      
      <Form/>

      <WeatherApp/>

    </div>
  );
}

export default App;

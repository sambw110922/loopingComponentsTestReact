import logo from './logo.svg';
import './App.css';

//  Imports the main navigation
import { Navigation } from "./navigation/navigation.js";

//  The  main houses app
import { HousesApp } from "./housesapp/houses_app.js";

function App() {
  return (
    <div>
      <Navigation />
      <HousesApp />
    </div>
  );
}

export default App;

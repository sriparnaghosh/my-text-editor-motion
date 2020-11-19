import logo from './logo.svg';
import './App.css';
import MyPage from './Components/MyPage.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <MyPage/>
      </header>
    </div>
  );
}

export default App;

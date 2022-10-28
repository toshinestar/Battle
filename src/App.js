import logo from './logo.svg';
import './App.css';
function getGreeting(user){
  if(user){
    return <h1>Hello,{user}!</h1>
  }
  return <h1>Hello, Stanger!</h1>
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>It is {new Date().toLocaleDateString()}.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {getGreeting("toshinestar")}
        </a>
      </header>
    </div>
  );
}

export default App;

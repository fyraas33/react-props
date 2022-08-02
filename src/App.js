import './App.css';
import Profile from './profile/Profile';

function App() {
  const handlefiras=(name)=>{
    alert(name)
  }
  return (
    <div className="App">
      <header className="App-header">
       <Profile handleName={handlefiras} fullName='Firas Chagra' bio='Gabes' profession='web developer'>
         <img className='img' src='https://img.freepik.com/free-vector/hand-drawn-web-developers_23-2148819604.jpg?w=2000' alt='firas'/>
       </Profile>
      </header>
    </div>
  );
}

export default App;
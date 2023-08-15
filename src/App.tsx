import ReactDOM from 'react-dom';
import LoginForm from './components/Login/LoginForm';
import RegisterForm from './components/Register/RegisterForm';
import HomePageForm from './components/HomePage/HomePageForm';

function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      <HomePageForm />
      </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
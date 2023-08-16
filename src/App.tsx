import ReactDOM from 'react-dom';
import LoginForm from './views/Login/LoginForm';
import RegisterForm from './views/Register/RegisterForm';
import HomePageForm from './views/HomePage/HomePageForm';
import Logo from './components/Logo/Logo';

function App() {
  return (
    <div className="App">
      {/* <Logo /> */}
      {/* <LoginForm /> */}
      {/*<RegisterForm /> */}
      <HomePageForm />
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
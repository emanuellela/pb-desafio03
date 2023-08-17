import ReactDOM from 'react-dom';
import LoginForm from './views/Login/LoginForm';
import RegisterForm from './views/Register/RegisterForm';
import HomePageForm from './views/HomePage/HomePageForm';
import Logo from './components/Logo/Logo';
import Card from './components/Card/CardHomePage';

function App() {
  return (
    <div className="App">
      {/* <Logo /> */}
      {/*<LoginForm />*/}
      <RegisterForm />
      {/* <HomePageForm /> */}
      {/*<Card title={''} description={''} hpageImages={[]} />*/}
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;
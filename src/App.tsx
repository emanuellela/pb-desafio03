import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './services/navigation/AppRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <AppRoutes />
      </Router>
      {/*<HomePageForm/>*/}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
// Rederiza HomePage diretamente
//ReactDOM.render(<HomePageForm />, document.getElementById('root'));
export default App;
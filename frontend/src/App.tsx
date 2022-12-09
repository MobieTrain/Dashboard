import { Header } from './components/Header';
import { Dashboard } from './containers/Dashboard';

console.log('error');

function App() {
  return (
    <div className="App">
      <Header />
      <img src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/lm6ycpwrgyjqvpqaywj6'></img>
      <Dashboard />
    </div>
  );
}

export default App;

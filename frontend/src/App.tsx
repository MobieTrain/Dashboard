import { Header } from './components/Header';
import { Dashboard } from './containers/Dashboard';
import { XSS2 } from './Xss/XSS';

console.log('error');

const password = '123Password';

console.log(password);
function App() {
  return (
    <div className="App">
      <Header />
      <XSS2 />
      <Dashboard />
    </div >
  );
}

export default App;

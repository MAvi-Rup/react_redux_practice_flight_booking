import './styles.css';
import Header from "./components/Header"
import { Provider } from 'react-redux';
import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <Header />
     
    </Provider>
  );
}

export default App;

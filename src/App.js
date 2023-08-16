import './styles.css';
import Header from "./components/Header"
import { Provider } from 'react-redux';
import store from './redux/store';
import InputSection from './components/Booking/InputSection';
import BookingList from './components/Booking/BookingList';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <InputSection />
      <BookingList />
     
    </Provider>
  );
}

export default App;

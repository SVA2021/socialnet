import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Heroimg from './components/Header/Heroimg/Heroimg';
import Main from './components/Main/Main';

function App(props) {

  return (
    <div className="App">
      <BrowserRouter>
      
      <Header/>
      <Heroimg />
      <Main store={props.store} />
      <Footer/>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
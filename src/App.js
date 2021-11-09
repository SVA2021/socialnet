import './App.css';
import Header from './components/Header/Header';
import Heroimg from './components/Header/Heroimg/Heroimg';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App(props) {

  return (
    <div className="App">

      <Header/>
      <Heroimg />
      <Main store={props.store}/>
      <Footer/>
      
    </div>
  );
}

export default App;
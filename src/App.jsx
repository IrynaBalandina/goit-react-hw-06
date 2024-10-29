
import style from  './App.module.css';
import ContactList from './components/ContactList/ContactList';

import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';



function App() {
 

  return (
    <div>
    <h1 className = {style.title}>Phonebook</h1>
   
    <ContactForm/>
    <SearchBox />
    <ContactList/>

  </div>
  )
}

export default App;

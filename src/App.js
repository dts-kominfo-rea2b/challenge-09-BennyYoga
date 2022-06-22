import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';

// Uncomment untuk memuat daftar kontak
import contacts from './data/contacts.json';

const App = () => {
  // Masukkan Header dan Contact ke dalam div App
  console.log(contacts);
  return (
    <div className="App">
        <Header />
        <Contact source={contacts[0]}/>
        <Contact source={contacts[1]}/>
        <Contact source={contacts[2]}/>
        <Contact source={contacts[3]}/>
        <Contact source={contacts[4]}/>
        <Contact source={contacts[5]}/>
    </div>
  );
}

export default App;

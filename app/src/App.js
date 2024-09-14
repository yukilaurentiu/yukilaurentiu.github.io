import './App.css';
import ContactForm from './components/ContactForm';
import Example from './components/Example';

function App() {
  return (
    <div className="App">
      <card className="App-card">
        <ContactForm/>
      </card>
      <Example/>
    </div>
  );
}

export default App;

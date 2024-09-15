import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./components/ContactForm";
import Example from "./components/Example";
import BusinessCard from "./components/BusinessCard";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Example />} />
            <Route path="/business-card" element={<BusinessCard />} />
            <Route path="/contact" element={<ContactForm />} />
        </Routes>
      </div>
    </Router>
    // <div className="App">
    //   <card className="App-card">
    //     <ContactForm/>
    //   </card>
    //   <Example/>
    // </div>
  );
}

export default App;

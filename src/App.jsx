import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompleteApp from './components/CompleteApp';
import Footer from './components/Footer';

const App = () => (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<CompleteApp />}></Route>
      </Routes>
      <Footer />
    </Router>
  </>
);

export default App;

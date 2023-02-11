import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CompleteApp from './components/CompleteApp';

const App = () => (
  <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<CompleteApp />}></Route>
      </Routes>
    </Router>
  </>
);

export default App;

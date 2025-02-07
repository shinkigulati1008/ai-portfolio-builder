
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PortfolioForm from './components/Portfolioform';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioForm />} />
      </Routes>
    </Router>
  );
}

export default App

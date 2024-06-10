import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import NotFoundError from './components/NotFoundError/NotFoundError'
import Repository from "./components/Repository/Repository";
import Repositories from "./components/Repositories/Repositories";
import ErrorBoundaries from "./components/ErrorBoundaries/ErrorBoundaries";


function App() {

  return (
    <Router>
      <ErrorBoundaries>
        <Routes>
          <Route path="/" element={<Repositories />} />
          <Route path="/repos/:repoName" element={<Repository />} />
          <Route path="*" element={<NotFoundError />} />
        </Routes>
      </ErrorBoundaries>
    </Router>

    )

}

export default App; 
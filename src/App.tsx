import { Routes, Route} from "react-router-dom"
import './App.css'
import { Layout } from "./components/ui/layout";
import { HomePage } from "./pages/HomePage";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Add other routes */}
      </Routes>
    </Layout>
  );
}

export default App

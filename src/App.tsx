import { Routes, Route } from "react-router";
import { Landing, Auth } from "./pages";

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/:mode" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;

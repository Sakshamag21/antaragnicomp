import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyBook from "./pages/braochure";
import Tile from "./pages/media";
import Gallery1 from "./pages/gallery1";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="brochure" element={<MyBook />} />
        <Route path="media" element={<Tile />} />
        <Route path="gallery" element={<Gallery1 />} />
          
    
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
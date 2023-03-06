import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyBook from "./pages/braochure";
import Tile from "./pages/media";
import Gallery1 from "./pages/gallery1";
import Contact from "./pages/contact";
import Brochure2 from "./pages/brochure2";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="brochure" element={<MyBook />} />
        <Route path="media" element={<Tile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery1 />} />
        <Route path="brochure2" element={<Brochure2/>}/>
          
    
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
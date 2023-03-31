import { BrowserRouter, Routes, Route, Link,useParams } from "react-router-dom"

// pages

import Home from "../pages/Home"
import Dictionary from "../pages/Dictionary"
import GapMix from "../pages/GapMix"
import Infinitive from "../pages/Infinitive"
import PastParticiple from "../pages/PastParticiple"
import PastTense from "../pages/PastTense"
import Translation from "../pages/Translation"


function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dictionary" element={<Dictionary />} />
        <Route path="/GapMix" element={<GapMix />} />
        <Route path="/Infinitive" element={<Infinitive />} />
        <Route path="/PastParticiple" element={<PastParticiple />} />
        <Route path="/PastTense" element={<PastTense />} />
        <Route path="/Translation" element={<Translation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;

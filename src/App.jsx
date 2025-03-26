import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";
import Artist from "./Pages/Artist/Artist";
const Home = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Home }))
);
const AboutUs = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.AboutUs}))
);
const Team = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Team}))
);
const Events = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Events}))
);

const Sponsors = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Sponsors}))
);

const Error = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Error }))
);

const App = () => (
    <main className="relative">
      {/* <InitialLoadingForHome /> */}
       <BrowserRouter> 
          {/* <InitialLoadingForHome /> */}
           {/* <Suspense fallback={<Loading />}>  */}
             <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/gallery" element={<Gallery/>} />
              <Route path="/sponsors" element={<Sponsors/>} />
              <Route path="/artist" element={<Artist/>} />
              <Route path="*" element={<Error/>} />
              <Route path="/Team" element={<Team />} />
              <Route path="/Events" element={<Events />} />
            </Routes>
            <Footer /> 
          {/* </Suspense> */}
      </BrowserRouter>
      {/* <Artist/> */}

    </main>
  );

export default App;

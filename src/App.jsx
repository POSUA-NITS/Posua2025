import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import Gallery from "./Pages/Gallery/Gallery";
import Artist from "./Pages/Artist/Artist";
import ArtistMobileView from "./Pages/Artist/ArtistMobileView";
const Home = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Home }))
);
const AboutUs = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.AboutUs}))
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
              <Route path="/artist" element={<ArtistMobileView/>} />
              <Route path="*" element={<Error/>} />
            </Routes>
            <Footer /> 
          {/* </Suspense> */}
      </BrowserRouter>
    </main>
  );

export default App;

import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Footer from "./Components/Shared/Footer/Footer";
import { RedBorder } from "./Components/RedBorder";
import { Loading } from "./Components/Loader/Loading";

const Home = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Home }))
);
const AboutUs = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.AboutUs }))
);
const Team = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Team }))
);
const Events = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Events }))
);

const Sponsors = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Sponsors }))
);

const Error = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Error }))
);

const Gallery = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Gallery }))
);

const Artist = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Artist }))
);

const App = () => (
  <main className="relative">
    {/* <InitialLoadingForHome /> */}
    <BrowserRouter>
      {/* <InitialLoadingForHome /> */}
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/artist" element={<Artist />} />
          <Route path="/team" element={<Team />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <div className="w-4 md:w-6 fixed top-0 left-[6%] md:left-[9%] h-screen z-[8]">
          <RedBorder />
        </div>
        <div className="w-4 md:w-6 fixed top-0 z-[8] right-[6%] md:right-[9%] h-screen">
          <RedBorder />
        </div>
        <Footer />
      </Suspense>
    </BrowserRouter>
  </main>
);

export default App;

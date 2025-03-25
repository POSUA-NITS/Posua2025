import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
// import Footer from "./Components/Shared/Footer/Footer";
// import Navbar from "./Components/Shared/Navbar/Navbar";
const App = () => (
    <main className="relative">
      {/* <InitialLoadingForHome /> */}
      <BrowserRouter>
          {/* <InitialLoadingForHome /> */}
          {/* <Suspense fallback={<Loading />}> */}
            {/* <Navbar /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/Team" element={<Team />} />
              <Route path="/Events" element={<Events />} />
            </Routes>
            {/* <Footer /> */}
          {/* </Suspense> */}
      </BrowserRouter>
    </main>
  );

export default App;

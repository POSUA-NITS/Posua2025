import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Home = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.Home }))
);
const AboutUs = lazy(() =>
  import("./Pages/index").then((module) => ({ default: module.AboutUs}))
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
            </Routes>
            {/* <Footer /> */}
          {/* </Suspense> */}
      </BrowserRouter>
    </main>
  );

export default App;

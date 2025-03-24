import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/footer";
import Error from "./pages/Error";
import Sponsors from "./pages/Sponsors";
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
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/sponsors" element={<Sponsors/>} />
              <Route path="*" element={<Error/>} />
            </Routes>
            {/* <Footer /> */}
          {/* </Suspense> */}
      </BrowserRouter>
      <Footer/>
    </main>
  );

export default App;

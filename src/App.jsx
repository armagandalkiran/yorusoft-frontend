import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Description from "./pages/Description";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Description />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;

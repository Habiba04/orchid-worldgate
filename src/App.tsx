import { ConfigProvider } from "antd";
import { useLanguageDirection } from "./Hook/useLanguageDirection";

import Header from "./components/Header";
import Landing from "./components/Landing";
import Explore from "./components/Explore";
import Vision from "./components/Vision";
import AboutUs from "./components/AboutUs";
import Mission from "./components/Mission";
import Services from "./components/Services";
// import Support from "./components/Support";
// import Brands from "./components/Brands";
// import WhyUs from "./components/WhyUs";
// import Values from "./components/Values";
// import Gallery from "./components/Gallery";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  const { isRTL } = useLanguageDirection();

  return (
    <ConfigProvider
      direction={isRTL ? "rtl" : "ltr"}
      theme={{
        token: {
          colorPrimary: "#003366",
        },
      }}
    >
      <Header />
      <Landing />
      <Explore />
      <Vision />
      <AboutUs />
      <Mission />
      <Services />
      {/* <Support />
      <Brands />
      <WhyUs />
      <Values />
      <Gallery />
      <Contact />
      <Footer /> */}
    </ConfigProvider>
  );
}

export default App;
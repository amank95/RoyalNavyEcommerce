import React from 'react'
import Navbar from '../customer/components/Navbar/Navbar'
import Hero from '../customer/components/Hero/Hero'
import HomeSectionCarousel from '../customer/components/HomeSectionCard/HomeSectionCarousel'
import HomeTopProducts from '../customer/components/HomeTopProducts/HomeTopProducts';
import Banner from '../customer/components/Banner/Banner';
import Subscribe from '../customer/components/Subscribes/Subscribes';
import Footer from "../customer/components/Footer/Footer";
import AOS from "aos";
 import "aos/dist/aos.css";
 import Popup from '../customer/components/Popup/Popup';
const Homepage = () => {

    const [orderPopup, setOrderPopup] = React.useState(false);

    const handleOrderPopup = () => {
      setOrderPopup(!orderPopup);
    };

    React.useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 800,
          easing: "ease-in-sine",
          delay: 100,
        });
        AOS.refresh();
      }, []);
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        {/* <Navbar handleOrderPopup={handleOrderPopup}/> */}
        <Hero handleOrderPopup={handleOrderPopup}/>
        <HomeSectionCarousel/>
        <HomeTopProducts handleOrderPopup={handleOrderPopup}/>
        <Banner/>
        <Subscribe/>
        <HomeSectionCarousel/>
        {/* <Footer/> */}
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default Homepage
import { useState } from "react";
import Banner from "../components/Banner";
import Features from "../components/Features";
import LatestNews from "../components/LatestNews";
import Modal from "../components/Modal";
import OurTeam from "../components/OurTeam";
import Populars from "../components/Populars";
import Reviews from "../components/Reviews";
import Faq from "./Faq";

const Home = () => {
    return (
        <>
            <Banner />
            <Features />
            <LatestNews />
            {/* <OurTeam /> */}
            <Populars />
            {/* <Reviews /> */}
            <Faq />
            {/* <Modal /> */}
        </>
    );
};
export default Home;

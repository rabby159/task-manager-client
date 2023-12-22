import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "./Banner";
import UseCase from "./UseCase";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <UseCase></UseCase>
            <Footer></Footer>
        </div>
    );
};

export default Home;
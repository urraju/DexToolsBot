import Banner from "../../Banner/Banner";
import Patners from "../../Layouts/Patners/Patners";
import Stats from "../../Layouts/Stats/Stats";
import Token from "../../Layouts/Token/Token";
import Trading from "../../Layouts/Trading/Trading";

const Home = () => {
    return(
        <div>
             <Banner/>
             <Stats/>
             <Trading/>
             <Patners/>
             <Token/>
        </div>
    )}
export default Home;
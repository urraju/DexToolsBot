import Banner from "../../Banner/Banner";
import AcademicCourse from "../../Layouts/AcademicCourse/AcademicCourse";
import Category from "../../Layouts/Category/Category";
import FaqSection from "../../Layouts/FaqSection/FaqSection";
import Patners from "../../Layouts/Patners/Patners";
import Stats from "../../Layouts/Stats/Stats";
import TeamMember from "../../Layouts/TeamSection/TeamMember";
import Token from "../../Layouts/Token/Token";
import Trading from "../../Layouts/Trading/Trading";

const Home = () => {
    return(
        <div className="px-2 md:px-0">
             <Banner/>
             <Stats/>
             <Trading/>
             <Patners/>
             <Token/>
             <TeamMember/>
             <Category/>
             <AcademicCourse/>
             <FaqSection/>
        </div>
    )}
export default Home;
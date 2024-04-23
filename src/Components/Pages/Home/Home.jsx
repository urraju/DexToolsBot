import Banner from "../../Banner/Banner";
import AcademicCourse from "../../Layouts/AcademicCourse/AcademicCourse";
import Category from "../../Layouts/Category/Category";
import Patners from "../../Layouts/Patners/Patners";
import Stats from "../../Layouts/Stats/Stats";
import TeamMember from "../../Layouts/TeamSection/TeamMember";
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
             <TeamMember/>
             <Category/>
             <AcademicCourse/>
        </div>
    )}
export default Home;
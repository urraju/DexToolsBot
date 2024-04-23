import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Components/Pages/Home/Home";
import CourseAll from "../Components/Pages/AllCourse/CourseAll";

const router = createBrowserRouter([
    {
        path : '/',
        element : <Root/>,
        children : [
            {
                path : '/',
                element : <Home/>
            },
            {
                path : 'courseall/:data',
                element : <CourseAll/>,
                loader : (() => fetch(`/data.json`))
            },

        ]
    }
])

export default router;
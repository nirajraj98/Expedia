
import { Route, Routes } from "react-router-dom";
import Main from "../Main"
import SignIn from "../SignIn"
import Signup from "../SignUp"
import Detail from "../Page/Detail"
import Payment from "../Page/Paymaent"





function AllRoute(){
    return(
        <div>
        {/* <Navbar /> */}
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/signin" element={<SignIn/>} />
            <Route path="/signUp" element={<Signup/>} />
            <Route path="/detail" element={<Detail/>} />
            <Route path="/payment" element={<Payment/>} />

            

        </Routes>
    
    {/* <Footer/> */}
    
        </div>
    ) 
}

export default AllRoute;
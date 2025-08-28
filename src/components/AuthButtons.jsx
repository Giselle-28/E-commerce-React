 import {LogOut,LogIn,UserRoundPlus} from "lucide-react";
 import {Link }  from "react-router-dom";

 function AuthButons({isLogin,logOut}) {
     if (isLogin) {//boton de logout(solo se ve si estamos logueados)
         return(<button onClick={logOut} className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md flex items-center" >
             <LogOut size={18}/>
             <span className="pl-2 ">Log Out</span>
         </button>)
     }
     //botones de login y register(solo se ven si no estamos logueados)
     return (<>
     <Link to={"/login"} className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md flex items-center w-28" >
             <LogIn size={18}/>
             <span className="pl-2 ">Login</span>
         </Link>
         <Link to={"/register"} className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md flex items-center w-35" >
             <UserRoundPlus size={18}/>
             <span className="pl-2 ">Registrarse</span>
         </Link>
     </>)
 }

 export default AuthButons
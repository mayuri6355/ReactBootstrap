import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Blog from './Components/Blog1';
import { FaAmilia,FaGoogleDrive } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import Header from './Components/Header';


const blog = [{
  photo: "img1.jpg",
  text:"MultiMedia Courses"
},
{
  photo: "img2.jpg",
  text:"Progarmming It"
},
{
  photo: "img3.jpg",
  text:"UI/UX & Graphics Desing"
}
]

function App() {
  return (

<div class="container mt-100 mt-60">
    <div class="row">
        <div class="col-12 text-center">
            <div class="section-title mb-4 pb-2">
                <h4 class="title mb-4">Latest Blog &amp; News</h4>
                <p class="text-muted para-desc mx-auto mb-0">Build responsive, mobile-first projects on the web with the world's most popular front-end component library.</p>
            </div>
        </div>
    </div>


   <div className="posts-container">
   {
      blog.map((item)=>{
          return(
            <Blog photo={item.photo}
            text={item.text}/>
          )
        })
      }
          

 
    </div>

    
    </div>
  
  );
}
export default App;

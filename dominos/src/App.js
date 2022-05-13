import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Header from './Pages/Header';
import Blog from './Pages/Blog';
const name="mayuri";
const email="mpatel@gmail.com"
const arr=[1,2,3,4,5,6,7,8]

const arr_data=[
  {"name":"mayuri" ,"email":"mpatel@gamil.com"},
  {"name":"mayuri" ,"email":"mpatel@gamil.com"},
  {"name":"mayuri" ,"email":"mpatel@gamil.com"},
  {"name":"mayuri" ,"email":"mpatel@gamil.com"},
  {"name":"mayuri" ,"email":"mpatel@gamil.com"},
]


function App() {
  return (
    <div className="App">
      {name}
      {/* <Home/> */}
      <Header name={name} email={email}/>
      <Blog/>
<ul>
  {
    arr.map((item)=>{
      return(
        <li>
          {item}
        </li>
      )
    })
  }
</ul>

{
  arr_data.map((item)=>{
    return(
      <Blog name={item.name} email={item.email}/>
    )
  })
}





    </div>
  );
}

export default App;

import Tile from "./Tile";
const userList = [{
  uname:"Nikhil",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},
{
  uname:"Ankit",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Rahul",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Arun",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Vibhor",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Akash",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Ashwary",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Ankesh",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Shree",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Danial",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"James",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Clayton",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},]

const generateUsers = () => {
  return userList.map((item, index)=>{
    return <Tile uname = {item.uname} image = {item.image} />
  })
}
function App() {
  return (
    <>
    <p>Google Meet</p>
    <div style={{display:"flex", flexWrap:"wrap"}}>
      {generateUsers()}
    </div>
    </>
  )
}

export default App

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
  uname:"Ankit",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Ankit",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Ankit",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Ankit",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Ankit",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},{
  uname:"Ankit",
  image:"https://cdn-icons-png.flaticon.com/512/168/168732.png"
},]
const generateUsers = () => {
  return userList.map((item, index)=>{
    return <Tile width={50} uname = {item.uname} image = {item.image} />
  })
}
function App() {
  return (
    <>
    <p>Google Meet</p>
    <div style={{display: "flex", flex:1, flexWrap: "wrap"}}>
      {generateUsers()}
    </div>
    </>
  )
}

export default App

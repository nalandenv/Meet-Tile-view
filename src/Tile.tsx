const Tile = (props: any) =>{
    const {uname, image } = props;
    return(
        <div style={{width: "15%", backgroundColor: "#888888", borderRadius:10, margin: "10px", display:"flex",alignItems:"center", flexDirection:"column"}} className="tile-container">
            <p style={{color:"#eeeeee"}}>{uname}</p>
            <img width={50} style={{borderRadius: 50, marginBottom:"10px"}} src={image} alt="" />
        </div>
    )
}

export default Tile;
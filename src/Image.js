import { useState,useEffect } from "react";
import axios from "axios";

const Image = () => {
    const [data,setData]=useState("")
    const [image,setImage]=useState([])

    const imageSearch=(e)=>{
        e.preventDefault();
        axios.get(`https://api.unsplash.com/photos/?page=1&query=${data}&client_id=tqFa8d24wbHGpJJIc5rFIj8tcNefShlijlDyTnxlDt4`)
        .then(
            (res)=>{console.log(res.data)
            setImage(res.data)
            }
        )
        .catch(
            (err)=>{console.log(err)}
        )
    }
    // useEffect(()=>{imageSearch("office")},[])
    return ( 
        <>
        <nav className="navbar navbar-info" style={{backgroundColor: "black"}}>
            <div className="container-fluid">
                <h1 className="display-3 p-5">Image searching using React JS</h1>
                    <form className="d-flex" onSubmit={imageSearch}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setData(e.target.value)}} value={data} />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
            </div>
        </nav><br /><br />

        <div className="container">
            <div className="row">
                {
                    image.map((item)=>{return(
                        <>
                        <ul>
                            <li>{item.user.id}</li>
                            <img src={item.urls.small} alt={item.alt_description} />
                        </ul>
                        </>
                    )})
                }
            </div>
        </div>
        </>
     );
}
 
export default Image;
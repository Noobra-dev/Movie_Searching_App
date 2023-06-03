import { useState,useEffect } from 'react'
import axios from 'axios'
const Movie = () => {
    const [data,setData]=useState("")
    const [movie,setMovie]=useState([])
    const apiMovie=(e)=>{
        e.preventDefault();
        axios.get(`https://www.omdbapi.com/?s=${data}&apikey=1a399b0d`)
        .then(
            (res)=>{console.log(res.data)
                setMovie(res.data.Search)
            }
        )
        .catch(
            (err)=>{console.log(err)}
        )
    }
    // useEffect(()=>{apiMovie("Avengers")},[])
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Movies</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={apiMovie}>
                        <input className="form-control me-2" type="search" value={data} placeholder="Search" aria-label="Search" onChange={(e)=>{setData(e.target.value)}}/>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

        <div className="container my-3">
            <div className="row">
                {
                    movie.map((val)=>{return(
                        <>
                        <div className="col-3">
                            <div className="card" style={{width: "18rem"}}>
                                <img src={val.Poster} className="card-img-top" alt="Img-Poster"/>
                                    <div className="card-body">
                                        <h3 className="card-title">Year : {val.Year}</h3>
                                            <h4 className="card-text">Title : {val.Title}.</h4>
                                            <p className="card-text">ImdbId : {val.imdbID}.</p>
                                            <p className="card-text">Type : {val.Type}.</p>
                                    </div>
                            </div>
                        </div>
                        </>
                    )})
                }
            </div>
        </div>
        </>    
    );
}
 
export default Movie;
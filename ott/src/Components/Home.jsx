import { useEffect, useState } from "react";
import Movieslist from "./Movieslist.jsx";

const Home = () => {

    let [movies , setMovies] = useState(null);

    useEffect(()=>{
        if(localStorage.getItem("fav")==null)
        {
            localStorage.setItem("fav","[]")
        }
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{ return res.json() })
            .then((data)=>{ 
                console.log(data);
                setMovies(data);
            })
        } , 3000)
    } , [])

    return ( 
        <div className="home">   

        {movies==null &&  <h1>Loading.......</h1>}

        {movies && 
        <Movieslist movies={movies} title="All movies"/>}

        {movies && 
        <Movieslist movies={movies.filter((m)=>{return m.genre.includes("action")})} title="Action movies"/>}

        {movies && 
        <Movieslist movies={movies.filter((m)=>{return m.rating>=8.5})} title="Top rated movies"/>}

        </div>
     );
}
export default Home;
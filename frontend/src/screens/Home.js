import React,{useEffect} from 'react'

const Home = (props) => {
    useEffect(() => {
        console.log(props.location.search.split('code=').pop().split('&')[0]);

    });

    return (
        <div>
            Home Logged In
        </div>
    )
}

export default Home

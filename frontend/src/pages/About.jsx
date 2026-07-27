import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function About()
{
    const navigate = useNavigate();

    useEffect(()=>{
        fetch("/api")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(!data.success)
            {
                navigate("/")
                return null;//return null here only
            }
        });
      }, []);
    return (
        <>
        Hii from About page
        </>
    )
}
export default About
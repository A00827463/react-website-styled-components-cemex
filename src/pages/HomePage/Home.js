import React from 'react'
import { homeObjFour } from "./Data"
import { InfoSectionHome } from "../../components"
// import { Container } from "../../globalStyles"

const Home = () => {
    console.log(sessionStorage);
    return (
        <>
            <InfoSectionHome {...homeObjFour}/>
            
        </>
    )
}

export default Home

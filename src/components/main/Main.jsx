import React from "react"
import BasicTabs from "../BasicTabs/BasicTabs"
import './Main.css'


const Main=()=>{
    return(
        
        <div  className="boxDiv">
            <div className="box">
            <span className="logo"><h3 className="logoText">logo</h3></span>
            <h3 className="Association">Association</h3>
            <h1 className="adv">Advocates</h1>
            </div>
            <div>
            <BasicTabs/>
            </div>
        </div>
        
    )
}

export default Main
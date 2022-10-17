import { React } from "react";

import "./navstyle.css";

const appName = "Houses App";

//  The main nav link
function MainLinkTitle(){
    return (
        <a href="">
            <h1>{ appName }</h1>
        </a>
    );
}

//  The main navigation
function Navigation(){
    return (
        <nav>
            <MainLinkTitle />
        </nav>
    );
}

export { Navigation }
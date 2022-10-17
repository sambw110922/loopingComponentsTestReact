import { React } from "react";

import "./houses_app.css";

//  A list of house members
const houseMembers = [
    { 
        "name" : "Dimitri",
        "house" :" Blue Lions",
        "weapon":  "Lance",
        "isMagicUser" : false
    },
    { 
        "name" : "Claude",
        "house" :" Golden Deer",
        "weapon":  "Bow",
        "isMagicUser" : false
    },
    { 
        "name" : "Edlegard",
        "house" :" Black Eagles",
        "weapon":  "Axe",
        "isMagicUser" : false
    },
    { 
        "name" : "Lysithia",
        "house" : "Golden Deer",
        "weapon":  "Bow",
        "isMagicUser" : true
    },
    { 
        "name" : "Mercedes",
        "house" : "Blue Lions",
        "weapon":  "Bow",
        "isMagicUser" : true
    },
    { 
        "name" : "Lindhart",
        "house" : "Black Eagles",
        "weapon":  "Bow",
        "isMagicUser" : true
    }
];

//  A single member
function SingleMember(){
    return (
        <div className="singleMember">
            <label for="lblName">Name:</label>
            <p className="lblName">
                { houseMembers[0].name }
            </p>
            <label for="lblHouse">House:</label>
            <p className="lblHouse">
                { houseMembers[0].house }
            </p>
            <label for="lblWeapon">Weapon Type:</label>
            <p className="lblWeapon">
                { houseMembers[0].weapon }
            </p>
            <label for="lblMagic">Is Magic User:</label>
            <p className="lblMagic">
                { houseMembers[0].isMagicUser.toString() }
            </p>
        </div>
    );
}

//  Main houses app
function HousesApp(){
    return (
        <div id="housesApp">
            <h2>Houses list</h2>
            <div id="memberList">
                <SingleMember />
            </div>            
        </div>
    );
}

export { HousesApp }
import { React } from "react";

import "./houses_app.css";

//  A list of house members
const houseMembers = [
    { 
        "name" : "Dimitri",
        "house" : "Blue Lions",
        "weapon":  "Lance",
        "isMagicUser" : false
    },
    { 
        "name" : "Claude",
        "house" : "Golden Deer",
        "weapon":  "Bow",
        "isMagicUser" : false
    },
    { 
        "name" : "Edlegard",
        "house" : "Black Eagles",
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
function SingleMember(props){

    var cname = "defaultMember";

    var isMagic = "No";

    if(props.isMagicUser == true){
        isMagic = "Yes";
    }

    if(props.house == "Blue Lions"){
        cname = "blueLions";
    }

    if(props.house == "Golden Deer"){
        cname = "goldenDeer";
    }

    if(props.house == "Black Eagles"){
        cname = "blackEagles";
    }

    return (
        <div className={ cname }>
            <label for="lblName">Name:</label>
            <p className="lblName">
                { props.name }
            </p>
            <label for="lblHouse">House:</label>
            <p className="lblHouse">
                { props.house }
            </p>
            <label for="lblWeapon">Weapon Type:</label>
            <p className="lblWeapon">
                { props.weapon }
            </p>
            <label for="lblMagic">Is Magic User:</label>
            <p className="lblMagic">
                { isMagic }
            </p>
        </div>
    );
}

//  Loop through the members
function Members(){

    const membersList = houseMembers.map((member) => 

        <SingleMember 
            key = { member.name.toLowerCase() }
            name = { member.name }
            house = { member.house }
            weapon = { member.weapon }
            isMagicUser = { member.isMagicUser }
        />
    );

    return (
        <div id="memberList">
            { membersList }
        </div>
    );
}

//  Main houses app
function HousesApp(){
    return (
        <div id="housesApp">
            <h2>Houses list</h2>
            <Members />
        </div>
    );
}

export { HousesApp }
import React from "react";
export default function Header() {
    return (
        <header className="header">
            <img src={require(`../images/troll-face.png`)} className="header--image"/>
            <h2 className="header--title">Meme generator</h2>
            <h4 className="header--project">React course</h4>
        </header>
    )
};

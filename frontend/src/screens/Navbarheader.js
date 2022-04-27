import React from "react";

export default function Navbarheader(){
    return(
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">Restaurant</a>
                </div>
                <div>
                <a href="/createrecipe">Add a Recipe</a>
                <a href="/">Refresh page</a>
                </div>
            </header>
            </div>
    )
}
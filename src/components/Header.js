import React, {Fragment} from "react";
import Navigation from "./Navigation";

const Header = () => {
    return(
        <>
        <div className="information"> Ofjv - React Site (no REST API) </div>
            <nav className="navbar navbar-expand-lg navbar-light header-snippet">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="logo_ofjv.png" className="rounded d-inline-block align-text-top" alt="" width="96" height="62"/>
                    </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Navigation />
                
                </div>
            </nav>
        </>

    )
}

export default Header;
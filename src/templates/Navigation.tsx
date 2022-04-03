import React from "react";

import './Navigation.scss';

const Navigation = () => {
    return (
        <header id={"boilerplate-nav-container"}>
            <div className={"boilerplate-nav-inner"}>
                <a href={"/"}>메인페이지</a>
                <a href={"/test"}>더미페이지</a>
            </div>
        </header>
    )
}

export default Navigation;
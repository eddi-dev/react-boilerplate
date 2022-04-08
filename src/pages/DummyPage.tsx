import React from "react";
import {API_BASE_URL} from "../app/api/BaseUrls";

const DummyPage = () => {
    return (
        <div>
            <h1>소셜 로그인</h1>
            <a href={`${API_BASE_URL}/authentication/oauth2/google`}>Google 로그인</a>
        </div>
    )
}

export default DummyPage;
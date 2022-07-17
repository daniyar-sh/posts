import React, { Route, Routes } from "react";
import About from "../../pages/About";
import Posts from "../../pages/posts";
import PostIdPage from "../../pages/PostIdPage";
import Login from "../../pages/login";
import { BrowserRouter } from "react-router-dom";

 
const ApRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/posts" element={<Posts/>} />
                <Route path="/posts/:id" element={<PostIdPage/>} />
                <Route path="/About" element={<About/>} />
                <Route path="" element={<Posts/>} />
                <Route path="/login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default ApRouter;
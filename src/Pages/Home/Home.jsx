import React from "react";
import { Header } from '../../Layouts/Header/Headerr'
import { Promotion } from "../../Layouts/Promotion/Promotion";
import { Main } from "../../Layouts/Main/Main";
import { Footer } from "../../Layouts/Footer/Footer";

export const Home = () => {
    return (
        <>
            <Header></Header>
            <Promotion></Promotion>
            <Main></Main>
            <Footer></Footer>
        </>
    )
}
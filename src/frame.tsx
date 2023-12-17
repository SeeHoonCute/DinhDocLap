import React from "react";
import { AppShell } from "@mantine/core";
import { HeaderMegaMenu } from "./components/Header/HeaderMegaMenu";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { FooterCentered } from "./components/Footer/FooterCentered";
import { Outlet } from "react-router-dom";

export function Frame(){
 return(
    <AppShell>
        <AppShell.Header pt={10}>
            <HeaderMegaMenu/>
        </AppShell.Header>
        <AppShell.Main m={'70px 100px 0px 100px'}>
            <Outlet/>
        </AppShell.Main>
            <FooterCentered/>
    </AppShell>
 );
};
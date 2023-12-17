import React from "react";
import { AppShell, Grid, GridCol } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Search } from "./components/Search/Search";

export function FrameAdmin() {
    return (
        <AppShell>
            <AppShell.Navbar h={'100%'}>
                <Navbar />
            </AppShell.Navbar>
            <AppShell.Header>
                <Grid m={10}>
                    <GridCol span={8}>

                    </GridCol>
                    <GridCol span={2}>
                        <Search  w={400}/>
                    </GridCol>
                </Grid>
            </AppShell.Header>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    );
};
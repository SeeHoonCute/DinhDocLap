import React, { useEffect } from "react";
import { AppShell, Grid, GridCol } from "@mantine/core";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Search } from "./components/Search/Search";
import { useNavigate } from "react-router-dom";
const FrameAdmin = () => {

    // console.log('localStorage: ' + localStorage.getItem('admin'));
    // console.log('Lenght: ' + localStorage.length);
    let navigate = useNavigate();
    const handleLogin = () => {
        let path = `/login`;
        navigate(path);
    }
    
    useEffect(() => { 
        if(!localStorage.getItem('admin')){
            return handleLogin();
        }
    }, []);
    return (
        <>
            <AppShell>
                <AppShell.Navbar h={'100%'}>
                    <Navbar />
                </AppShell.Navbar>
                <AppShell.Header>
                    <Grid m={10}>
                        <GridCol span={8}>

                        </GridCol>
                        <GridCol span={2}>
                            <Search w={400} />
                        </GridCol>
                    </Grid>
                </AppShell.Header>
                <AppShell.Main>
                    <Outlet />
                </AppShell.Main>
            </AppShell>
        </>
    );
};
export default FrameAdmin;
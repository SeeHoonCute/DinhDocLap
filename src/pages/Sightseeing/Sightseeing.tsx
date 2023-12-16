import React from "react";
import classes from "./Sightseeing.module.css";
import { Grid, Title, UnstyledButton } from "@mantine/core";
import { UnstyledButtonModule } from "../../components/UnstyledButton/UnstyledButton";
export const Sightseeing = () => {
    return (
        <>
            <Grid>
                <Title c={'blue'} w={'100%'} ta={'center'} mb={20}>Giá vé vào cổng</Title>
                <UnstyledButtonModule/>
            </Grid>
        </>
    );
};
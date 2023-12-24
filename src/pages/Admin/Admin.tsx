import React from "react";
import TableModule from "../../components/Table/Table";
import { Grid } from "@mantine/core";


export function Admin() {
    return (
        <>
            <Grid w={'100%'}>
                <TableModule />
            </Grid>
        </>
    );
};
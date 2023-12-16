import { Grid, GridCol } from "@mantine/core";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import classes from "./LogIn.module.css";
import { AuthenticationTitle } from "../../components/AuthenticationTitle/AuthenticationTitle";
export const LogIn = () => {
    return (
        <Grid>
            <GridCol span={{ base: 12, md: 6 }}><CarouselCard /></GridCol>
            <GridCol span={{ base: 12, md: 6 }}><AuthenticationTitle /></GridCol>
        </Grid>
    );
};
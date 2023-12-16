import { Grid, GridCol } from "@mantine/core";
import CarouselCard from "../../components/CarouselCard/CarouselCard";
import { AuthenticationTitle } from "../../components/AuthenticationTitle/AuthenticationTitle";
import { SignInBox } from "../../components/SignInBox/SignInBox";
export const SignIn= () => {
    return (
        <Grid m={0}>
            <GridCol span={{ base: 12, md: 6 }}><CarouselCard /></GridCol>
            <GridCol span={{ base: 12, md: 6 }}><SignInBox/></GridCol>
        </Grid>
    );
};
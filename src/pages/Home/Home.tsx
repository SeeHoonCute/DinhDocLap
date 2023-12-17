import React from "react";
import classes from "./Home.module.css";
import { Banner } from "../../components/Banner/Banner";
import { Grid, GridCol, Image, Title, Text, TypographyStylesProvider } from "@mantine/core";
import BanDo from '../../assets/images/bando.jpg';
import khamPhaDinh from '../../assets/images/kham-pha-dinh-doc-lap4.jpg';
import History from '../../components/BlockquoteHistory/BlockquoteHistory';
export const Home = () => {
    return (
        <>
            <Grid ml={-100} mr={-100}>
                <Banner />
            </Grid>
            <Grid mt={30}>
                <GridCol span={6}>
                    <Image src={khamPhaDinh} />
                </GridCol>
                <GridCol span={6}>
                <Text lineClamp={10} component="div">
                    <TypographyStylesProvider>
                        <Title>
                            Giới thiệu
                        </Title>
                        <Text mt={20} ta={"justify"}>
                            Dinh Độc Lập được công nhận là Di tích lịch sử văn hóa quốc gia bằng Quyết định số 77A/VHQĐ ngày 25/6/1976 của Bộ trưởng Bộ Văn hóa. Ngày 12 tháng 8 năm 2009, Thủ tướng Chính phủ nước Cộng hòa Xã hội Chủ nghĩa Việt Nam đã ký Quyết định số 1272/QĐ-TTg xếp hạng Di tích lịch sử Dinh Độc Lập là một trong 10 di tích quốc gia đặc biệt đầu tiên của cả nước.
                        </Text>
                        <Text ta={"justify"}>
                        Cơ quan quản lý Di tích lịch sử Dinh Độc Lập là Hội trường Thống Nhất. Căn cứ Quyết định số 709/QĐ-VPCP ngày 14 tháng 6 năm 2013 của Bộ trưởng, Chủ nhiệm Văn phòng Chính phủ qui định chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức của Hội trường Thống Nhất, thì Hội trường Thống Nhất là đơn vị sự nghiệp công lập thuộc Văn phòng Chính phủ có chức năng quản lý, bảo tồn, tôn tạo Di tích lịch sử Dinh Độc Lập; phục vụ đại biểu, khách tham dự các cuộc họp, hội nghị của Chính phủ, Thủ tướng Chính phủ và Văn phòng Chính phủ.
                        </Text>
                    </TypographyStylesProvider>
                    </Text>
                </GridCol>
            </Grid>
            <Grid mt={50}>
                <History/>
            </Grid>
            <Grid mt={20}>
                <Title p={20} fw={'bold'} ta={'center'} w={'100%'} className={classes.fontTitle}>Bản đồ di tích</Title>
                <Image src={BanDo} />
            </Grid>
        </>
    );
};
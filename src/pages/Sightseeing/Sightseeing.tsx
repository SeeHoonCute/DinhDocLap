import React from "react";
import classes from "./Sightseeing.module.css";
import { Grid, Title, Image, GridCol, Text, TypographyStylesProvider } from "@mantine/core";
import { UnstyledButtonModule } from "../../components/UnstyledButton/UnstyledButton";
import Note from '../../assets/images/Note.jpg';
import openTime from '../../assets/images/openTime.jpg';
import Transport from '../../assets/images/Transport.jpg';
const open = [
    'Dinh Độc Lập mở cửa bán vé phục vụ du khách tham quan tất cả các ngày trong tuần',
    'Sáng: từ 7h30 đến 11h30.',
    'Chiều: từ 13h00 đến 17h00.',
    'Lưu ý: Quầy vé sẽ đóng cửa vào 11h00 và 16h00 hàng ngày.',
]
const transport = [
    'Taxi: Chỉ cần xuống sảnh khách sạn, bắt taxi, bạn đã có thể tới Dinh trong giây lát.',
    'Ô tô: Nếu di chuyển bằng ô tô, bạn sẽ gửi xe ở công viên Tao Đàn hoặc trên đường Huyền Trân Công Chúa ngay bên cạnh Dinh.',
    'Bus: bạn có thể chọn 1 trong các tuyến bus như: 001 (bến xe Bến Thành – bến xe Chợ Lớn), 002 (bến xe Bến Thành – bến xe miền Tây), 003 (bến xe Bến Thành – Thạnh Lộc), 004 (bến xe Bến Thành – Cộng Hòa – bến xe An Sương), 005 (bến xe Bến Thành – Biên Hòa).',
    'Xe máy: Đây là phương tiện di chuyển phổ biến của người dân địa phương hoặc các tỉnh thành lân cận khi đến Dinh. Tuy nhiên, đường xá tại thành phố Hồ Chí Minh đông như mắc cửu, nếu không rành đường, du khách sẽ mất rất nhiều thời gian.',
]
const sight =[
    'Do là nơi mang dấu ấn lịch sử nên khi tham quan, du khách cần tuân thủ đúng nội quy của khu di tích.',
    'Mặc trang phục lịch sự.',
    'Tuân thủ theo hướng dẫn tại các biển báo và của bảo vệ trong suốt quá trình tham quan.',
    'Không tự ý mang hành lý vào bên trong di tích.',
    'Không được mang đồ ăn thức uống vào khu di tích.',
    'Không đưa các loại động vật đi cùng.',
    'Không được đem theo các loại vũ khí, chất độc hại, chất cháy nổ.',
    'Khách tham quan sẽ chịu toàn bộ trách nhiệm nếu gây ra bất cứ tổn thất nào cho Dinh Độc Lập.',
]
export const Sightseeing = () => {
    return (
        <>
            <Grid>
                <GridCol span={6}>
                    <TypographyStylesProvider>
                        <Title>Giờ mở cửa</Title>
                        {
                            open.map((item) => (
                                <Text>{item}</Text>
                            ))
                        }
                    </TypographyStylesProvider>
                </GridCol>
                <GridCol span={6}>
                    <Image src={openTime} />
                </GridCol>
            </Grid>
            <Grid mt={30}>
                <GridCol span={6}>
                    <Image src={Transport} />
                </GridCol>
                <GridCol span={6}>
                    <TypographyStylesProvider>
                        <Title>Phương tiện di chuyển</Title>
                        {
                            transport.map((item) => (
                                <Text>{item}</Text>
                            ))
                        }
                    </TypographyStylesProvider>
                </GridCol>
            </Grid>
            <Grid  mt={30}>
                <GridCol span={6}>
                <TypographyStylesProvider>
                        <Title mt={0}>Những lưu ý khi tham quan</Title>
                        {
                            sight.map((item) => (
                                <Text>{item}</Text>
                            ))
                        }
                    </TypographyStylesProvider>
                </GridCol>
                <GridCol span={6}>
                    <Image src={Note} />
                </GridCol>
            </Grid>
            <Grid mt={30}>
                <Title c={'blue'} w={'100%'} ta={'center'} mb={20}>Giá vé vào cổng</Title>
                <UnstyledButtonModule />
            </Grid>
        </>
    );
};
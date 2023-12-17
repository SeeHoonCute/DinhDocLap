import { Blockquote, Grid, GridCol, Title } from '@mantine/core';
import { IconClover } from '@tabler/icons-react';
import classes from './BlockquoteHistory.module.css';

export default function History() {
    const icon = <IconClover />;
    return (
        <>
        <Title w={'100%'} ta={'center'} c={'blue'}>Lịch sử hình thành</Title>
        <Grid  w={'100%'}>
            <GridCol span={6}>
                <Blockquote color="blue" cite="Năm 1858, Pháp nổ súng tấn công Đà Nẵng mở đầu cuộc chiến tranh xâm chiếm Việt Nam. Ngày 23 tháng 2 năm 1868, Thống đốc Nam Kỳ Lagrandière đã làm lễ đặt viên đá đầu tiên khởi công xây dựng Dinh Thống đốc Nam Kỳ mới tại Sài Gòn thay cho dinh cũ được dựng bằng gỗ vào năm 1863." icon={icon} mt="xl">
                Dinh Norodom thời Pháp thuộc
                </Blockquote>
            </GridCol>
            <GridCol span={6}>
            </GridCol>
        </Grid>
        <Grid w={'100%'}>
            <GridCol span={6}>
            </GridCol>
            <GridCol span={6}>
                <Blockquote color="blue" cite="Ngày 7 tháng 9 năm 1954 Dinh Norodom được bàn giao giữa đại diện Pháp, tướng 5 sao Paul Ély, và đại diện Quốc gia Việt Nam, Thủ tướng Ngô Đình Diệm." icon={icon} mt="xl">
                Dinh Độc Lập thời Việt Nam Cộng hòa
                </Blockquote>
            </GridCol>
        </Grid>
        <Grid  w={'100%'}>
            <GridCol span={6}>
                <Blockquote color="blue" cite="Phe đảo chính đã cử 2 viên phi công thuộc Quân lực Việt Nam Cộng hòa là Nguyễn Văn Cử và Phạm Phú Quốc lái 2 máy bay AD-6 ném bom làm sập toàn bộ phần chính cánh trái của dinh. Do không thể khôi phục lại, ông Ngô Đình Diệm đã cho san bằng và xây một dinh thự mới ngay trên nền đất cũ." icon={icon} mt="xl">
                </Blockquote>
            </GridCol>
            <GridCol span={6}>
            </GridCol>
        </Grid>
        <Grid w={'100%'}>
            <GridCol span={6}>
            </GridCol>
            <GridCol span={6}>
                <Blockquote color="blue" cite="Vào tháng 11 năm 1975 Hội nghị hiệp thương chính trị thống nhất hai miền Nam Bắc thống nhất diễn ra tại dinh Độc Lập. Năm 2009 Thủ tướng Chính phủ đã ký Quyết định số 1272/QĐ-TTg xếp hạng Di tích lịch sử Dinh Độc Lập là một trong 10 di tích quốc gia đặc biệt đầu tiên của Việt Nam." icon={icon} mt="xl">
                </Blockquote>
            </GridCol>
        </Grid>
        </>
    );
}
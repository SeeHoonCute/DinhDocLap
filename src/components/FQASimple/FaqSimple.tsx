import { Container, Title, Accordion, Grid, Image } from '@mantine/core';
import classes from './FaqSimple.module.css';
import img from '../../assets/images/5066368.jpg'
const placeholder =
  'Chúng tôi đã có sẵn học liệu cho học sinh khi tham gia các hoạt động của chương trình. Nếu thấy cần thiết, học sinh chỉ mang theo giấy bút để ghi chép lại các nội dung mà các em tìm hiểu được trong quá trình trải nghiệm cùng với nhân viên giáo dục.';

export function FaqSimple() {
  return (
    <Container size="xl" className={classes.wrapper} pl={0} pr={0}>
      <Grid className={classes.gridCol}>
        <Grid.Col  span={{ base: 12, md: 6 }}>
          <Title ta="center" className={classes.title} mb={10}>
            Các câu hỏi thường gặp
          </Title>

          <Accordion variant="separated">
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control>Số lượng học sinh tối đa để tham gia Khám phá di sản là bao nhiêu?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="another-account">
              <Accordion.Control>Để tham gia chương trình, chúng tôi cần đặt lịch trước mấy ngày?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="newsletter">
              <Accordion.Control>Thời gian hoạt động của các chương trình Khám phá Di sản tại Di tích?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="credit-card">
              <Accordion.Control>Học sinh cần mang theo những đồ dùng học tập nào khi tham gia chương trình?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="payment">
              <Accordion.Control>Thầy/cô giáo có được tham dự cùng học sinh không?</Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Grid.Col>
        <Grid.Col  span={{ base: 12, md: 6 }}>
          <Image src={img} height={380}/>
        </Grid.Col>
      </Grid>
    </Container>
  );
}
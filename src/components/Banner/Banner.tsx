import cx from 'clsx';
import { Title, Text, Container, Button, Overlay } from '@mantine/core';
import classes from './Banner.module.css';
import { useNavigate } from 'react-router-dom';
export function Banner() {
    let navigate = useNavigate();
    const handleSightseeing = () => {
        let path = '/sightseeing';
        navigate(path);
    }
    const handleMap3D = () => {
        let path = '/map3D';
        navigate(path);
    }
    return (
        <div className={classes.wrapper}>
            <Overlay gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, .65) 40%)"
                opacity={1}
                zIndex={0} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Di tích lịch sử Dinh Độc Lập
                </Title>

                <Container size={640}>
                    <Text size="lg" className={classes.description} c={'white'}>
                        Dinh Độc Lập được công nhận là Di tích lịch sử văn hóa quốc gia bằng
                        Quyết định số 77A/VHQĐ ngày 25/6/1976 của Bộ trưởng Bộ Văn hóa.
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button className={classes.control} variant="white" size="lg" onClick={handleSightseeing} w={190}>
                        Tham quan
                    </Button>
                    <Button className={cx(classes.control, classes.secondaryControl)} size="lg" onClick={handleMap3D} w={190}>
                        Xem bản đồ 3D
                    </Button>
                </div>
            </div>
        </div>
    );
}
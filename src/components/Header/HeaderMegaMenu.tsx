import {
  Group,
  Box,
  Grid,
  GridCol,
} from '@mantine/core';
import classes from './HeaderMegaMenu.module.css';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logoDinhDOcLap.png'
import { Image } from '@mantine/core';

export function HeaderMegaMenu() {
  let navigate = useNavigate();
  // const handleLogin = () =>{ 
  //   let path = `/login`; 
  //   navigate(path);
  // }
  const handleSightseeing = () => {
    let path = `/sightseeing`;
    navigate(path);
  }
  const handleHome = () => {
    let path = ``;
    navigate(path);
  }
  const handleContactUs = () => {
    let path = `/contactUs`;
    navigate(path);
  }
  const handleMap3D = () => {
    let path = `/map3D`;
    navigate(path);
  }
  // const handleSignIn = () =>{ 
  //   let path = `/signIn`;  
  //   navigate(path);
  // }

  return (
    <Box pb={18}>
      <header className={classes.header}>
        <Group h="100%" w={'100%'}>
          <Grid w={'100%'}>
            <GridCol span={4}>
              <Image src={logo} h={40} w={80} />
            </GridCol>
            <GridCol span={4}>
              <Group h="100%" gap={30} color='#6D4B40'>
                <Box>
                  <a href="/" className={classes.link} onClick={handleHome}>
                    Trang chủ
                  </a>
                </Box>
                <Box>
                  <a href="/sightseeing" className={classes.link} onClick={handleSightseeing}>
                    Tham quan
                  </a>
                </Box>
                <Box>
                  <a href="/map3D" className={classes.link} onClick={handleMap3D}>
                    Bản đồ 3D
                  </a>
                </Box>
                <Box>
                  <a href="contactUs" className={classes.link} onClick={handleContactUs}>
                    Liên hệ
                  </a>
                </Box>
              </Group>
            </GridCol>
            <GridCol span={4}>

            </GridCol>
          </Grid>
          {/* <Group>
            <Button variant="default" onClick={handleLogin} className={classes.headerButton}>Đăng nhập</Button>
            <Button className={classes.headerButton} onClick={handleSignIn}>Đăng ký</Button>
          </Group> */}
        </Group>
      </header>
    </Box>
  );
}
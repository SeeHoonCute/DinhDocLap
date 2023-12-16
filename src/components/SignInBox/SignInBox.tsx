import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
    UnstyledButton,
    Overlay,
    SimpleGrid,
  } from '@mantine/core';
  import classes from './SignInBox.module.css';
  import { useNavigate } from 'react-router-dom';
  
  export function SignInBox() {
    let navigate = useNavigate();
    const handleHome = () => {
      let path = `/login`;
      navigate(path);
    }
    return (
      <Container size={500} mt={40}>
        <Title ta="center" className={classes.title}>
          Chào mừng bạn mới!
        </Title>
        <Text c={'gray'} ml={60}>Thiết lập tài khoản của bạn ngay nào!!!</Text>
        <Paper withBorder shadow="md" p={50} mt={30} radius="md">
        <TextInput label="Họ và tên" placeholder="Nguyễn Ánh" required />
          <TextInput label="Email" placeholder="you@seehoon.dev" required />
          <PasswordInput label="Mật khẩu" placeholder="Ít nhất 8 ký tự" required mt="md" />
          <PasswordInput label="Nhập lại mật khẩu" placeholder="Ít nhất 8 ký tự" required mt="md" />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Tôi đồng ý với điều khoản sử dụng" />
          </Group>
          <Button fullWidth mt="xl" onClick={handleHome}>
            Đăng ký
          </Button>
          <Text c="dimmed" size="sm" ta="right" mt={20}>
            Đã là thành viên?{' '}
            <Anchor size="sm" component="button" onClick={handleHome}>
              Đăng nhập
            </Anchor>
          </Text>
        </Paper>
      </Container>
    );
  };
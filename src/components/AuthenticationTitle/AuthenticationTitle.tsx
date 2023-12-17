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
} from '@mantine/core';
import classes from './AuthenticationTitle.module.css';
import { useNavigate } from 'react-router-dom';

export function AuthenticationTitle() {
  let navigate = useNavigate();
  const handleHome = () => {
    let path = `/admin`;
    navigate(path);
  }
  return (
    <Container size={420}mt={90}>
      <Title ta="center" className={classes.title}>
        Chào mừng bạn trở lại!
      </Title>
      <Text c={'gray'} ml={20}>Đăng nhập tài khoản của bạn ngay nào!!!</Text>
      <Paper withBorder shadow="md" p={50} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@seehoon.dev" required />
        <PasswordInput label="Mật khẩu" placeholder="Your password" required mt="md" />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Ghi nhớ" />
          <Anchor component="button" size="sm">
            Quên mật khẩu?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={handleHome}>
          Đăng nhập
        </Button>
        <Text c="dimmed" size="sm" ta="center" mt={50}>
          Bạn chưa có tài khoản?{' '}
          <Anchor size="sm" component="button">
            Đăng ký ngay
          </Anchor>
        </Text>
      </Paper>
    </Container>
  );
};
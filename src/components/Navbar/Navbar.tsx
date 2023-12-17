import { useState } from 'react';
import { Center, Tooltip, UnstyledButton, Stack, rem, Container } from '@mantine/core';
import {
    IconHome2,
    IconSettings,
    IconLogout,
    IconSwitchHorizontal,
} from '@tabler/icons-react';
import classes from './Navbar.module.css';
import { Avatar } from '@mantine/core';
import avatarImg from'../../assets/images/saint-patrick_9263506.png';
import { useNavigate } from 'react-router-dom';

interface NavbarLinkProps {
    icon: typeof IconHome2;
    label: string;
    active?: boolean;
    onClick?(): void;
}
function NavbarLink({ icon: Icon, label, active, onClick }: NavbarLinkProps) {
    return (
        <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
            <UnstyledButton onClick={onClick} className={classes.link} data-active={active || undefined}>
                <Icon style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
            </UnstyledButton>
        </Tooltip>
    );
}

const mockdata = [
    { icon: IconHome2, label: 'Dashboard' },
    { icon: IconSettings, label: 'Cài đặt' },
];

export default function Navbar() {
    const [active, setActive] = useState(2);
    let navigate = useNavigate();
    const handleLogin = ()=>{
        let path ='/login';
        navigate(path);
    }

    const links = mockdata.map((link, index) => (
        <Container p={10}>
            <NavbarLink
                {...link}
                key={link.label}
                active={index === active}
                onClick={() => setActive(index)}
            />
        </Container>
    ));

    return (
        <nav className={classes.navbar}>
            <Center>
                <Avatar src={avatarImg} radius='xl'/>
            </Center>

            <div className={classes.navbarMain}>
                <Stack justify="center" gap={0}>
                    {links}
                </Stack>
            </div>

            <Stack justify="center" gap={10}>
                <NavbarLink icon={IconSwitchHorizontal} label="Thay đổi tài khoản" />
                <NavbarLink icon={IconLogout} label="Đăng xuất" onClick={handleLogin}/>
            </Stack>
        </nav>
    );
}
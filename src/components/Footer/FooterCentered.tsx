import { Text, Container, ActionIcon, Group, rem, Image } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './FooterCentered.module.css';
import logo from '../../assets/images/logoDinhDOcLap.png';

const data = [
  {
    title: 'DI TÍCH',
    links: [
      { label: 'Lịch sử Dinh Độc Lập', link: '#' },
      { label: 'Kiến trúc Dinh Độc Lập', link: '#' },
      { label: 'Bản đồ di tích', link: '#' },
      { label: 'Giờ tham quan và giá vé', link: '#' },
    ],
  },
  {
    title: 'TRƯNG BÀY',
    links: [
      { label: 'Chuyên đề khác', link: '#' },
      { label: 'Nghiên cứu sưu tầm', link: '#' },
    ],
  },
  {
    title: 'HOẠT ĐỘNG GIÁO DỤC',
    links: [
      { label: 'Chương trình Khám phá Di Sản', link: '#' },
      { label: 'Các hoạt động', link: '#' },
      { label: 'Câu hỏi thường gặp (FAQ)', link: '#' },
    ],
  },
];

export function FooterCentered() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'>
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
        c={'gray'}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title} fw={700} c={'blue'}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
        <Container className={classes.inner} mt={50} size={'xl'} pb={20}>
          <div className={classes.logo}>
            <Container mb={20} ml={0} p={0}>
              <Image src={logo} w={120} h={50}></Image>
            </Container>
            <Text size="sm" c="dimmed" className={classes.description}>
              Chiếc xe tăng trong Dinh Độc Lập
            </Text>
            <Text size="sm" c="dimmed" className={classes.description}>
              Cỏ đã lên xanh giữa bánh xích ngày nào
            </Text>
          </div>
          <div className={classes.groups}>{groups}</div>
        </Container>
        <Container className={classes.afterFooter} mt={0} size={'xl'}>
          <Text c="dimmed" size="sm">
            © 2023 Hệ thống địa lý thông tin 3 chiều
          </Text>

          <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
            <ActionIcon size="lg" color="gray" variant="subtle">
              <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
            </ActionIcon>
          </Group>
        </Container>
    </footer>
  );
}
// import { Anchor, Group, ActionIcon, rem, Image } from '@mantine/core';
// import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
// import classes from './FooterCentered.module.css';
// import logo from '../../assets/images/logoDinhDOcLap.png';

// const links = [
//   { link: '#', label: 'Liên hệ' },
//   { link: '#', label: 'Trang chủ' },
//   { link: '#', label: 'Tham quan' },
//   { link: '#', label: 'Bản đồ 3D' },
//   { link: '#', label: 'Liên hệ' },
// ];

// export function FooterCentered() {
//   const items = links.map((link) => (
//     <Anchor
//       c="dimmed"
//       key={link.label}
//       href={link.link}
//       lh={1}
//       onClick={(event) => event.preventDefault()}
//       size="sm"
//     >
//       {link.label}
//     </Anchor>
//   ));

//   return (
//     <div className={classes.footer}>
//       <div className={classes.inner}>
//         <Image src={logo}/>

//         <Group className={classes.links}>{items}</Group>

//         <Group gap="xs" justify="flex-end" wrap="nowrap">
//           <ActionIcon size="lg" variant="default" radius="xl">
//             <IconBrandTwitter style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
//           </ActionIcon>
//           <ActionIcon size="lg" variant="default" radius="xl">
//             <IconBrandYoutube style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
//           </ActionIcon>
//           <ActionIcon size="lg" variant="default" radius="xl">
//             <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
//           </ActionIcon>
//         </Group>
//       </div>
//     </div>
//   );
// }
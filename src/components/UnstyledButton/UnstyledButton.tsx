import {
  Text,
  Title,
  SimpleGrid,
  TextInput,
  Textarea,
  Button,
  Group,
  ActionIcon,
  UnstyledButton,
  Overlay,
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import classes from './UnstyledButton.module.css';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
const categories = [
  {
    label: 'Hỗ trợ khách Vé tham quan di tích',
    content1:'Người lớn: 40.000 đồng/người.',
    content2:'Sinh viên: 20.000 đồng/người.',
    content3:'Trẻ em: 10.000 đồng/người.  ',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMSw2-evUD0n0ibQLXkkthzFwOhDct59iVvQLA=s1360-w1360-h1020',
  },
  {
    label: 'Combo vé tham quan di tích và khu trưng bày',
    content1:'Người lớn: 65.000 đồng/người.',
    content2:'Sinh viên: 45.000 đồng/người.',
    content3:'Trẻ em: 15.000 đồng/người.  ',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMDRGthYQDPz6qCqwMST1WSlM0mQbaTc0ixpL8U=s1360-w1360-h1020'
  },
  {
    label: 'Vé tham quan khu trưng bày',
    content1:'Người lớn: 40.000 đồng/người.',
    content2:'Sinh viên: 40.000 đồng/người.',
    content3:'Trẻ em: 10.000 đồng/người.  ',
    image: 'https://lh3.googleusercontent.com/p/AF1QipMqO6pQBXs59Fl2u-THE02rmXaVB8WCO9EonVsX=s1360-w1360-h1020'
  },
];
export function UnstyledButtonModule() {
  const items = categories.map((category) => (
    <UnstyledButton
      style={{ backgroundImage: `url(${category.image})` }}
      className={classes.categoryCard}
      h={'200px'}
      key={category.label}
    >
      <Overlay color="#000" opacity={0.6} zIndex={1} />
      <Text size="xl" ta="center" fw={700} className={classes.categoryLabel} c={'white'}>
        {category.label}
      </Text>
      <Text size="md" ta="left" fw={600} ml={70} className={classes.categoryContent} c={'white'}>
        {category.content1}
      </Text>
      <Text size="md" ta="left" fw={600} ml={70} className={classes.categoryContent} c={'white'}>
        {category.content2}
      </Text>
      <Text size="md" ta="left" fw={600} ml={70} className={classes.categoryContent} c={'white'}>
        {category.content3}
      </Text>
    </UnstyledButton>
  ));

  return (
    <>
      <SimpleGrid cols={{ base: 1, sm: 3 }}>{items}</SimpleGrid>
    </>
  );
}
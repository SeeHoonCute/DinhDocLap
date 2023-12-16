import { Text, Box, Stack, rem, SimpleGrid, Center } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';

interface ContactIconProps extends Omit<React.ComponentPropsWithoutRef<'div'>, 'title'> {
  icon: typeof IconPhone;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({ icon: Icon, title, description, ...others }: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="md" fw={'bolder'} className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'hello@seehooncute.dev', icon: IconAt },
  { title: 'SDT', description: ' 080. 85037 - 028.38223652', icon: IconPhone },
  { title: 'Địa chỉ', description: '135 Nam Kỳ Khởi Nghĩa, quận 1, TP.HCM', icon: IconMapPin },
  { title: 'Giờ làm việc', description: '8:00 – 16.30 từ T2-CN hằng tuần', icon: IconSun },
];

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return (<SimpleGrid cols={4}>{items}</SimpleGrid>);
}
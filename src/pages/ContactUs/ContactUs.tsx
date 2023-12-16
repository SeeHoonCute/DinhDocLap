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
  Grid,
  Image,
  Center
} from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { ContactIconsList } from './ContactIcons';
import { useForm } from '@mantine/form';
import classes from './ContactUs.module.css';
import { UnstyledButtonModule } from '../../components/UnstyledButton/UnstyledButton'
import { FaqSimple } from '../../components/FQASimple/FaqSimple';
import image1 from '../../assets/images/5124556.jpg';

const social = [IconBrandTwitter, IconBrandYoutube, IconBrandInstagram];
export function ContactUs() {
  const icons = social.map((Icon, index) => (
    <ActionIcon key={index} size={28} className={classes.social} variant="transparent">
      <Icon size="1.4rem" stroke={1.5} />
    </ActionIcon>
  ));
  const form = useForm({
    initialValues: { name: '', email: '', age: 0 },

    // functions will be used to validate values at corresponding key
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
    },
  });

  return (
    <>
    <div className={classes.contactUsDescription}>
        <Title c={'black'} ta={'center'}>Liên hệ</Title>
        <Text className={classes.description} mt="sm" mb={30} c={'black'} ta={'center'}>
          Để lại email của bạn và chúng tôi sẽ liên hệ lại với bạn trong vòng 24 giờ
        </Text>
        <ContactIconsList />
      </div>
      <div className={classes.wrapper}>
        <Grid>
          <Grid.Col span={8}>
            <Image src={image1} h={400} w={600} />
          </Grid.Col>
          <Grid.Col span={4}>
            <div className={classes.form}>
              <form onSubmit={form.onSubmit(console.log)}>
                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  {...form.getInputProps('email')}
                  required
                  classNames={{ input: classes.input, label: classes.inputLabel }}
                />
                <TextInput
                  label="Tên của bạn"
                  placeholder="Cute Cute"
                  mt="md"
                  {...form.getInputProps('name')}
                  classNames={{ input: classes.input, label: classes.inputLabel }}
                />
                <Textarea
                  required
                  label="Chúng tôi có thể giúp gì cho bạn?"
                  placeholder="Tôi muốn được phục vụ tốt hơn"
                  minRows={10}
                  mt="md"
                  classNames={{ input: classes.input, label: classes.inputLabel }}
                />
                <Group justify="flex-end" mt="xl">
                  <Button className={classes.control} type="submit">Gửi tin nhắn</Button>
                </Group>
              </form>
            </div>
          </Grid.Col>
        </Grid>
      </div>
      <div className={classes.wrapperButtonModule}>
        <FaqSimple />
      </div>
    </>
  );
}
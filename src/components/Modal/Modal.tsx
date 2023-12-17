import {
  Button,
  Container,
  Group,
  Modal, SimpleGrid, TextInput, Textarea, Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
interface IModalModule {
  onClick: () => void;
}

const ModalModule = ({ onClick }: IModalModule) => {
  const form = useForm({
    initialValues: {
      color: '',
      description: '',
      reason: '',
    },
  });
  return (
    <Modal opened={true} onClose={onClick} withCloseButton={false}>
      <form onSubmit={form.onSubmit(() => { })}>
        <Container m={20}>
          <Title
            order={2}
            size="h1"
            fw={900}
            ta="center"
          >
            THÔNG TIN
          </Title>

          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput
              label="Màu sắc"
              placeholder="Màu sắc của khối"
              name="color"
              variant="filled"
              {...form.getInputProps('color')}
            />
          </SimpleGrid>

          <TextInput
            label="Mô tả"
            placeholder="Mô hình 3D Dinh Độc Lập"
            mt="md"
            name="description"
            variant="filled"
            {...form.getInputProps('description')}
          />
          <Textarea
            mt="md"
            label="Lý do chỉnh sửa"
            placeholder="Tôi không thích mô hình cũ"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps('reason')}
          />

          <Group justify="center" mt="xl">
            <Button type="submit" size="md" onClick={onClick}>
              Lưu
            </Button>
          </Group>
        </Container>
      </form>
    </Modal>
  );
}
export default ModalModule;
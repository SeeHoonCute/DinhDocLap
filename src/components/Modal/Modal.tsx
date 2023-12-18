import {
  Button,
  Container,
  Grid,
  Group,
  Modal, SimpleGrid, TextInput, Textarea, Title, Text, Select, GridCol
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
          <Select
            label="Type"
            placeholder="Chọn type"
            data={['Box', 'Cylinder', 'Sphere', 'Plane']}
            defaultValue="Box"
            clearable
          />
          <Grid mt={20}>
            <Text>Location:</Text>
            <Grid>
              <GridCol span={4}>
                <TextInput
                  label="x"
                  placeholder="Tọa độ x"
                  name="color"
                  variant="filled"
                  {...form.getInputProps('x')}
                />
              </GridCol>
              <GridCol span={4}>
                <TextInput
                  label="y"
                  placeholder="Tọa độ y                                                                                                                             ````````1```"
                  name="color"
                  variant="filled"
                  {...form.getInputProps('y')}
                />
              </GridCol>
              <GridCol span={4}>
                <TextInput
                  label="z"
                  placeholder="Tọa độ z"
                  name="color"
                  variant="filled"
                  {...form.getInputProps('z')}
                />
              </GridCol>
            </Grid>
          </Grid>
          <Grid mt={20}>
            <Text>Size:</Text>
            <Grid>
              <GridCol span={4}>
                <TextInput
                  label="width"
                  placeholder="20"
                  name="size"
                  variant="filled"
                  {...form.getInputProps('x')}
                />
              </GridCol>
              <GridCol span={4}>
                <TextInput
                  label="height"
                  placeholder="20                                                                                                                           ````````1```"
                  name="size"
                  variant="filled"
                  {...form.getInputProps('y')}
                />
              </GridCol>
              <GridCol span={4}>
                <TextInput
                  label="depth"
                  placeholder="20"
                  name="size"
                  variant="filled"
                  {...form.getInputProps('z')}
                />
              </GridCol>
            </Grid>
          </Grid>
          <Grid mt={20}>
            <Text>Rotate:</Text>
            <Grid>
              <GridCol span={4}>
                <TextInput
                  label="x"
                  placeholder="Tọa độ x"
                  name="rotate"
                  variant="filled"
                  {...form.getInputProps('x')}
                />
              </GridCol>
              <GridCol span={4}>
                <TextInput
                  label="y"
                  placeholder="Tọa độ y                                                                                                                             ````````1```"
                  name="rotate"
                  variant="filled"
                  {...form.getInputProps('y')}
                />
              </GridCol>
              <GridCol span={4}>
                <TextInput
                  label="z"
                  placeholder="Tọa độ z"
                  name="rotate"
                  variant="filled"
                  {...form.getInputProps('z')}
                />
              </GridCol>
            </Grid>
          </Grid>
          <Grid mt={20}>
            <Text>Offset:</Text>
            <Grid>
              <GridCol span={4}>
                <TextInput
                  label="x"
                  placeholder="Tọa độ x"
                  name="offset"
                  variant="filled"
                  {...form.getInputProps('x')}
                />
              </GridCol>
              <GridCol span={4}>
                <TextInput
                  label="y"
                  placeholder="Tọa độ y                                                                                                                             ````````1```"
                  name="offset"
                  variant="filled"
                  {...form.getInputProps('y')}
                />
              </GridCol>
              <GridCol span={4}>
                <TextInput
                  label="z"
                  placeholder="Tọa độ z"
                  name="offset"
                  variant="filled"
                  {...form.getInputProps('z')}
                />
              </GridCol>
            </Grid>
          </Grid>
          
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
            maxRows={5}
            minRows={2}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps('reason')}
          />

          <Group justify="center" mt={10}>
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
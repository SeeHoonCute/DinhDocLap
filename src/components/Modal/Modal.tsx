import {
	Button,
	Container,
	Grid,
	Group,
	Modal,
	SimpleGrid,
	TextInput,
	Textarea,
	Title,
	Text,
	Select,
	GridCol,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
// import { IModalModule } from "./IModalModule";
interface IModalModule {
	onClick:()=>void;
	type?: String;
	id?: Number;
}

// const ModalModule = ({ onClick, onDisabled }: IModalModule) => {
//   const form = useForm({
//     initialValues: {
//       color: '',
//       description: '',
//       reason: '',
//     },
//   });
//   return (
//     <Modal opened={true} onClose={onClick} withCloseButton={false}>
//       <form onSubmit={form.onSubmit(() => { })}>
//         <Container m={20}>
//           <Title
//             order={2}
//             size="h1"
//             fw={900}
//             ta="center"
//           >
//             THÔNG TIN
//           </Title>
//           <Select
//             label="Type"
//             placeholder="Chọn type"
//             disabled={onDisabled}
//             data={['Box', 'Cylinder', 'Sphere', 'Plane', 'pyramid']}
//             defaultValue="Box"
//             clearable
//           />
//           <Grid mt={20}>
//             <Text>Location:</Text>
//             <Grid>
//               <GridCol span={4}>
//                 <TextInput
//                   label="x"
//                   placeholder="Tọa độ x"
//                   name="color"
//                   variant="filled"
//                   {...form.getInputProps('x')}
//                 />
//               </GridCol>
//               <GridCol span={4}>
//                 <TextInput
//                   label="y"
//                   placeholder="Tọa độ y                                                                                                                             ````````1```"
//                   name="color"
//                   variant="filled"
//                   {...form.getInputProps('y')}
//                 />
//               </GridCol>
//               <GridCol span={4}>
//                 <TextInput
//                   label="z"
//                   placeholder="Tọa độ z"
//                   name="color"
//                   variant="filled"
//                   {...form.getInputProps('z')}
//                 />
//               </GridCol>
//             </Grid>
//           </Grid>
//           <Grid mt={20}>
//             <Text>Size:</Text>
//             <Grid>
//               <GridCol span={4}>
//                 <TextInput
//                   label="width"
//                   placeholder="20"
//                   name="size"
//                   variant="filled"
//                   {...form.getInputProps('x')}
//                 />
//               </GridCol>
//               <GridCol span={4}>
//                 <TextInput
//                   label="height"
//                   placeholder="20                                                                                                                           ````````1```"
//                   name="size"
//                   variant="filled"
//                   {...form.getInputProps('y')}
//                 />
//               </GridCol>
//               <GridCol span={4}>
//                 <TextInput
//                   label="depth"
//                   placeholder="20"
//                   name="size"
//                   variant="filled"
//                   {...form.getInputProps('z')}
//                 />
//               </GridCol>
//             </Grid>
//           </Grid>
//           <Grid mt={20}>
//             <Text>Rotate:</Text>
//             <Grid>
//               <GridCol span={4}>
//                 <TextInput
//                   label="x"
//                   placeholder="Tọa độ x"
//                   name="rotate"
//                   variant="filled"
//                   {...form.getInputProps('x')}
//                 />
//               </GridCol>
//               <GridCol span={4}>
//                 <TextInput
//                   label="y"
//                   placeholder="Tọa độ y                                                                                                                             ````````1```"
//                   name="rotate"
//                   variant="filled"
//                   {...form.getInputProps('y')}
//                 />
//               </GridCol>
//               <GridCol span={4}>
//                 <TextInput
//                   label="z"
//                   placeholder="Tọa độ z"
//                   name="rotate"
//                   variant="filled"
//                   {...form.getInputProps('z')}
//                 />
//               </GridCol>
//             </Grid>
//           </Grid>
//           <Grid mt={20}>
//             <Text>Offset:</Text>
//             <Grid>
//               <GridCol span={4}>
//                 <TextInput
//                   label="x"
//                   placeholder="Tọa độ x"
//                   name="offset"
//                   variant="filled"
//                   {...form.getInputProps('x')}
//                 />
//               </GridCol>
//               <GridCol span={4}>
//                 <TextInput
//                   label="y"
//                   placeholder="Tọa độ y                                                                                                                             ````````1```"
//                   name="offset"
//                   variant="filled"
//                   {...form.getInputProps('y')}
//                 />
//               </GridCol>
//               <GridCol span={4}>
//                 <TextInput
//                   label="z"
//                   placeholder="Tọa độ z"
//                   name="offset"
//                   variant="filled"
//                   {...form.getInputProps('z')}
//                 />
//               </GridCol>
//             </Grid>
//           </Grid>
          
//           <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
//             <TextInput
//               label="Màu sắc"
//               placeholder="Màu sắc của khối"
//               name="color"
//               variant="filled"
//               {...form.getInputProps('color')}
//             />
//           </SimpleGrid>

//           <TextInput
//             label="Mô tả"
//             placeholder="Mô hình 3D Dinh Độc Lập"
//             mt="md"
//             name="description"
//             variant="filled"
//             {...form.getInputProps('description')}
//           />
//           <Textarea
//             mt="md"
//             label="Lý do chỉnh sửa"
//             placeholder="Tôi không thích mô hình cũ"
//             maxRows={5}
//             minRows={2}
//             autosize
//             name="message"
//             variant="filled"
//             {...form.getInputProps('reason')}
//           />

//           <Group justify="center" mt={10}>
//             <Button type="submit" size="md" onClick={onClick}>
//               Lưu
//             </Button>
//           </Group>
//         </Container>
//       </form>
//     </Modal>
//   );
// 	type?: String;
// 	id?: Number;
// 	onClick: () => void;
// }

interface Geometry {
	id: number;
	description: string;
	color: string;
	locationId: number;
	location: {
		x: number;
		y: number;
		z: number;
	};
	width: number;
	height: number;
	depth: number;
	rotateId: number;
	rotate: {
		x: number;
		y: number;
		z: number;
	};
	offsetId: number;
	offset: {
		x: number;
		y: number;
		z: number;
	};
	type: string;
}

const ModalModule = ({ type, id, onClick }: IModalModule) => {
	const form = useForm({
		initialValues: {
			color: "",
			description: "",
			reason: "",
			location: {
				x: 0,
				y: 0,
				z: 0,
			},
			size: {
				width: 0,
				height: 0,
				depth: 0,
			},
			rotate: {
				x: 0,
				y: 0,
				z: 0,
			},
			offset: {
				x: 0,
				y: 0,
				z: 0,
			},
			type: type ?? "box",
		},
	});

	async function handleSubmit(values: any) {
		try {
			if (type === undefined || id === undefined) {
                const response = await fetch(
                    `${process.env.REACT_APP_BACKEND_URL}/geometries`,
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(values),
                    }
                )
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("Success:", data);
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            } else {
                const response = await fetch(
                    `${process.env.REACT_APP_BACKEND_URL}/geometries/${id}`,
                    {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(values),
                    }
                )
                    .then((response) => response.json())
                    .then((data) => {
                        console.log("Success:", data);
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                    });
            }

            onClick();
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		if (type && id) {
			const fetchGeometry = async () => {
				try {
					const data: Geometry = await fetch(
						`${process.env.REACT_APP_BACKEND_URL}/geometries/${type}/${id}`
					).then((res) => res.json());

					if (!data.rotateId) {
						data.rotate = {
							x: 0,
							y: 0,
							z: 0,
						};
					}
					if (!data.offsetId) {
						data.offset = {
							x: 0,
							y: 0,
							z: 0,
						};
					}

					form.setValues(data);
				} catch (error) {
					console.error(error);
				}
			};

			fetchGeometry();
		}
	}, []);

	return (
		<Modal opened={true} onClose={onClick} withCloseButton={false}>
			<form onSubmit={form.onSubmit(handleSubmit)}>
				<Container m={20}>
					<Title order={2} size="h1" fw={900} ta="center">
						THÔNG TIN
					</Title>
					<Select
						label="Type"
						placeholder="Chọn type"
						data={["box", "pyramid", "cylinder", "sphere", "plane"]}
						disabled={type !== undefined && id !== undefined}
						{...form.getInputProps("type")}
					/>
					<Grid mt={20}>
						<Text>Location:</Text>
						<Grid>
							<GridCol span={4}>
								<TextInput
									label="x"
									placeholder="Tọa độ x"
									name="locationX"
									variant="filled"
									{...form.getInputProps("location.x")}
								/>
							</GridCol>
							<GridCol span={4}>
								<TextInput
									label="y"
									placeholder="Tọa độ y                                                                                                                             ````````1```"
									name="locationY"
									variant="filled"
									{...form.getInputProps("location.y")}
								/>
							</GridCol>
							<GridCol span={4}>
								<TextInput
									label="z"
									placeholder="Tọa độ z"
									name="locationX"
									variant="filled"
									{...form.getInputProps("location.z")}
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
									name="width"
									variant="filled"
									{...form.getInputProps("size.width")}
								/>
							</GridCol>
							<GridCol span={4}>
								<TextInput
									label="height"
									placeholder="20                                                                                                                           ````````1```"
									name="height"
									variant="filled"
									{...form.getInputProps("size.height")}
								/>
							</GridCol>
							<GridCol span={4}>
								<TextInput
									label="depth"
									placeholder="20"
									name="depth"
									variant="filled"
									{...form.getInputProps("size.depth")}
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
									name="rotateX"
									variant="filled"
									{...form.getInputProps("rotate.x")}
								/>
							</GridCol>
							<GridCol span={4}>
								<TextInput
									label="y"
									placeholder="Tọa độ y                                                                                                                             ````````1```"
									name="rotateY"
									variant="filled"
									{...form.getInputProps("rotate.y")}
								/>
							</GridCol>
							<GridCol span={4}>
								<TextInput
									label="z"
									placeholder="Tọa độ z"
									name="rotateZ"
									variant="filled"
									{...form.getInputProps("rotate.z")}
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
									name="offsetX"
									variant="filled"
									{...form.getInputProps("offset.x")}
								/>
							</GridCol>
							<GridCol span={4}>
								<TextInput
									label="y"
									placeholder="Tọa độ y                                                                                                                             ````````1```"
									name="offsetY"
									variant="filled"
									{...form.getInputProps("offset.y")}
								/>
							</GridCol>
							<GridCol span={4}>
								<TextInput
									label="z"
									placeholder="Tọa độ z"
									name="offsetZ"
									variant="filled"
									{...form.getInputProps("offset.z")}
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
							{...form.getInputProps("color")}
						/>
					</SimpleGrid>

					<TextInput
						label="Mô tả"
						placeholder="Mô hình 3D Dinh Độc Lập"
						mt="md"
						name="description"
						variant="filled"
						{...form.getInputProps("description")}
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
						{...form.getInputProps("reason")}
					/>

					<Group justify="center" mt={10}>
						<Button type="submit" size="md">
							Lưu
						</Button>
					</Group>
				</Container>
			</form>
		</Modal>
	);
};
export default ModalModule;

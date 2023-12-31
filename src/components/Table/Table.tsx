import cx from "clsx";
import { useEffect, useState } from "react";
import { Table, ScrollArea, Button, Text } from "@mantine/core";
import classes from "./Table.module.css";
import { IconPlus } from "@tabler/icons-react";
import ModalModule from "../Modal/Modal";
import { useRecoilValue } from 'recoil';
import { searchValueState } from '../../atom';
type Nullable<T> = T | null;

interface Geometry {
	id: number;
	description: string;
	color: string;
	locationX: number;
	locationY: number;
	locationZ: number;
	width: number;
	height: number;
	depth: number;
	rotateX: number;
	rotateY: number;
	rotateZ: number;
	offsetX: number;
	offsetY: number;
	offsetZ: number;
	type: string;
}
interface TableData {
	id: number;
	description: string;
	color: string;
	locationId: number;
	sizeId: number;
	rotateId: number;
	offsetId: number;
	type: string;
}

// const geometries: TableData[] = [
// 	{
// 		id: 1,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 2,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 3,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 4,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 5,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 6,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 7,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 8,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 9,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 10,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 11,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 12,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 13,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 14,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 15,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 16,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 17,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// 	{
// 		id: 18,
// 		description: "Một đường nở hoa",
// 		color: "white",
// 		locationId: 1,
// 		sizeId: 1,
// 		rotateId: 1,
// 		offsetId: 1,
// 		type: "box",
// 	},
// ];
const TableModule = () => {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [geometries, setGeometries] = useState<TableData[]>([]);
	const [searchGeometries, setSearchGeometries] = useState<TableData[]>([]);
	const [selectedGeometry, setSelectedGeometry] =
		useState<Nullable<TableData>>(null);
const searchValue = useRecoilValue(searchValueState);
const [isDeleteOpen, setIsDeleteOpen] = useState(false);


	const handleClickAdd = () => {
		setOpen(true);
	};
	const handleCloseAdd = () => {
		setOpen(false);
	};
	const handleClickEdit = (geometry: TableData) => {
		setSelectedGeometry(geometry);
		setOpenEdit(true);
	};
	const handleCloseEdit = () => {
		setOpenEdit(false);
	};

const handleDelete = async (geometry: TableData) => {
	setIsDeleteOpen(window.confirm("Are you sure you want to delete this geometry?"))

    if(isDeleteOpen) {
        try {
            const response = await fetch(
                `${process.env.REACT_APP_BACKEND_URL}/geometries/${geometry.id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },

                    body: JSON.stringify(geometry),
                }
            )
			setIsDeleteOpen(false)
        } catch (error) {
            console.error(error);
        }
    }
};

	useEffect(() => {
		const fetchGeometries = async () => {
			try {
				const data: TableData[] = await fetch(
					`${process.env.REACT_APP_BACKEND_URL}/geometries`
				).then((res) => res.json());
					setGeometries(data)
				setSearchGeometries(data)
			} catch (error) {
				console.error(error);
			}
		};
		fetchGeometries();
	}, [isDeleteOpen]);

useEffect(() => {
	if (searchValue) {
        setSearchGeometries(geometries.filter((geometry) => geometry.id === Number(searchValue)));
    } else {
        setSearchGeometries(geometries);
    }
}, [searchValue]);



	return (
		<>
			{}
			{open && <ModalModule onClick={handleCloseAdd} />}
			{openEdit && (
				<ModalModule
					type={selectedGeometry?.type}
					id={selectedGeometry?.id}
					onClick={handleCloseEdit}
				/>
			)}
			<ScrollArea
				h={600}
				w={"100%"}
				onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
				mt={80}
			>
				<Table
					miw={700}
					w={"90%"}
					ml={100}
					stickyHeader
					stickyHeaderOffset={0}
				>
					<Table.Thead
						className={cx(classes.header, {
							[classes.scrolled]: scrolled,
						})}
						h={60}
					>
						<Table.Tr>
							<Table.Th>ID</Table.Th>
							<Table.Th>Mô tả</Table.Th>
							<Table.Th>Type</Table.Th>
							<Table.Th>Màu sắc</Table.Th>
							<Table.Th>location</Table.Th>
							<Table.Th>size</Table.Th>
							<Table.Th>rotate</Table.Th>
							<Table.Th>offset</Table.Th>
							<Table.Th colSpan={2} ta={"center"}>
								<Button
									onClick={handleClickAdd}
									color="green"
									w={150}
									leftSection={<IconPlus size={20} />}
								>
									<Text>Thêm</Text>
								</Button>
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{searchGeometries.map((geometry) => (
							<Table.Tr key={`${geometry.type}-${geometry.id}`}>
								<Table.Td>{geometry.id}</Table.Td>
								<Table.Td>{geometry.description}</Table.Td>
								<Table.Td>{geometry.type}</Table.Td>
								<Table.Td>{geometry.color}</Table.Td>
								<Table.Td>{geometry.locationId}</Table.Td>
								<Table.Td>{geometry.sizeId}</Table.Td>
								<Table.Td>{geometry.rotateId}</Table.Td>
								<Table.Td>{geometry.offsetId}</Table.Td>
								<Table.Td align="right">
									<Button
										onClick={() =>
											handleClickEdit(geometry)
										}
										className={classes.Button}
									>
										Sửa
									</Button>
								</Table.Td>
								<Table.Td>
									<Button
										color="pink"
										onClick={()=>handleDelete(geometry)}
										className={classes.Button}
									>
										Xóa
									</Button>
								</Table.Td>
							</Table.Tr>
						))}
					</Table.Tbody>
				</Table>
			</ScrollArea>
		</>
	);
};
export default TableModule;

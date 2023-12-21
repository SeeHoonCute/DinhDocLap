import cx from "clsx";
import { useEffect, useState } from "react";
import { Table, ScrollArea, Button, Text } from "@mantine/core";
import classes from "./Table.module.css";
import { IconPlus } from "@tabler/icons-react";
import ModalModule from "../Modal/Modal";
interface dataTable {
	id: number;
	description: string;
	color: string;
	locationx: number;
	ocationy: number;
	ocationz: number;
	wight: number;
	height: number;
	depth: number;
	rotatex: number;
	rotatey: number;
	rotatez: number;
	offsetx: number;
	offsety: number;
	offsetz: number;
	type: string;
}

const createData = (
	id: number,
	description: string,
	color: string,
	locationx: number,
	ocationy: number,
	ocationz: number,
	wight: number,
	height: number,
	depth: number,
	rotatex: number,
	rotatey: number,
	rotatez: number,
	offsetx: number,
	offsety: number,
	offsetz: number,
	type: string
): dataTable => {
	return {
		id,
		description,
		color,
		locationx,
		ocationy,
		ocationz,
		wight,
		height,
		depth,
		rotatex,
		rotatey,
		rotatez,
		offsetx,
		offsety,
		offsetz,
		type,
	};
};


const TableModule = () => {
	const [scrolled, setScrolled] = useState(false);
	const [open, setOpen] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
    const [geometries, setGeometries] = useState([]);

	const handleClickAdd = () => {
		setOpen(true);
	};
	const handleCloseAdd = () => {
		setOpen(false);
	};
	const handleClickEdit = () => {
		setOpenEdit(true);
	};
	const handleCloseEdit = () => {
		setOpenEdit(false);
	};

    useEffect(() => {
        const fetchGeometries = async () => {
            const data = await fetch("http://localhost:8080/geometries").then((res) => res.json());
            setGeometries(data);
        }
        fetchGeometries();
    }, [])

	return (
		<>
			{open && <ModalModule onClick={handleCloseAdd} />}
			{openEdit && <ModalModule onClick={handleCloseEdit} />}
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
									fullWidth
									leftSection={<IconPlus size={20} />}
								>
									<Text>Thêm</Text>
								</Button>
							</Table.Th>
						</Table.Tr>
					</Table.Thead>
					<Table.Tbody>
						{geometries.map((geometry) => (
							<Table.Tr key={`${geometry.type}-${geometry.id}`}>
								<Table.Td>{geometry.id}</Table.Td>
								<Table.Td>{geometry.description}</Table.Td>
								<Table.Td>{geometry.type}</Table.Td>
								<Table.Td>{geometry.color}</Table.Td>
								<Table.Td>
									{geometry.locationId}
								</Table.Td>
								<Table.Td>
									{geometry.sizeId}
								</Table.Td>
								<Table.Td>
									{geometry.rotateId}
								</Table.Td>
								<Table.Td>
									{geometry.offsetId}
								</Table.Td>
								<Table.Td align="right">
									<Button onClick={handleClickEdit}>
										Sửa
									</Button>
								</Table.Td>
								<Table.Td>
									<Button color="pink">Xóa</Button>
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

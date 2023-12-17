import cx from 'clsx';
import { useState } from 'react';
import { Table, ScrollArea, Button, Text } from '@mantine/core';
import classes from './Table.module.css';
import { IconPlus } from '@tabler/icons-react';
import ModalModule from '../Modal/Modal';
interface dataTable {
    id: number;
    description: string;
    color: string;
    locationId: number;
    sizeId: number;
    rotateId: number;
    offsetId: number;
    buildingComponentId: number;
}

const createData = (
    id: number,
    description: string,
    color: string,
    locationId: number,
    sizeId: number,
    rotateId: number,
    offsetId: number,
    buildingComponentId: number,
): dataTable => {
    return {
        id,
        description,
        color,
        locationId,
        sizeId,
        rotateId,
        offsetId,
        buildingComponentId,
    };
};

const mockdata = [
    createData(1, 'mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 2, 4),
    createData(2, 'mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 2, 4),
    createData(3, 'mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 2, 4),
    createData(4, 'mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 2, 4),
    createData(5, 'mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 2, 4),
    createData(6, 'mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 2, 4),
    createData(7, 'mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 2, 4),
    createData(8, 'mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 2, 4),
    createData(9, 'mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 2, 4),
    createData(10, 'mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 2, 4),
]


const TableModule = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    
    const handleClickAdd = () => {
        setOpen(true);
    }
    const handleCloseAdd = () => {
        setOpen(false);
    }
    const handleClickEdit = () => {
        setOpenEdit(true);
    }
    const handleCloseEdit = () => {
        setOpenEdit(false);
    }

    const rows = mockdata.map((row) => (
        <Table.Tr key={row.id}>
            <Table.Td>{row.id}</Table.Td>
            <Table.Td>{row.description}</Table.Td>
            <Table.Td>{row.color}</Table.Td>
            <Table.Td>{row.locationId}</Table.Td>
            <Table.Td>{row.sizeId}</Table.Td>
            <Table.Td>{row.rotateId}</Table.Td>
            <Table.Td>{row.offsetId}</Table.Td>
            <Table.Td>{row.buildingComponentId}</Table.Td>
            <Table.Td>
                <Button onClick={handleClickEdit}>sửa</Button>
            </Table.Td>
            <Table.Td>
                <Button color="pink">Xóa</Button>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
        {open && <ModalModule onClick={handleCloseAdd}/>}
        {openEdit && <ModalModule onClick={handleCloseEdit}/>}
        <ScrollArea h={600} w={'100%'} onScrollPositionChange={({ y }) => setScrolled(y !== 0)} mt={80}>
            <Table miw={700} w={'90%'} ml={100} stickyHeader stickyHeaderOffset={0}>
                <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })} h={60}>
                    <Table.Tr>
                        <Table.Th>ID</Table.Th>
                        <Table.Th>Mô tả</Table.Th>
                        <Table.Th>Màu sắc</Table.Th>
                        <Table.Th>locationId</Table.Th>
                        <Table.Th>sizeId</Table.Th>
                        <Table.Th>rotateId</Table.Th>
                        <Table.Th>offsetId</Table.Th>
                        <Table.Th>buildingComponentId</Table.Th>
                        <Table.Th colSpan={2} align='center'>
                            <Button  onClick={handleClickAdd}  color="gray" fullWidth leftSection={<IconPlus size={20} />} ><Text>Thêm</Text></Button>
                        </Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </ScrollArea>
        </>
    );
}
export default TableModule;
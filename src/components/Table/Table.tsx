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
    type: string,
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

const mockdata = [
    createData(1, 'Mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 26, 54, 56, 5, 8, 5, 4, 6, 7, 'box'),
    createData(2, 'Mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 26, 54, 56, 5, 8, 5, 4, 6, 7, 'box'),
    createData(3, 'Mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 26, 54, 56, 5, 8, 5, 4, 6, 7, 'box'),
    createData(4, 'Mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 26, 54, 56, 5, 8, 5, 4, 6, 7, 'box'),
    createData(5, 'Mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 26, 54, 56, 5, 8, 5, 4, 6, 7, 'box'),
    createData(6, 'Mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 26, 54, 56, 5, 8, 5, 4, 6, 7, 'box'),
    createData(7, 'Mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 26, 54, 56, 5, 8, 5, 4, 6, 7, 'box'),
    createData(8, 'Mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 26, 54, 56, 5, 8, 5, 4, 6, 7, 'box'),
    createData(9, 'Mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 26, 54, 56, 5, 8, 5, 4, 6, 7, 'box'),
    createData(10, 'Mô hình 3D Dinh Độc Lập', 'blue', 1, 3, 5, 26, 54, 56, 5, 8, 5, 4, 6, 7, 'box'),
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
            <Table.Td>{row.type}</Table.Td>
            <Table.Td>{row.color}</Table.Td>
            <Table.Td>{row.locationx} - {row.ocationy} - {row.ocationz}</Table.Td>
            <Table.Td>{row.wight} - {row.height} - {row.depth}</Table.Td>
            <Table.Td>{row.rotatex} - {row.rotatey} - {row.rotatez}</Table.Td>
            <Table.Td>{row.offsetx} - {row.offsety} - {row.rotatex}</Table.Td>
            <Table.Td align='right'>
                <Button onClick={handleClickEdit}>Sửa</Button>
            </Table.Td>
            <Table.Td>
                <Button color="pink">Xóa</Button>
            </Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            {open && <ModalModule onClick={handleCloseAdd} />}
            {openEdit && <ModalModule onClick={handleCloseEdit} />}
            <ScrollArea h={600} w={'100%'} onScrollPositionChange={({ y }) => setScrolled(y !== 0)} mt={80}>
                <Table miw={700} w={'90%'} ml={100} stickyHeader stickyHeaderOffset={0}>
                    <Table.Thead className={cx(classes.header, { [classes.scrolled]: scrolled })} h={60}>
                        <Table.Tr>
                            <Table.Th>ID</Table.Th>
                            <Table.Th>Mô tả</Table.Th>
                            <Table.Th>Type</Table.Th>
                            <Table.Th>Màu sắc</Table.Th>
                            <Table.Th>location</Table.Th>
                            <Table.Th>size</Table.Th>
                            <Table.Th>rotate</Table.Th>
                            <Table.Th>offset</Table.Th>
                            <Table.Th colSpan={2}ta={'center'}>
                                    <Button onClick={handleClickAdd} color="green" fullWidth leftSection={<IconPlus size={20} />} ><Text>Thêm</Text></Button>
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
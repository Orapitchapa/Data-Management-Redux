import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';

import { deleteData, setData } from './redux/DataSlice'
import { RootState } from './redux/Store';

interface Data {
    key: React.Key;
    name: string
    nationality: string;
    gender: string;
    phoneNumber: string;
}

const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: Data[]) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: (record: Data) => ({
        name: record.name,
    }),
};

const DataTable: React.FC = () => {
    const columns: ColumnsType<Data> = [
        {
            title: 'ชื่อ',
            dataIndex: 'name',
            render: (text: string) => <a>{text}</a>,
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'เพศ',
            dataIndex: 'gender',
            render: (text: string) => <a>{text}</a>,
            sorter: (a, b) => a.gender.length - b.gender.length,
        },
        {
            title: 'เบอร์โทรศัทพ์',
            dataIndex: 'phoneNumber',
            render: (text: string) => <a>{text}</a>,
            sorter: (a, b) => a.phoneNumber.length - b.phoneNumber.length,
        },
        {
            title: 'สัญชาติ',
            dataIndex: 'nationality',
            render: (text: string) => <a>{text}</a>,
            sorter: (a, b) => a.nationality.length - b.nationality.length,
        },
        {
            title: 'จัดการ',
            dataIndex: '',
            key: 'x',
            render: (_, record: Data) => (<a onClick={() => handleDelete(record.key)}>Delete</a>),
        },
    ];
    
    const [selectionType, setSelectionType] = useState<'checkbox'>('checkbox');
    console.log(setSelectionType)
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.data);
    console.log('state data ==>', data)
    useEffect(() => {
        const storedData = localStorage.getItem('formData');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            dispatch(setData(parsedData));
        }
    }, []);

    console.log('data ==>', data)
    const transformedData: Data[] = data ? data.map((item: any) => ({
        key: item.key,
        name: item.firstName + ' ' + item.lastName,
        gender: item.gender,
        phoneNumber: item.phoneNumber,
        nationality: item.nationality
    })) : [];

    const handleDelete = (key: React.Key) => {
        const existingData = localStorage.getItem('formData');
        const parsedData = existingData ? JSON.parse(existingData) : [];
        const updatedData = parsedData.filter((item: Data) => item.key !== key);
        localStorage.setItem('formData', JSON.stringify(updatedData));
        dispatch(deleteData(key));
    };
    return (
        <div>
            <Table
                rowSelection={{
                    type: selectionType,
                    ...rowSelection,
                }}
                columns={columns}
                dataSource={transformedData}
            />
        </div>
    );
};

export default DataTable;

import React from 'react';
import { Form, Input, DatePicker, Select, Button, Row, Col } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { addData, selectData, setData } from './redux/DataSlice';
import { useTranslation } from 'react-i18next';
import DataTable from './DataTable';
import './Styles/Styles.scss'

const { Option } = Select;

const ManageData: React.FC = () => {
    const dispatch = useDispatch()
    const existingData = useSelector(selectData);
    const { t, i18n } = useTranslation();
    console.log(existingData)

    const onFinish = (values: any) => {
        console.log('Form values:', values);
        const existingData = localStorage.getItem('formData');
        const parsedData = existingData ? JSON.parse(existingData) : [];
        const newData = { ...values, key: parsedData.length + 1 };
        parsedData.push(newData);
        localStorage.setItem('formData', JSON.stringify(parsedData));
        dispatch(addData(values));
        dispatch(setData(parsedData));

        form.resetFields();
    };

    const [form] = Form.useForm();

    const handleLanguageChange = (value: string) => {
        i18n.changeLanguage(value);
    };
    return (
        <>
            <div className="language-switch">
                <div className="language-select">
                    <Select defaultValue={i18n.language} onChange={handleLanguageChange}>
                        <Option value="en">EN</Option>
                        <Option value="th">TH</Option>
                    </Select>
                </div>
            </div>
            <div className='container' style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1>{t('title')}</h1>
                <Form form={form} onFinish={onFinish}>
                    <Row gutter={20}>
                        <Col span={6}>
                            <Form.Item label={t('prefix')} name="title" rules={[{ required: true}]}>
                                <Select placeholder={t('select')}>
                                    <Option value="mr">{t('mr')}</Option>
                                    <Option value="mrs">{t('mrs')}</Option>
                                    <Option value="miss">{t('miss')}</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={9}>
                            <Form.Item label={t('firstname')} name="firstName" rules={[{ required: true}]}>
                                <Input placeholder={t('firstname')} />
                            </Form.Item>
                        </Col>
                        <Col span={9}>
                            <Form.Item label={t('lastname')} name="lastName" rules={[{ required: true }]}>
                                <Input placeholder={t('lastname')} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={7}>
                            <Form.Item label={t('birthday')} name="birthdate" rules={[{ required: true }]}>
                                <DatePicker placeholder={t('birthday')} />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label={t('nationality')} name="nationality" rules={[{ required: true }]}>
                                <Select placeholder={t('select')}>
                                    <Option value="ไทย">{t('thai')}</Option>
                                    <Option value="อื่นๆ">{t('other')}</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item label={t('gender')} name="gender" rules={[{ required: true }]}>
                                <Select placeholder={t('select')}>
                                    <Option value="ชาย">{t('male')}</Option>
                                    <Option value="หญิง">{t('female')}</Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item label={t('citizenId')} name="citizenId">
                                <Input placeholder={t('citizenId')} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={t('phone')} name="phoneNumber" rules={[{ required: true }]}>
                                <Input addonBefore="+66" placeholder={t('phone')} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={20}>
                        <Col span={12}>
                            <Form.Item label={t('passport')} name="passportNumber">
                                <Input placeholder={t('passport')} />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item label={t('salary')} name="expectedSalary" rules={[{ required: true }]}>
                                <Input placeholder={t('salary')} />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Col span={3}>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">{t('send')}</Button>
                            </Form.Item>
                        </Col>
                        <Col span={3}>
                            <Form.Item>
                                <Button htmlType="button" onClick={() => { form.resetFields() }}>{t('clear')}</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <DataTable />
            </div >
        </>
    );
};

export default ManageData;

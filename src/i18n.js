import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            title: 'Personal data collection',
            prefix: 'Name title',
            firstname: 'First name',
            mr: 'Mr.',
            mrs: 'Mrs.',
            miss: 'Miss',
            lastname: 'Lastname',
            birthday: 'Birthday',
            nationality: 'Nationality',
            thai: 'Thai',
            other: 'Other',
            gender: 'Gender',
            male: 'Male',
            female: 'Female',
            citizenId: 'citizen Id',
            phone: 'Phone number',
            passport: 'Passport number',
            salary: 'Expect salary',
            select: 'Please select',
            send: 'Send',
            clear: 'Clear'
        },
    },
    th: {
        translation: {
            title: 'เก็บข้อมูลบุคคล',
            prefix: 'คำนำหน้าชื่อ',
            firstname: 'ชื่อจริง',
            mr: 'นาย',
            mrs: 'นาง',
            miss: 'นางสาว',
            lastname: 'นามสกุล',
            birthday: 'วันเกิด',
            nationality: 'สัญชาติ',
            thai: 'ไทย',
            other: 'อื่นๆ',
            gender: 'เพศ',
            male: 'ชาย',
            female: 'หญิง',
            citizenId: 'เลขบัตรประชาชน',
            phone: 'เบอร์โทรศัพท์',
            passport: 'เลขหนังสือเดินทาง',
            salary: 'เงินเดือนที่คาดหวัง',
            select: 'กรุณาเลือก',
            send: 'ส่งข้อมูล',
            clear: 'ล้างข้อมูล'
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;

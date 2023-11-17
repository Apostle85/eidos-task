import CalendarBlank from '../assets/navigation-icons/CalendarBlank.svg';
import CalendarBlankWhite from '../assets/navigation-icons/CalendarBlank white.svg';
import GraduationCap from '../assets/navigation-icons/GraduationCap.svg';
import GraduationCapWhite from '../assets/navigation-icons/GraduationCap white.svg';
import Door from '../assets/navigation-icons/Door.svg';
import DoorWhite from '../assets/navigation-icons/Door white.svg';
import Student from '../assets/navigation-icons/Student.svg';
import StudentWhite from '../assets/navigation-icons/Student white.svg';
import Archive from '../assets/navigation-icons/Archive.svg';
import ArchiveWhite from '../assets/navigation-icons/Archive white.svg';
import Setting from '../assets/navigation-icons/Setting.svg';
import SettingWhite from '../assets/navigation-icons/Setting white.svg';
import VideoCamera from '../assets/navigation-icons/VideoCamera.svg';
import VideoCameraWhite from '../assets/navigation-icons/VideoCamera white.svg';
import UserList from '../assets/navigation-icons/UserList.svg';
import UserListWhite from '../assets/navigation-icons/UserList white.svg';
export const tableHeaderTitles = [
    'Дата и время',
    'Статус',
    'Название учебного модуля',
    'Тип сессии',
    'Комната',
    'Группа',
];
export const tableContentElements = [
{
    date: '15.07.2023, 12:00 - 13:00',
    status: 'Запланировано',
    title: 'Ультразвуковое исследование органов брюшной полости и забрюшинного пространства',
    type: 'Урок',
    rooms: 'Комната 5, Комната 6, Комната 7',
    group: 'ТП-31',
},
{
    date: '15.07.2023, 13:00- 14:00',
    status: 'Запланировано',
    title: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    type: 'Аккредитация',
    rooms: 'Комната 6',
    group: '420-11КС',
},
{
    date: '14.07.2023, 12:00-13:00',
    status: 'Запланировано',
    title: 'Реанимация новорожденных',
    type: 'Урок',
    rooms: 'Комната 1, Комната 2',
    group: '240011С',
},{
    date: '05.06.2023, 13:00-14:00',
    status: 'Идет',
    title: 'Акушерство и гинекология',
    type: 'Экзамен',
    rooms: 'Комната 6',
    group: 'ТП-31',
},{
    date: '05.06.2023, 12:00-13:00',
    status: 'Завершено',
    title: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    type: 'Аккредитация',
    rooms: 'Комната 6',
    group: 'КЛ-98',
},{
    date: '05.06.2023, 11:00-12:00',
    status: 'Завершено',
    title: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
    type: 'Аккредитация',
    rooms: 'Комната 6',
    group: '410011С',
},{
    date: '04.06.2023, 12:00-13:00',
    status: 'Завершено',
    title: 'Базовые навыки в ультразвуковом иследовании',
    type: 'Урок',
    rooms: 'Комната 6',
    group: 'КЛ-98',
},
// {
//     date: '03.06.2023, 13:00-14:00',
//     status: 'Завершено',
//     title: 'Реанимация новорожденных',
//     type: 'Экзамен',
//     rooms: 'Комната 1, Комната 2, Комната 3, Комната 4',
//     group: '240-11КС',
// },
// {
//     date: '02.06.2023, 13:00-14:00',
//     status: 'Завершено',
//     title: 'Ультразвуковое абдоминальное исследование мочевого пузыря (для мужчин) и предстательной железы',
//     type: 'Аккредитация',
//     rooms: 'Комната 6',
//     group: '410011С',
// },
// {
//     date: '02.06.2023, 13:00-14:00',
//     status: 'Завершено',
//     title: 'Акушерство и гинекология',
//     type: 'Урок',
//     rooms: 'Комната 6',
//     group: '120-11КС',
// },
// {
//     date: '02.06.2023, 13:00-14:00',
//     status: 'Завершено',
//     title: 'Базовые навыки в ультразвуковом иследовании',
//     type: 'Урок',
//     rooms: 'Комната 6',
//     group: 'КЛ-98',
// },
];
export const navigationElements = [
    {
        logo: CalendarBlank,
        logoWhite: CalendarBlankWhite,
        name: 'Расписание',
    },
    {
        logo: GraduationCap,
        logoWhite: GraduationCapWhite,
        name: 'Учебные сессии',
    },
    {
        logo: Door,
        logoWhite: DoorWhite,
        name: 'Список Комнат',
    },
    {
        logo: Student,
        logoWhite: StudentWhite,
        name: 'Пользователи',
    },
    {
        logo: UserList,
        logoWhite: UserListWhite,
        name: 'Учебные группы',
    },
    {
        logo: VideoCamera,
        logoWhite: VideoCameraWhite,
        name: 'Список устройств',
    },
    {
        logo: Setting,
        logoWhite: SettingWhite,
        name: 'Настройки системы',
    },
    {
        logo: Archive,
        logoWhite: ArchiveWhite,
        name: 'Архив',
    },
];
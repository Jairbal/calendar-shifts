'use client';

import { Calendar, dayjsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import dayjs from 'dayjs'
import { useEffect } from 'react';
import { useUserService } from '../_services';
import { Spinner } from '../_components';

const localizer = dayjsLocalizer(dayjs)

//array de eventos
const myEventsList = [{
    title: "today",
    start: new Date('2024-05-05 10:22:00'),
    end: new Date('2024-05-05 10:42:00')
},
{
    title: "string",
    start: new Date('2024-05-05 12:22:00'),
    end: new Date('2024-05-05 13:42:00')
}]


export default Home;

function Home() {
    const userService = useUserService();
    const user = userService.currentUser;

    useEffect(() => {
        userService.getCurrent();
    }, []);

    if (user) {
        return (
            <>
                <div className='text-white-50'>
                    <h1>Hola {user.firstName}!</h1>
                </div>
                <div className='h-[400px]'>
                    <Calendar
                        localizer={localizer}
                        events={myEventsList}
                        startAccessor="start"
                        endAccessor="end"
                    />
                </div>
            </>
        );
    } else {
        return <Spinner />;
    }
}

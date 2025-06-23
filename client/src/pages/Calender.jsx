import React, { useState, useEffect, useReducer } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { EventReducer } from '../reducers/EventReducer.jsx';
import toast from 'react-hot-toast';
import axios from 'axios';

import AddEventModal from '../components/AddEventModal.jsx';

const localizer = momentLocalizer(moment);

const CalendarPage = () => {

    const initialState = [];
    const todayFormatted = moment(new Date()).format('D MMMM YYYY');

    const [Events, dispatch] = useReducer(EventReducer, initialState);
    const [EventInput, setEventInput] = useState(null)
    const [AddEvent, setAddEvent] = useState(false)
    const [view, setView] = useState('week');
    const [date, setDate] = useState(new Date());

    const handleEventInputChange = (e) => {
        const { name, value } = e.target;
        setEventInput((prev) => ({ ...prev, [name]: value }));
    }

    const addTask = async (e) => {
        try {
            e.preventDefault();

            if (!EventInput.task || !EventInput.date) {
                alert('Please fill in all fields');
                return;
            }

            const newEvent = {
                title: EventInput.task,
                start: new Date(EventInput.date),
                end: new Date(new Date(EventInput.date).getTime() + 60 * 60 * 1000), // Default duration of 1 hour
            };

            dispatch({ type: "ADD_EVENT", event: newEvent });

            const response = await axios.post(`${import.meta.env.VITE_API_URL}/event`, newEvent, {
                withCredentials: true,
            });

            setEventInput(null);
            setAddEvent(false);

            toast.success('Event added successfully!');
        } catch (error) {
            console.error('Error adding event:', error);
            toast.error('Failed to add event. Please try again.');
        }
    }

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/event`, {
                    withCredentials: true,
                });
                if (response.data.success) {
                    const parsedEvents = response.data.events.map((event) => ({
                        ...event,
                        start: new Date(event.start),
                        end: new Date(event.end),
                    }));

                    dispatch({ type: "SET_EVENTS", events: parsedEvents });
                } else {
                    toast.error('Failed to fetch events.');
                }
            } catch (error) {
                console.error('Error fetching events:', error);
                toast.error('Failed to fetch events. Please try again.');
            }
        }

        fetchEvents();
    }, []);

    return (
        <>
            <div>
                <div className='flex justify-between items-center py-2'>
                    <h2 className="calendar-title">{todayFormatted}</h2>
                    <button onClick={() => setAddEvent(true)} className="add-event-button bg-btn w-32 py-2 rounded-lg hover:bg-btn/80 cursor-pointer transition-all duration-300'">Add Event</button>
                </div>

                <div className="custom-calendar-wrapper border border-black rounded-4xl">
                    <Calendar
                        localizer={localizer}
                        events={Events || []}
                        startAccessor="start"
                        endAccessor="end"
                        view={view}
                        onView={setView}
                        date={date}
                        onNavigate={(newDate) => setDate(newDate)}
                        style={{ height: 583, margin: '20px 0' }}
                        className='custom-calendar-wrapper'
                        eventPropGetter={(event) => {
                            const isRed = event.title.includes('Database') && event.start.getHours() >= 14;
                            return {
                                className: isRed ? 'red-event' : '',
                            };
                        }}
                    />
                </div>
            </div>

            {AddEvent && (
                <AddEventModal handleEventInputChange={handleEventInputChange} addTask={addTask} setAddEvent={setAddEvent} />
            )}
        </>
    );
};

export default CalendarPage;

import React, { useContext, useState, useEffect } from 'react';
import ClockContext from './context/clockContext';
import GlobalStyle from './components/styled/GlobalStyles.styled';
import Spinner from './components/UI/Spinner.component';
import RootContent from './components/UI/RootContent.component';
import Quote from './components/Quote.component';
import AppError from './components/AppError.component';

const App = () => {
    const { fetchPositionAndTimeData, isLoading, error } =
        useContext(ClockContext);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        fetchPositionAndTimeData();
    }, [fetchPositionAndTimeData]);

    useEffect(() => {
        const refreshClock = () => {
            setTime(new Date());
        };

        const timerId = setInterval(refreshClock, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, []);

    let isSun = false;
    let isMoon = false;
    let isMorning = false;
    let isAfternoon = false;
    let isEvening = false;

    // Integer between 0 and 23
    // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
    const currentHours = time.getHours();
    isMorning = currentHours < 12 && currentHours >= 5;
    isAfternoon = currentHours >= 12 && currentHours < 18;
    isEvening = currentHours >= 18 || currentHours < 5;
    isSun = currentHours >= 5 && currentHours < 18;
    isMoon = currentHours >= 18 || currentHours < 5;

    let content;

    if (isLoading) {
        content = <Spinner size={75} borderWidth={10} />;
    } else if (error) {
        content = <AppError message={error} />;
    } else {
        content = (
            <>
                <Quote />
                <span className="time">{time.toLocaleTimeString()}</span>
            </>
        );
    }

    // TODO
    // Style the paddings of the App
    // Style AppError component

    return (
        <>
            <GlobalStyle />
            <RootContent isSun={isSun} isMoon={isMoon}>
                <h1 className="visually-hidden">Clock App</h1>
                {content}
            </RootContent>
        </>
    );
};

export default App;

// Local State
// isExpanded, setIsExpanded

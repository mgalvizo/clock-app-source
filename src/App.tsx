import React, { useContext, useState, useEffect } from 'react';
import ClockContext from './context/clockContext';
import GlobalStyle from './components/styled/GlobalStyles.styled';
import RootContent from './components/UI/RootContent.component';

const App = () => {
    const { fetchPositionAndTimeData } = useContext(ClockContext);
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

    console.log('isSun', isSun);
    console.log('isMoon', isMoon);

    return (
        <>
            <GlobalStyle />
            <RootContent isSun={isSun} isMoon={isMoon}>
                <span className="time">{time.toLocaleTimeString()}</span>
            </RootContent>
        </>
    );
};

export default App;

// Local State
// isExpanded, setIsExpanded

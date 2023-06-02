import React, { ReactNode, useContext } from 'react';
import StyledClock from './styled/Clock.styled';
import ClockContext from '../context/clockContext';
import { ReactComponent as SunIcon } from '../assets/desktop/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../assets/desktop/icon-moon.svg';

interface ClockProps {
    children?: ReactNode;
}

const Clock = () => {
    const { time, isSun, isMoon, isMorning, isAfternoon, isEvening } =
        useContext(ClockContext);

    console.log(time);

    const hours = ('0' + time.getHours()).slice(-2);
    const minutes = ('0' + time.getMinutes()).slice(-2);

    return (
        <StyledClock>
            <div className="greeting">
                <p>
                    {isSun ? <SunIcon /> : <MoonIcon />} Good{' '}
                    {isMorning
                        ? 'morning'
                        : isAfternoon
                        ? 'afternoon'
                        : isEvening
                        ? 'evening'
                        : ''}{' '}
                    , it's currently
                </p>
            </div>
            <div className="time">
                <span className="time__hours">{hours}</span>
                <span className="time__colon">:</span>
                <span className="time__minutes">{minutes}</span>
                <span className="time__timezone">{}</span>
            </div>
        </StyledClock>
    );
};

export default Clock;

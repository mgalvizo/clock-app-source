import React, { ReactNode, useContext } from 'react';
import StyledClock from './styled/Clock.styled';
import ClockContext from '../context/clockContext';
import { ReactComponent as SunIcon } from '../assets/desktop/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../assets/desktop/icon-moon.svg';
import { ReactComponent as ArrowDownIcon } from '../assets/desktop/icon-arrow-down.svg';

interface ClockProps {
    children?: ReactNode;
}

const Clock = () => {
    const {
        time,
        isSun,
        isMoon,
        isMorning,
        isAfternoon,
        isEvening,
        clockData,
        toggleInfo,
        isExpanded,
    } = useContext(ClockContext);

    const hours = ('0' + time.getHours()).slice(-2);
    const minutes = ('0' + time.getMinutes()).slice(-2);

    const { abbreviation, city, prov } = clockData;

    console.log(isExpanded);

    return (
        <StyledClock>
            <div className="clock">
                <p className="clock__greeting">
                    <span className="clock__greeting__icon">
                        {isSun && <SunIcon />}
                        {isMoon && <MoonIcon />}
                    </span>
                    <span className="clock__greeting__text">
                        Good{' '}
                        {isMorning
                            ? 'morning'
                            : isAfternoon
                            ? 'afternoon'
                            : isEvening
                            ? 'evening'
                            : ''}
                        <span>, it's currently</span>
                    </span>
                </p>
                <p className="clock__time">
                    <span className="time__hours">{hours}</span>
                    <span className="time__colon">:</span>
                    <span className="time__minutes">{minutes}</span>
                    <span className="time__timezone">{abbreviation}</span>
                </p>
                <p className="clock__location">
                    In <span className="clock__location__city">{city}</span>,{' '}
                    <span className="clock__location__country">{prov}</span>
                </p>
            </div>
            <button type="button" onClick={toggleInfo}>
                {isExpanded ? 'Less' : 'More'}
                <span className={`arrow ${isExpanded ? 'expanded' : ''}`}>
                    <ArrowDownIcon />
                </span>
            </button>
        </StyledClock>
    );
};

export default Clock;

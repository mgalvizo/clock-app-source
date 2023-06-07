import React, { ReactNode, useContext, useEffect } from 'react';
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
        scrollToSection,
        isExpanded,
    } = useContext(ClockContext);

    useEffect(() => {
        const sectionToGo = document.querySelector('.features')!;

        scrollToSection(sectionToGo);
    }, [scrollToSection]);

    const hours = ('0' + time.getHours()).slice(-2);
    const minutes = ('0' + time.getMinutes()).slice(-2);

    const { abbreviation, city, country } = clockData;

    // This code is for implementation with geocode.xyz and navigator.geolocation
    // let locationContent;
    // if (
    //     city === 'Throttled! See geocode.xyz/pricing' ||
    //     country === 'Throttled! See geocode.xyz/pricing'
    // ) {
    //     locationContent = 'Please try again later.';
    // } else {
    //     locationContent = (
    //         <>
    //             In <span className="clock__location__city">{city}</span>,{' '}
    //             <span className="clock__location__country">{country}</span>
    //         </>
    //     );
    // }

    return (
        <StyledClock className="clock">
            <div className="component">
                <div className="component__content">
                    <div className="clock__container">
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
                            <span>
                                <span className="clock__time__hours">
                                    {hours}
                                </span>
                                <span className="clock__time__colon">:</span>
                                <span className="clock__time__minutes">
                                    {minutes}
                                </span>
                            </span>
                            <span className="clock__time__timezone">
                                {abbreviation}
                            </span>
                        </p>
                        <p className="clock__location">
                            {/* {locationContent} */}
                            In{' '}
                            <span className="clock__location__city">
                                {city}
                            </span>
                            ,{' '}
                            <span className="clock__location__country">
                                {country}
                            </span>
                        </p>
                    </div>
                    <div className="button__container">
                        <button type="button" onClick={toggleInfo}>
                            <div>
                                <span className="button__text">
                                    {isExpanded ? 'Less' : 'More'}
                                </span>
                                <span
                                    className={`button__arrow ${
                                        isExpanded ? 'expanded' : ''
                                    }`}
                                >
                                    <ArrowDownIcon />
                                </span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </StyledClock>
    );
};

export default Clock;

import React, { useContext, useEffect } from 'react';
import {
    StyledClock,
    StyledClockContent,
    StyledClockContainer,
    StyledClockGreeting,
    StyledClockGreetingIcon,
    StyledClockGreetingText,
    StyledClockTime,
    StyledClockTimeHours,
    StyledClockTimeColon,
    StyledClockTimeMinutes,
    StyledClockTimeTimezone,
    StyledClockLocation,
    StyledClockLocationCity,
    StyledClockLocationCountry,
    StyledClockButtonContainer,
    StyledClockButtonText,
    StyledClockButtonArrow,
} from './styled/Clock.styled';
import ClockContext from '../context/clockContext';
import { ReactComponent as SunIcon } from '../assets/desktop/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../assets/desktop/icon-moon.svg';
import { ReactComponent as ArrowDownIcon } from '../assets/desktop/icon-arrow-down.svg';
import { Component } from './styled/Component.styled';

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
        <StyledClock id="clock">
            <Component>
                <StyledClockContent>
                    <StyledClockContainer>
                        <StyledClockGreeting>
                            <StyledClockGreetingIcon>
                                {isSun && <SunIcon />}
                                {isMoon && <MoonIcon />}
                            </StyledClockGreetingIcon>
                            <StyledClockGreetingText>
                                Good{' '}
                                {isMorning
                                    ? 'morning'
                                    : isAfternoon
                                    ? 'afternoon'
                                    : isEvening
                                    ? 'evening'
                                    : ''}
                                <span>, it's currently</span>
                            </StyledClockGreetingText>
                        </StyledClockGreeting>
                        <StyledClockTime>
                            <span>
                                <StyledClockTimeHours>
                                    {hours}
                                </StyledClockTimeHours>
                                <StyledClockTimeColon>:</StyledClockTimeColon>
                                <StyledClockTimeMinutes>
                                    {minutes}
                                </StyledClockTimeMinutes>
                            </span>
                            <StyledClockTimeTimezone>
                                {abbreviation}
                            </StyledClockTimeTimezone>
                        </StyledClockTime>
                        <StyledClockLocation>
                            {/* {locationContent} */}
                            In{' '}
                            <StyledClockLocationCity>
                                {city}
                            </StyledClockLocationCity>
                            ,{' '}
                            <StyledClockLocationCountry>
                                {country}
                            </StyledClockLocationCountry>
                        </StyledClockLocation>
                    </StyledClockContainer>
                    <StyledClockButtonContainer>
                        <button type="button" onClick={toggleInfo}>
                            <div>
                                <StyledClockButtonText>
                                    {isExpanded ? 'Less' : 'More'}
                                </StyledClockButtonText>
                                <StyledClockButtonArrow
                                    className={isExpanded ? 'expanded' : ''}
                                >
                                    <ArrowDownIcon />
                                </StyledClockButtonArrow>
                            </div>
                        </button>
                    </StyledClockButtonContainer>
                </StyledClockContent>
            </Component>
        </StyledClock>
    );
};

export default Clock;

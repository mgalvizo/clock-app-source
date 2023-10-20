import styled from 'styled-components';
import { ComponentContent } from './Component.styled';

const StyledClockButtonArrow = styled.span`
    width: var(--circle-size-sm);
    height: var(--circle-size-sm);
    border-radius: var(--circle-border-radius);
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--very-dark-gray);
    transition: background 0.25s ease-in-out;

    svg {
        transition: transform 0.25s ease-in-out;
    }

    &.expanded {
        svg {
            transform: rotate(-180deg);
        }
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        width: var(--circle-size-md);
        height: var(--circle-size-md);
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        width: var(--circle-size-lg);
        height: var(--circle-size-lg);
    }
`;

const StyledClock = styled.div`
    width: inherit;
    margin-top: auto;
    padding-bottom: var(--website-margin-xlg2);

    button {
        font-size: var(--button-text-font-size-sm);
        letter-spacing: var(--button-letter-spacing);
        line-height: var(--button-text-line-height);
        border-radius: var(--button-border-radius);
        background-color: var(--white);
        text-transform: uppercase;
        color: var(--black);
        cursor: pointer;
        width: var(--button-width-sm);
        padding: var(--website-padding-xsm) var(--website-padding-xsm)
            var(--website-padding-xsm) var(--website-padding-md);

        &:hover {
            ${StyledClockButtonArrow} {
                background-color: var(--light-gray);
            }
        }

        div {
            display: flex;
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
        }
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        padding-bottom: calc(
            var(--website-margin-xlg2) + var(--website-margin-lg)
        );

        button {
            font-size: var(--button-text-font-size-md);
            width: var(--button-width-md);
            padding: var(--website-padding-sm) var(--website-padding-sm)
                var(--website-padding-sm) var(--website-padding-lg);
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        padding-bottom: calc(
            var(--website-margin-xlg2) * 2 + var(--website-margin-md)
        );

        button {
            font-size: var(--button-text-font-size-lg);
            width: var(--button-width-lg);
        }
    }
`;

const StyledClockContent = styled(ComponentContent)`
    display: flex;
    flex-flow: column wrap;
    gap: calc(var(--website-margin-sm) + var(--website-margin-xlg2));

    // 620px
    @media only screen and (min-width: 38.75em) {
        gap: calc(var(--website-margin-xlg2) * 2);
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        flex-direction: row;
        gap: 0;
        justify-content: space-between;
    }
`;

const StyledClockContainer = styled.div``;

const StyledClockGreeting = styled.p`
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    align-items: center;
    gap: var(--website-margin-md);
    margin-bottom: var(--website-margin-md);
`;

const StyledClockGreetingIcon = styled.span``;

const StyledClockGreetingText = styled.span`
    font-size: var(--greeting-font-size-sm);
    letter-spacing: var(--greeting-letter-spacing-sm);
    line-height: var(--greeting-line-height);
    text-transform: uppercase;

    span {
        display: none;
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        font-size: var(--greeting-font-size-md);
        letter-spacing: var(--greeting-letter-spacing-md);

        span {
            display: inline;
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        font-size: var(--greeting-font-size-lg);
        letter-spacing: var(--greeting-letter-spacing-lg);
    }
`;

const StyledClockTime = styled.p`
    display: flex;
    flex-flow: row wrap;
    justify-content: start;
    align-items: baseline;
    gap: var(--website-padding-sm);
    font-size: var(--time-font-size-sm);
    line-height: var(--time-line-height);
    letter-spacing: var(--time-letter-spacing);
    font-weight: bold;
    margin-bottom: var(--website-margin-md);

    // 620px
    @media only screen and (min-width: 38.75em) {
        gap: calc(var(--website-padding-xsm) + var(--website-padding-sm));
        font-size: var(--time-font-size-md);
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        font-size: var(--time-font-size-lg);
    }
`;

const StyledClockTimeHours = styled.span``;

const StyledClockTimeColon = styled.span`
    animation-name: tick;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
`;

const StyledClockTimeMinutes = styled.span``;

const StyledClockTimeTimezone = styled.span`
    font-size: var(--time-zone-font-size-sm);
    font-weight: normal;
    letter-spacing: initial;

    // 620px
    @media only screen and (min-width: 38.75em) {
        font-size: var(--time-zone-font-size-md);
        font-weight: normal;
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        font-size: var(--time-zone-font-size-lg);
        font-weight: normal;
    }
`;

const StyledClockLocation = styled.p`
    text-transform: uppercase;
    font-weight: bold;
    font-size: var(--location-font-size-sm);
    line-height: var(--location-line-height);
    letter-spacing: var(--location-letter-spacing-sm);

    // 620px
    @media only screen and (min-width: 38.75em) {
        font-size: var(--location-font-size-md);
        letter-spacing: var(--location-letter-spacing-md);
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        font-size: var(--location-font-size-lg);
        letter-spacing: var(--location-letter-spacing-lg);
    }
`;

const StyledClockLocationCity = styled.span``;

const StyledClockLocationCountry = styled.span``;

const StyledClockButtonContainer = styled.div`
    // 1024px
    @media only screen and (min-width: 64em) {
        display: flex;
        flex-flow: column wrap;
        justify-content: end;
    }
`;

const StyledClockButtonText = styled.span`
    opacity: 0.5;
`;

export {
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
};

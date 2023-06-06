import styled from 'styled-components';

const StyledClock = styled.div`
    width: inherit;
    margin-top: auto;
    padding-top: var(--website-margin-xlg2);
    padding-bottom: var(--website-margin-xlg2);

    .component__content {
        display: flex;
        flex-flow: column wrap;
        gap: calc(var(--website-margin-sm) + var(--website-margin-xlg2));
    }

    .clock__greeting {
        display: flex;
        flex-flow: row wrap;
        justify-content: start;
        align-items: center;
        gap: var(--website-margin-md);
        margin-bottom: var(--website-margin-md);
    }

    .clock__greeting__text {
        font-size: var(--greeting-font-size-sm);
        letter-spacing: var(--greeting-letter-spacing-sm);
        line-height: var(--greeting-line-height);
        text-transform: uppercase;

        span {
            display: none;
        }
    }

    .clock__time {
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
    }

    .clock__time__colon {
        animation-name: tick;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out;
    }

    .clock__time__timezone {
        font-size: var(--time-zone-font-size-sm);
        font-weight: normal;
        letter-spacing: initial;
    }

    .clock__location {
        text-transform: uppercase;
        font-weight: bold;
        font-size: var(--location-font-size-sm);
        line-height: var(--location-line-height);
        letter-spacing: var(--location-letter-spacing-sm);
    }

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
            .button__arrow {
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

    .button__text {
        opacity: 0.5;
    }

    .button__arrow {
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
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        padding-top: calc(
            var(--website-margin-xlg2) + var(--website-margin-lg)
        );
        padding-bottom: calc(
            var(--website-margin-xlg2) + var(--website-margin-lg)
        );

        .component__content {
            gap: calc(var(--website-margin-xlg2) * 2);
        }

        .clock__greeting__text {
            font-size: var(--greeting-font-size-md);
            letter-spacing: var(--greeting-letter-spacing-md);

            span {
                display: inline;
            }
        }

        .clock__time {
            gap: calc(var(--website-padding-xsm) + var(--website-padding-sm));
            font-size: var(--time-font-size-md);
        }

        .clock__time__timezone {
            font-size: var(--time-zone-font-size-md);
            font-weight: normal;
        }

        .clock__location {
            font-size: var(--location-font-size-md);
            letter-spacing: var(--location-letter-spacing-md);
        }

        button {
            font-size: var(--button-text-font-size-md);
            width: var(--button-width-md);
            padding: var(--website-padding-sm) var(--website-padding-sm)
                var(--website-padding-sm) var(--website-padding-lg);
        }

        .button__arrow {
            width: var(--circle-size-md);
            height: var(--circle-size-md);
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        padding-top: calc(
            var(--website-margin-xlg2) * 2 + var(--website-margin-md)
        );
        padding-bottom: calc(
            var(--website-margin-xlg2) * 2 + var(--website-margin-md)
        );

        .component__content {
            flex-direction: row;
            gap: 0;
            justify-content: space-between;
        }

        .clock__greeting__text {
            font-size: var(--greeting-font-size-lg);
            letter-spacing: var(--greeting-letter-spacing-lg);
        }

        .clock__time {
            font-size: var(--time-font-size-lg);
        }

        .clock__time__timezone {
            font-size: var(--time-zone-font-size-lg);
            font-weight: normal;
        }

        .clock__location {
            font-size: var(--location-font-size-lg);
            letter-spacing: var(--location-letter-spacing-lg);
        }

        .button__container {
            display: flex;
            flex-flow: column wrap;
            justify-content: end;
        }

        button {
            font-size: var(--button-text-font-size-lg);
            width: var(--button-width-lg);
        }

        .button__arrow {
            width: var(--circle-size-lg);
            height: var(--circle-size-lg);
        }
    }
`;

export default StyledClock;

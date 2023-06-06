import styled, { css } from 'styled-components';

interface StyledFeaturesProps {
    isSun: boolean;
    isMoon: boolean;
}

const StyledFeatures = styled.div<StyledFeaturesProps>`
    width: inherit;
    backdrop-filter: blur(20px);
    transform: translateY(100%);

    .component {
        padding-top: calc(
            var(--website-padding-sm) + var(--website-padding-xlg2)
        );
        padding-bottom: calc(
            var(--website-padding-sm) + var(--website-padding-xlg2)
        );
    }

    ul {
        list-style-type: none;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(4, 1fr);
        row-gap: var(--website-margin-md);
    }

    &.slide-in-enter {
        transform: translateY(100%);
    }

    &.slide-in-enter-active {
        transform: translateY(0);
        transition-property: transform;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
    }

    &.slide-in-enter-done {
        transform: translateY(0);
    }

    &.slide-in-exit {
        transform: translateY(0);
    }

    &.slide-in-exit-active {
        transform: translateY(100%);
        transition-property: transform;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
    }

    &.slide-in-exit-done {
        transform: translateY(100%);
    }

    ${({ isSun }) =>
        isSun &&
        css`
            background-image: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.75) 0%,
                rgba(255, 255, 255, 0.75) 100%
            );
            color: var(--very-dark-gray);
        `}

    ${({ isMoon }) =>
        isMoon &&
        css`
            background-image: linear-gradient(
                90deg,
                rgba(0, 0, 0, 0.75) 0%,
                rgba(0, 0, 0, 0.75) 100%
            );
            color: var(--white);
        `}

    // 620px
    @media only screen and (min-width: 38.75em) {
        .component {
            padding-top: calc(var(--website-padding-xlg2) * 3);
            padding-bottom: calc(var(--website-padding-xlg2) * 3);
        }

        ul {
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: repeat(2, 1fr);
            grid-template-areas:
                'timezone day_of_week'
                'day_of_year week_number';
            row-gap: calc(
                var(--website-margin-sm) + var(--website-margin-xlg2)
            );
            column-gap: calc(var(--website-margin-xlg2) * 2);
        }
    }

    // 768px
    @media only screen and (min-width: 48em) {
        ul {
            grid-template-columns: 400px 1fr;
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        .component {
            padding-top: calc(
                var(--website-padding-xlg) + var(--website-margin-xlg2) +
                    var(--website-padding-lg)
            );
            padding-bottom: calc(
                var(--website-padding-xlg) + var(--website-margin-xlg2) +
                    var(--website-padding-lg)
            );
        }

        ul {
            position: relative;
            grid-template-columns: 570px 1fr;
            row-gap: calc(
                var(--website-margin-sm) + var(--website-margin-xlg2)
            );
            column-gap: calc(
                var(--website-margin-md) + var(--website-margin-xlg2) * 2
            );

            &::after {
                content: '';
                width: 1px;
                height: 100%;
                position: absolute;
                top: 0;
                left: 570px;
                right: 0;
                opacity: 0.25;
            }
        }

        ${({ isSun }) =>
            isSun &&
            css`
                ul::after {
                    background-color: var(--very-dark-gray);
                }
            `}

        ${({ isMoon }) =>
            isMoon &&
            css`
                ul::after {
                    background-color: var(--white);
                }
            `}
    }
`;

export default StyledFeatures;

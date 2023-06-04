import styled, { css } from 'styled-components';

interface StyledFeaturesProps {
    isSun: boolean;
    isMoon: boolean;
}

const StyledFeatures = styled.div<StyledFeaturesProps>`
    width: inherit;
    backdrop-filter: blur(20px);

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

    // 1024px
    @media only screen and (min-width: 64em) {
        .component {
            padding-top: calc(
                var(--website-padding-xlg) + var(--website-margin-xlg2)
            );
            padding-bottom: calc(
                var(--website-padding-xlg) + var(--website-margin-xlg2)
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

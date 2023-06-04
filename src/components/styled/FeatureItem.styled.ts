import styled from 'styled-components';

const StyledFeatureItem = styled.li`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

    span {
        display: block;
    }

    .feature {
        font-size: var(--feature-title-font-size-sm);
        letter-spacing: var(--feature-title-letter-spacing-sm);
        line-height: var(--feature-title-line-height);
        text-transform: uppercase;
    }

    .description {
        font-size: var(--feature-description-font-size-sm);
        line-height: var(--feature-description-line-height);
        font-weight: bold;
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: var(--website-margin-sm);

        &.timezone {
            grid-area: timezone;
        }

        &.day_of_week {
            grid-area: day_of_week;
        }

        &.day_of_year {
            grid-area: day_of_year;
        }

        &.week_number {
            grid-area: week_number;
        }
    }

    // 768px
    @media only screen and (min-width: 48em) {
        .feature {
            font-size: var(--feature-title-font-size-md);
        }

        .description {
            font-size: var(--feature-description-font-size-md);
        }

        &.timezone {
            overflow-wrap: break-word;
            word-break: break-all;
            hyphens: auto;
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        .feature {
            font-size: var(--feature-title-font-size-lg);
        }

        .description {
            font-size: var(--feature-description-font-size-lg);
        }
    }
`;

export default StyledFeatureItem;

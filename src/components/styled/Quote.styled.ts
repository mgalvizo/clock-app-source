import styled from 'styled-components';

const StyledQuote = styled.div`
    .quote {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: 1fr auto;
        justify-content: start;
        align-items: start;
        gap: var(--website-margin-md);
        animation-name: fadeIn;
        animation-duration: 0.25s;
        animation-timing-function: ease-in-out;
    }

    .quote__content {
        margin-bottom: var(--website-margin-sm);
    }

    .quote__author {
        font-weight: bold;
    }

    svg {
        fill: var(--white);
        opacity: 0.5;
        transition: opacity 0.25s ease-in-out;
    }

    button {
        background-color: transparent;
        cursor: pointer;

        &:hover {
            svg {
                opacity: 1;
            }
        }
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
    }

    // 1024px
    @media only screen and (min-width: 64em) {
    }
`;

export default StyledQuote;

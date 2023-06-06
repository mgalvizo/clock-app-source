import styled from 'styled-components';

const StyledQuote = styled.div`
    width: inherit;
    min-height: 200px;

    .component__content {
        display: grid;
        grid-template-rows: auto;
        grid-template-columns: auto auto;
        justify-content: start;
        align-items: start;
        gap: var(--website-margin-md);
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

    &.fade-in-enter {
        opacity: 0;
    }

    &.fade-in-enter-active {
        opacity: 1;
        transition-property: opacity;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
    }

    &.fade-in-enter-done {
        opacity: 1;
    }

    &.fade-in-exit {
        opacity: 1;
    }

    &.fade-in-exit-active {
        opacity: 0;
        transition-property: opacity, max-height;
        transition-duration: 0.25s;
        transition-timing-function: ease-in-out;
    }

    &.fade-in-exit-done {
        opacity: 0;
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
    }

    // 768px
    @media only screen and (min-width: 48em) {
        min-height: 180px;
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        min-height: 150px;
    }

    // 1232px
    @media only screen and (min-width: 77em) {
        min-height: 125px;
    }
`;

export default StyledQuote;

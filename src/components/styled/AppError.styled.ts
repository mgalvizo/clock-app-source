import styled from 'styled-components';

const StyledEAppError = styled.div`
    width: inherit;
    text-transform: uppercase;
    text-align: center;
    margin: auto;

    h2 {
        font-size: var(--error-message-font-size-sm);
        letter-spacing: var(--error-message-letter-spacing-sm);
        line-height: var(--error-message-line-height);
    }

    // 620px
    @media only screen and (min-width: 38.75em) {
        h2 {
            font-size: var(--error-message-font-size-md);
            letter-spacing: var(--error-message-letter-spacing-md);
        }
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        h2 {
            font-size: var(--error-message-font-size-lg);
            letter-spacing: var(--error-message-letter-spacing-lg);
        }
    }
`;

export default StyledEAppError;

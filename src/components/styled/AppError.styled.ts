import styled from 'styled-components';

const StyledEAppError = styled.div`
    text-transform: uppercase;
    text-align: center;

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

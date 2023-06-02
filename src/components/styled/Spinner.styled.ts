import styled, { css } from 'styled-components';
import { SpinnerProps } from '../UI/Spinner.component';

const StyledSpinner = styled.div<SpinnerProps>`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    ${({ size, borderWidth }) =>
        size &&
        borderWidth &&
        css`
            width: ${size}px;
            height: ${size}px;
            margin: 0 auto;
            border-color: var(--spinner);
            border-top-color: transparent;
            border-width: ${borderWidth}px;
            border-style: solid;
            border-radius: 50%;
            animation: 1s spin infinite linear;
        `}
`;

export default StyledSpinner;

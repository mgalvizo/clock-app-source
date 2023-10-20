import React, { ReactNode } from 'react';
import { StyledSpinner, StyledSpinnerContent } from '../styled/Spinner.styled';

export interface SpinnerProps {
    children?: ReactNode;
    size: number;
    borderWidth: number;
}

const Spinner = ({ size, borderWidth }: SpinnerProps) => {
    return (
        <StyledSpinner size={size} borderWidth={borderWidth}>
            <StyledSpinnerContent></StyledSpinnerContent>
        </StyledSpinner>
    );
};

export default Spinner;

import React, { ReactNode } from 'react';
import StyledSpinner from '../styled/Spinner.styled';

export interface SpinnerProps {
    children?: ReactNode;
    size: number;
    borderWidth: number;
}

const Spinner = ({ size, borderWidth }: SpinnerProps) => {
    return (
        <StyledSpinner size={size} borderWidth={borderWidth}>
            <div className="spinner"></div>
        </StyledSpinner>
    );
};

export default Spinner;

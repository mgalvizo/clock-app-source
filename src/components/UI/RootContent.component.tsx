import React, { ReactNode } from 'react';
import StyledRootContent from '../styled/RootContent.styled';

export interface RootContentProps {
    children?: ReactNode;
    isSun: boolean;
    isMoon: boolean;
}

const RootContent = ({ children, isSun, isMoon }: RootContentProps) => {
    return (
        <StyledRootContent isSun={isSun} isMoon={isMoon}>
            {children}
        </StyledRootContent>
    );
};

export default RootContent;

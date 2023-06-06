import React, { ReactNode, useContext } from 'react';
import StyledRootContent from '../styled/RootContent.styled';
import ClockContext from '../../context/clockContext';

export interface RootContentProps {
    children?: ReactNode;
}

const RootContent = ({ children }: RootContentProps) => {
    const { isSun, isMoon, isExpanded } = useContext(ClockContext);

    return (
        <StyledRootContent
            isSun={isSun}
            isMoon={isMoon}
            isExpanded={isExpanded}
        >
            {children}
        </StyledRootContent>
    );
};

export default RootContent;

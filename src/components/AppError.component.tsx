import React, { ReactNode } from 'react';
import StyledEAppError from './styled/AppError.styled';

interface AppErrorProps {
    children?: ReactNode;
    message: string;
}

const AppError = ({ message }: AppErrorProps) => {
    return (
        <StyledEAppError>
            <h2>&#9888; {message} &#9785;</h2>
        </StyledEAppError>
    );
};

export default AppError;

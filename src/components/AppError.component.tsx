import React, { ReactNode } from 'react';
import StyledEAppError from './styled/AppError.styled';

interface AppErrorProps {
    children?: ReactNode;
    message: string;
}

const AppError = ({ message }: AppErrorProps) => {
    return (
        <StyledEAppError>
            <div className="component">
                <div className="component__content">
                    <h2>&#9888; {message} &#9785;</h2>
                </div>
            </div>
        </StyledEAppError>
    );
};

export default AppError;

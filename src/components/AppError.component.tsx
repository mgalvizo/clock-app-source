import React, { ReactNode } from 'react';
import StyledEAppError from './styled/AppError.styled';
import { Component, ComponentContent } from './styled/Component.styled';

interface AppErrorProps {
    children?: ReactNode;
    message: string;
}

const AppError = ({ message }: AppErrorProps) => {
    return (
        <StyledEAppError>
            <Component>
                <ComponentContent>
                    <h2>&#9888; {message} &#9785;</h2>
                </ComponentContent>
            </Component>
        </StyledEAppError>
    );
};

export default AppError;

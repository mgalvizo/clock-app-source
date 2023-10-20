import React, { useContext, useEffect } from 'react';
import ClockContext from './context/clockContext';
import GlobalStyle from './components/styled/GlobalStyles.styled';
import Spinner from './components/UI/Spinner.component';
import RootContent from './components/UI/RootContent.component';
import Quote from './components/Quote.component';
import Clock from './components/Clock.component';
import Features from './components/Features.component';
import AppError from './components/AppError.component';
import { VisuallyHidden } from './components/styled/Component.styled';
import { StyledRootMainContent } from './components/styled/RootContent.styled';

const App = () => {
    const { fetchPositionAndTimeData, isLoading, error, refreshClock } =
        useContext(ClockContext);

    useEffect(() => {
        fetchPositionAndTimeData();
    }, [fetchPositionAndTimeData]);

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);

        return () => {
            clearInterval(timerId);
        };
    }, [refreshClock]);

    let content;

    if (isLoading) {
        content = <Spinner size={75} borderWidth={10} />;
    } else if (error) {
        content = <AppError message={error} />;
    } else {
        content = (
            <StyledRootMainContent>
                <Quote />
                <Clock />
                <Features />
            </StyledRootMainContent>
        );
    }

    return (
        <>
            <GlobalStyle />
            <RootContent>
                <h1>
                    <VisuallyHidden>Clock App</VisuallyHidden>
                </h1>
                {content}
            </RootContent>
        </>
    );
};

export default App;

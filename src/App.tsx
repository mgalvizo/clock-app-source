import React, { useContext, useEffect } from 'react';
import ClockContext from './context/clockContext';
import GlobalStyle from './components/styled/GlobalStyles.styled';
import Spinner from './components/UI/Spinner.component';
import RootContent from './components/UI/RootContent.component';
import Quote from './components/Quote.component';
import Clock from './components/Clock.component';
import AppError from './components/AppError.component';

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
        content = (
            <div className="component">
                <div className="component__content">
                    <Spinner size={75} borderWidth={10} />
                </div>
            </div>
        );
    } else if (error) {
        content = (
            <div className="component">
                <div className="component__content">
                    <AppError message={error} />
                </div>
            </div>
        );
    } else {
        content = (
            <>
                <div className="component">
                    <div className="component__content">
                        <Quote />
                    </div>
                </div>
                <div className="component">
                    <div className="component__content">
                        <Clock />
                    </div>
                </div>
            </>
        );
    }

    // TODO
    // Implement Clock component
    // Style clock component

    return (
        <>
            <GlobalStyle />
            <RootContent>
                <h1 className="visually-hidden">Clock App</h1>
                {content}
            </RootContent>
        </>
    );
};

export default App;

// Local State
// isExpanded, setIsExpanded

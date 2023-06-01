import React, { useContext, useEffect } from 'react';
import ClockContext from './context/clockContext';

const App = () => {
    const { fetchPositionAndTimeData, fetchQuote } = useContext(ClockContext);

    useEffect(() => {
        fetchPositionAndTimeData();
    }, [fetchPositionAndTimeData]);

    return (
        <div>
            App
            <button onClick={fetchQuote}>Quote</button>
        </div>
    );
};

export default App;

// Local State
// isExpanded, setIsExpanded

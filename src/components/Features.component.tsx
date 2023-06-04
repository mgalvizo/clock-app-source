import React, { useContext } from 'react';
import StyledFeatures from './styled/Features.styled';
import ClockContext from '../context/clockContext';
import FeatureItem from './FeatureItem.component';

const Features = () => {
    const { clockData, isSun, isMoon } = useContext(ClockContext);

    const { timezone, day_of_year, day_of_week, week_number } = clockData;

    const TIME_STATS = [
        {
            id: '1',
            title: 'Current Timezone',
            description: timezone,
            className: 'timezone',
        },
        {
            id: '2',
            title: 'Day of the Year',
            description: day_of_year,
            className: 'day_of_year',
        },
        {
            id: '3',
            title: 'Day of the Week',
            description: day_of_week,
            className: 'day_of_week',
        },
        {
            id: '4',
            title: 'Week Number',
            description: week_number,
            className: 'week_number',
        },
    ];

    const features = TIME_STATS.map(feature => {
        const { id } = feature;
        return <FeatureItem key={id} feature={feature} />;
    });

    return (
        <StyledFeatures isSun={isSun} isMoon={isMoon}>
            <div className="component">
                <div className="component__content">
                    <ul>{features}</ul>
                </div>
            </div>
        </StyledFeatures>
    );
};

export default Features;

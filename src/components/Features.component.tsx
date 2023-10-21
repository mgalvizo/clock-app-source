import React, { useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
    StyledFeatures,
    StyledFeaturesComponent,
    StyledFeaturesComponentContent,
} from './styled/Features.styled';
import ClockContext from '../context/clockContext';
import FeatureItem from './FeatureItem.component';

const Features = () => {
    const { clockData, isSun, isMoon, isExpanded } = useContext(ClockContext);
    const nodeRef = useRef<HTMLDivElement>(null);

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
        <CSSTransition
            nodeRef={nodeRef}
            in={isExpanded}
            timeout={250}
            classNames="slide-in"
            mountOnEnter
            unmountOnExit
        >
            <StyledFeatures
                className="features"
                ref={nodeRef}
                isSun={isSun}
                isMoon={isMoon}
            >
                <StyledFeaturesComponent>
                    <StyledFeaturesComponentContent>
                        <ul>{features}</ul>
                    </StyledFeaturesComponentContent>
                </StyledFeaturesComponent>
            </StyledFeatures>
        </CSSTransition>
    );
};

export default Features;

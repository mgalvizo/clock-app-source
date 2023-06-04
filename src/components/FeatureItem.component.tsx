import React, { ReactNode } from 'react';
import StyledFeatureItem from './styled/FeatureItem.styled';

interface FeatureItemProps {
    children?: ReactNode;
    feature: Feature;
}

interface Feature {
    id: string;
    title: string;
    description: string | undefined;
    className: string;
}

const FeatureItem = ({ feature }: FeatureItemProps) => {
    const { title, description, className } = feature;

    return (
        <StyledFeatureItem className={className}>
            <span className="feature">{title}</span>
            <span className="description">{description}</span>
        </StyledFeatureItem>
    );
};

export default FeatureItem;

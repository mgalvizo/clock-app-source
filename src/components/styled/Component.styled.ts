import styled from 'styled-components';

const Component = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 var(--website-padding-lg);

    // 620px
    @media only screen and (min-width: 38.75em) {
        padding: 0 calc(var(--website-padding-sm) + var(--website-padding-xlg2));
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        padding: 0 calc(var(--website-padding-lg) + var(--website-padding-xlg2));
    }
`;

const ComponentContent = styled.div`
    flex-basis: var(--max-content-width);
`;

const MainContent = styled.div`
    width: inherit;
`;

export { Component, ComponentContent, MainContent };

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
    --max-content-width: 1110px;
    --max-design-width: 1440px;
    --base-font-size: 62.5%;
    --body-font: 'Inter', sans-serif;
    --body-font-size-sm: 1.2rem;
    --body-line-height-sm: 1.75;
    --body-font-size-md: 1.5rem;
    --body-line-height-md: 1.625;
    --body-font-size-lg: 1.8rem;
    --body-line-height-lg: 1.5;
    /* COLORS */
    --white: #fff;
    --very-dark-gray: #303030;
    --light-gray: #999999;
    --black: #000;
    --spinner: #dceef2;
    /* HEADINGS */
    --time-font-size-sm: 10rem;
    --time-font-size-md: 17.5rem;
    --time-font-size-lg: 20rem;
    --time-line-height: 1;
    --time-zone-font-size-sm: 1.5rem;
    --time-zone-font-size-md: 3.2rem;
    --time-zone-font-size-lg: 4rem;
    --time-zone-line-height: 1;
    --greeting-font-size-sm: 1.5rem;
    --greeting-letter-spacing-sm: 3px;
    --greeting-font-size-md: 1.8rem;
    --greeting-letter-spacing-md: 3.5px;
    --greeting-font-size-lg: 2rem;
    --greeting-letter-spacing-lg: 4px;
    --greeting-line-height: 1;
    --location-font-size-sm: 1.5rem;
    --location-letter-spacing-sm: 3px;
    --location-font-size-md: 1.8rem;
    --location-letter-spacing-md: 4px;
    --location-font-size-lg: 2.4rem;
    --location-letter-spacing-lg: 5px;
    --location-line-height: 1;
    --feature-title-font-size-sm: 1rem;
    --feature-title-letter-spacing-sm: 2px;
    --feature-title-font-size-md: 1.3rem;
    --feature-title-letter-spacing-md: 2.5px;
    --feature-title-font-size-lg: 1.5rem;
    --feature-title-letter-spacing-lg: 3px;
    --feature-title-line-height: 1;
    --feature-description-font-size-sm: 2rem;
    --feature-description-font-size-md: 4rem;
    --feature-description-font-size-lg: 5.6rem;
    --feature-description-line-height: 1;
    /* BUTTON */
    --pill-border-radius: 30px;
    --button-border-radius: 50%;
    --button-text-font-size-sm: 1.2rem;
    --button-text-font-size-md: 1.4rem;
    --button-text-font-size-lg: 1.6rem;
    --button-text-line-height: 1;
    --button-letter-spacing: 5px;
    /* ERROR */
    /* SPACING */
    --website-padding-xsm: 4px;
    --website-padding-sm: 8px;
    --website-padding-md: 16px;
    --website-padding-lg: 24px;
    --website-padding-xlg: 32px;
    --website-padding-xlg2: 40px;
    --website-margin-xsm: 4px;
    --website-margin-sm: 8px;
    --website-margin-md: 16px;
    --website-margin-lg: 24px;
    --website-margin-xlg: 32px;
    --website-margin-xlg2: 40px;
    /* MEDIA */
    --media-min: 20em; /* 320px */
    --media-tablet: 30em; /* 480px */
    --media-tablet-sm-desktop: 38.75em; /* 620px */
    --media-small-desktop: 48em; /* 768px */
    --media-sm-lg-desktop: 56.25em; /* 900px */
    --media-large-desktop: 64em; /* 1024px */
    --large-desktop-max: 77em; /* 1232px */
    --media-max: 90em; /* 1440px */
}

* {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    border: 0;
}

html {
    width: 100%;
    font-size: var(--base-font-size);
    font-family: sans-serif;
    box-sizing: border-box;
    overflow-y: scroll;
    scrollbar-gutter: stable;
}

body {
    background-color: var(--white);
    font-size: var(--body-font-size-sm);
    line-height: var(--body-line-height-sm);
    overflow-x: hidden;
    font-family: var(--body-font);
    color: var(--white);
}

main{
    width: 100%;
}

img {
    width: auto;
    max-width: 100%;
    vertical-align: middle;
}

a:link,
a:visited {
    font-weight: bold;
    color: var(--white);
    text-decoration: none;
}

a:link:hover,
a:visited:hover {
    text-decoration: underline;
}

button {
    font-family: inherit;
    color: inherit;
    font-weight: bold;
}

.visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    border: 0;
    clip: rect(1px 1px 1px 1px);
    /* IE6, IE7 */
    clip: rect(1px, 1px, 1px, 1px);
}

.component {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 0 var(--website-padding-lg);

    .component__content {
        flex-basis: var(--max-content-width);
    }
}

// 620px
@media only screen and (min-width: 38.75em) {
    body {
        font-size: var(--body-font-size-md);
        line-height: var(--body-line-height-md);
    }

    .component {
        padding: 0 var(--website-padding-xlg2);
    }
}

// 1024px 
@media only screen and (min-width: 64em) {
    body {
        font-size: var(--body-font-size-lg);
        line-height: var(--body-line-height-lg);
    }

    .component {
        padding: 0 var(--website-padding-xlg);
    }
}
`;

export default GlobalStyle;

import styled, { css } from 'styled-components';
import mobileDaytimeBg from '../../assets/mobile/bg-image-daytime.jpg';
import mobileNightimeBg from '../../assets/mobile/bg-image-nighttime.jpg';
import tabletDaytimeBg from '../../assets/tablet/bg-image-daytime.jpg';
import tabletNightimeBg from '../../assets/tablet/bg-image-nighttime.jpg';
import desktopDaytimebg from '../../assets/desktop/bg-image-daytime.jpg';
import desktopNightimeBg from '../../assets/desktop/bg-image-nighttime.jpg';

interface StyledRootContentProps {
    isSun: boolean;
    isMoon: boolean;
    isExpanded: boolean;
}

const StyledRootContent = styled.main<StyledRootContentProps>`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    overflow-x: hidden;
    background-repeat: no-repeat;
    background-size: cover;
    animation-name: fadeIn;
    animation-duration: 0.25s;
    animation-timing-function: ease-in-out;

    .main__content {
        display: flex;
        flex-flow: column wrap;
        justify-content: start;
        position: relative;
        min-height: inherit;
        overflow-y: hidden;
    }

    ${({ isSun }) =>
        isSun &&
        css`
            background-image: linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 0.4) 0%,
                    rgba(0, 0, 0, 0.4) 100%
                ),
                url(${mobileDaytimeBg});
        `}

    ${({ isMoon }) =>
        isMoon &&
        css`
            background-image: linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 0.4) 0%,
                    rgba(0, 0, 0, 0.4) 100%
                ),
                url(${mobileNightimeBg});
        `}

    // 620px
    @media only screen and (min-width: 38.75em) {
        ${({ isSun }) =>
            isSun &&
            css`
                background-image: linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0.4) 0%,
                        rgba(0, 0, 0, 0.4) 100%
                    ),
                    url(${tabletDaytimeBg});
            `}

        ${({ isMoon }) =>
            isMoon &&
            css`
                background-image: linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0.4) 0%,
                        rgba(0, 0, 0, 0.4) 100%
                    ),
                    url(${tabletNightimeBg});
            `}
    }

    // 1024px
    @media only screen and (min-width: 64em) {
        ${({ isSun }) =>
            isSun &&
            css`
                background-image: linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0.4) 0%,
                        rgba(0, 0, 0, 0.4) 100%
                    ),
                    url(${desktopDaytimebg});
            `}

        ${({ isMoon }) =>
            isMoon &&
            css`
                background-image: linear-gradient(
                        90deg,
                        rgba(0, 0, 0, 0.4) 0%,
                        rgba(0, 0, 0, 0.4) 100%
                    ),
                    url(${desktopNightimeBg});
            `}
    }
`;

export default StyledRootContent;

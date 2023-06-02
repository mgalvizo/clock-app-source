import styled, { css } from 'styled-components';
import { RootContentProps } from '../UI/RootContent.component';
import mobileDaytimeBg from '../../assets/mobile/bg-image-daytime.jpg';
import mobileNightimeBg from '../../assets/mobile/bg-image-nighttime.jpg';
import tabletDaytimeBg from '../../assets/tablet/bg-image-daytime.jpg';
import tabletNightimeBg from '../../assets/tablet/bg-image-nighttime.jpg';
import desktopDaytimebg from '../../assets/desktop/bg-image-daytime.jpg';
import desktopNightimeBg from '../../assets/desktop/bg-image-nighttime.jpg';

const StyledRootContent = styled.div<RootContentProps>`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    flex-wrap: wrap;
    overflow-x: hidden;

    ${({ isSun }) =>
        isSun &&
        css`
            background-image: linear-gradient(
                    90deg,
                    rgba(0, 0, 0, 0.4) 0%,
                    rgba(0, 0, 0, 0.4) 100%
                ),
                url(${mobileDaytimeBg});
            background-repeat: no-repeat;
            background-size: auto;
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
            background-repeat: no-repeat;
            background-size: cover;
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

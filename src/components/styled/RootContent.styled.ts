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
    padding-top: var(--website-padding-xlg2);
    padding-bottom: var(--website-padding-xlg2);
    background-repeat: no-repeat;
    background-size: cover;

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
        padding-top: calc(
            var(--website-padding-xlg2) + var(--website-padding-lg)
        );
        padding-bottom: calc(
            var(--website-padding-xlg2) + var(--website-padding-lg)
        );

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
        padding-top: calc(
            var(--website-padding-xlg2) + var(--website-padding-md)
        );
        padding-bottom: calc(
            var(--website-padding-xlg2) + var(--website-padding-md)
        );

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

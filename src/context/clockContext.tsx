import React, { createContext, useState, useCallback } from 'react';
import axios from 'axios';
import {
    Context,
    ClockContextProps,
    // ReverseGeocodeData,
    IpApiData,
    WorldTimeData,
    ClockData,
    Quote,
} from './interfaces';
// import { Position } from '../interfaces';
// import { geocode, latLng } from '../utils/geolocation';

const initialValue = {
    refreshClock: () => {},
    time: new Date(),
    isSun: false,
    isMoon: false,
    isMorning: false,
    isAfternoon: false,
    isEvening: false,
    isLoading: true,
    error: null,
    fetchPositionAndTimeData: () => {},
    clockData: {},
    isLoadingQuote: true,
    errorQuote: null,
    fetchQuote: () => {},
    quote: {},
    isExpanded: false,
    toggleInfo: () => {},
    scrollToSection: (sectionToGo: Element) => {},
};

const ClockContext = createContext<Context>(initialValue);

const ClockContextProvider = ({ children }: ClockContextProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [clockData, setClockData] = useState<ClockData>({});
    const [quote, setQuote] = useState<Quote>({});
    const [isLoadingQuote, setIsLoadingQuote] = useState<boolean>(true);
    const [errorQuote, setErrorQuote] = useState<string | null>(null);
    const [time, setTime] = useState<Date>(new Date());
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const refreshClock = useCallback(() => {
        setTime(new Date());
    }, []);

    let isSun = false;
    let isMoon = false;
    let isMorning = false;
    let isAfternoon = false;
    let isEvening = false;

    // Integer between 0 and 23
    // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
    const currentHours = time.getHours();
    isMorning = currentHours < 12 && currentHours >= 5;
    isAfternoon = currentHours >= 12 && currentHours < 18;
    isEvening = currentHours >= 18 || currentHours < 5;
    isSun = currentHours >= 5 && currentHours < 18;
    isMoon = currentHours >= 18 || currentHours < 5;

    // This implements navigator.geolocation in browser which needs the user to allow location
    //  and geo.xyz which is not free
    // const fetchPositionAndTimeData = useCallback(async () => {
    //     try {
    //         const position = await geocode();

    //         if (!position) {
    //             throw new Error('Unable to retrieve your position.');
    //         }

    //         const coords = latLng(position as Position);
    //         const [latitude, longitude] = coords;

    //         const reverseGeocodeResponse = await axios.get(
    //             `https://geocode.xyz/${latitude},${longitude}?geoit=json`
    //         );

    //         if (reverseGeocodeResponse.status !== 200) {
    //             throw new Error('Unable to retrieve geocoding data.');
    //         }

    //         const { city, prov } =
    //             reverseGeocodeResponse.data as ReverseGeocodeData;

    //         const worldTimeResponse = await axios.get(
    //             'http://worldtimeapi.org/api/ip'
    //         );

    //         if (worldTimeResponse.status !== 200) {
    //             throw new Error('Unable to retrieve time data.');
    //         }

    //         const {
    //             abbreviation,
    //             day_of_week,
    //             day_of_year,
    //             timezone,
    //             week_number,
    //         } = worldTimeResponse.data as WorldTimeData;

    //         setClockData((prevClockData: ClockData) => {
    //             return {
    //                 ...prevClockData,
    //                 city,
    //                 prov,
    //                 abbreviation,
    //                 day_of_week,
    //                 day_of_year,
    //                 timezone,
    //                 week_number,
    //             };
    //         });

    //         setIsLoading(false);
    //     } catch (error) {
    //         setIsLoading(false);
    //         if (error instanceof Error) {
    //             setError(error.message);
    //         }
    //         return;
    //     }
    // }, []);

    const fetchPositionAndTimeData = useCallback(async () => {
        try {
            const ipApiResponse = await axios.get('https://ipapi.co/json/');

            if (ipApiResponse.status !== 200) {
                throw new Error('Unable to retrieve location data.');
            }

            const { city, country } = ipApiResponse.data as IpApiData;

            const worldTimeResponse = await axios.get(
                'https://worldtimeapi.org/api/ip'
            );

            if (worldTimeResponse.status !== 200) {
                throw new Error('Unable to retrieve time data.');
            }

            const {
                abbreviation,
                day_of_week,
                day_of_year,
                timezone,
                week_number,
            } = worldTimeResponse.data as WorldTimeData;

            setClockData((prevClockData: ClockData) => {
                return {
                    ...prevClockData,
                    city,
                    country,
                    abbreviation,
                    day_of_week,
                    day_of_year,
                    timezone,
                    week_number,
                };
            });

            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            if (error instanceof Error) {
                setError(error.message);
            }
            return;
        }
    }, []);

    const fetchQuote = useCallback(async () => {
        try {
            setIsLoadingQuote(true);

            const quotableResponse = await axios.get(
                'https://api.quotable.io/random'
            );

            if (quotableResponse.status !== 200) {
                throw new Error('Unable to retrieve quote.');
            }

            const { author, content } = quotableResponse.data as Quote;

            setQuote({ author, content });

            setIsLoadingQuote(false);
        } catch (error) {
            setIsLoadingQuote(false);
            if (error instanceof Error) {
                setErrorQuote(error.message);
            }
        }
    }, []);

    const toggleInfo = useCallback(() => {
        setIsExpanded(!isExpanded);
    }, [isExpanded]);

    const scrollToSection = useCallback(
        (sectionToGo: Element) => {
            let sectionCoords: DOMRect | undefined;
            let options: ScrollToOptions | undefined;

            if (sectionToGo) {
                sectionCoords = sectionToGo.getBoundingClientRect();
                options = {
                    left: sectionCoords.left + window.pageXOffset,
                    top: sectionCoords.top + window.pageYOffset,
                    behavior: 'smooth',
                };
            }

            if (isExpanded && sectionCoords) {
                window.scrollTo(options);
            }
        },
        [isExpanded]
    );

    const contextValue = {
        refreshClock,
        time,
        isSun,
        isMoon,
        isMorning,
        isAfternoon,
        isEvening,
        isLoading,
        error,
        fetchPositionAndTimeData,
        clockData,
        isLoadingQuote,
        errorQuote,
        fetchQuote,
        quote,
        isExpanded,
        toggleInfo,
        scrollToSection,
    };

    return (
        <ClockContext.Provider value={contextValue}>
            {children}
        </ClockContext.Provider>
    );
};

export { ClockContextProvider };

export default ClockContext;

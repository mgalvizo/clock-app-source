import React, { ReactNode, createContext, useState, useCallback } from 'react';
import axios from 'axios';
import { Position } from '../interfaces';
import { geocode, latLng } from '../utils/geolocation';

// TODO
// hacer el fetch de la quote en una function con usecallback

interface Context {
    isLoading: boolean;
    error: string | null;
    fetchPositionAndTimeData: () => void;
    clockData: ClockData;
    isMorning: boolean;
    isAfternoon: boolean;
    isEvening: boolean;
    isSun: boolean;
    isMoon: boolean;
    isLoadingQuote: boolean;
    errorQuote: string | null;
    fetchQuote: () => void;
    quote: Quote;
}

interface ClockContextProps {
    children?: ReactNode;
}

interface ReverseGeocodeData {
    city: string;
    prov: string;
}

interface WorldTimeData {
    datetime: string;
    day_of_week: string;
    day_of_year: string;
    timezone: string;
    week_number: string;
}

interface ClockData {
    city?: string;
    prov?: string;
    datetime?: string;
    day_of_week?: string;
    day_of_year?: string;
    timezone?: string;
    week_number?: string;
}

interface Quote {
    author?: string;
    content?: string;
}

const initialValue = {
    isLoading: true,
    error: null,
    fetchPositionAndTimeData: () => {},
    clockData: {},
    isMorning: false,
    isAfternoon: false,
    isEvening: false,
    isSun: false,
    isMoon: false,
    isLoadingQuote: true,
    errorQuote: null,
    fetchQuote: () => {},
    quote: {},
};

const ClockContext = createContext<Context>(initialValue);

const ClockContextProvider = ({ children }: ClockContextProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [clockData, setClockData] = useState<ClockData>({});
    const [quote, setQuote] = useState<Quote>({});
    const [isLoadingQuote, setIsLoadingQuote] = useState<boolean>(true);
    const [errorQuote, setErrorQuote] = useState<string | null>(null);

    const fetchPositionAndTimeData = useCallback(async () => {
        try {
            const position = await geocode();

            if (!position) {
                throw new Error('Unable to retrieve your position.');
            }

            const coords = latLng(position as Position);
            const [latitude, longitude] = coords;

            const reverseGeocodeResponse = await axios.get(
                `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=${process.env.REACT_APP_GEOCODE_KEY}`
            );

            if (reverseGeocodeResponse.status !== 200) {
                throw new Error('Unable to retrieve geocoding data.');
            }

            const { city, prov } =
                reverseGeocodeResponse.data as ReverseGeocodeData;

            const worldTimeResponse = await axios.get(
                'http://worldtimeapi.org/api/ip'
            );

            if (worldTimeResponse.status !== 200) {
                throw new Error('Unable to retrieve time data.');
            }

            const {
                datetime,
                day_of_week,
                day_of_year,
                timezone,
                week_number,
            } = worldTimeResponse.data as WorldTimeData;

            setClockData((prevClockData: ClockData) => {
                return {
                    ...prevClockData,
                    city,
                    prov,
                    datetime,
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

    const fetchQuote = async () => {
        try {
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
    };

    let isSun = false;
    let isMoon = false;
    let isMorning = false;
    let isAfternoon = false;
    let isEvening = false;

    if (clockData.datetime) {
        const currentDate = new Date(Date.parse(clockData.datetime as string));
        // Integer between 0 and 23
        // 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23
        const currentHours = currentDate.getHours();
        isMorning = currentHours < 12 && currentHours >= 5;
        isAfternoon = currentHours >= 12 && currentHours < 18;
        isEvening = currentHours >= 18 || currentHours < 5;
        isSun = currentHours >= 5 && currentHours < 18;
        isMoon = currentHours >= 18 || currentHours < 5;

        console.log('Is morning', isMorning);
        console.log('Is afternoon', isAfternoon);
        console.log('Is evening', isEvening);
        console.log('Is sun', isSun);
        console.log('Is moon', isMoon);
    }

    const contextValue = {
        isLoading,
        error,
        fetchPositionAndTimeData,
        clockData,
        isMorning,
        isAfternoon,
        isEvening,
        isSun,
        isMoon,
        isLoadingQuote,
        errorQuote,
        fetchQuote,
        quote,
    };

    return (
        <ClockContext.Provider value={contextValue}>
            {children}
        </ClockContext.Provider>
    );
};

export { ClockContextProvider };

export default ClockContext;

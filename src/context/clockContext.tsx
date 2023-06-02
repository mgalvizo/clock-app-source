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
    abbreviation: string;
    day_of_week: string;
    day_of_year: string;
    timezone: string;
    week_number: string;
}

interface ClockData {
    city?: string;
    prov?: string;
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
                `https://geocode.xyz/${latitude},${longitude}?geoit=json`
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
                    prov,
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

    const contextValue = {
        isLoading,
        error,
        fetchPositionAndTimeData,
        clockData,
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

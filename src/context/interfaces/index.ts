import React, { ReactNode } from 'react';

interface Context {
    refreshClock: () => void;
    time: Date;
    isSun: boolean;
    isMoon: boolean;
    isMorning: boolean;
    isAfternoon: boolean;
    isEvening: boolean;
    isLoading: boolean;
    error: string | null;
    fetchPositionAndTimeData: () => void;
    clockData: ClockData;
    isLoadingQuote: boolean;
    errorQuote: string | null;
    fetchQuote: () => void;
    quote: Quote;
    isExpanded: boolean;
    toggleInfo: () => void;
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
    abbreviation?: string;
    day_of_week?: string;
    day_of_year?: string;
    timezone?: string;
    week_number?: string;
}

interface Quote {
    author?: string;
    content?: string;
}

export type {
    Context,
    ClockContextProps,
    ReverseGeocodeData,
    WorldTimeData,
    ClockData,
    Quote,
};

import React, { useEffect, useContext } from 'react';
import StyledQuote from './styled/Quote.styled';
import ClockContext from '../context/clockContext';
import Spinner from './UI/Spinner.component';
import AppError from './AppError.component';
import { ReactComponent as RefreshIcon } from '../assets/desktop/icon-refresh.svg';

const Quote = () => {
    const { fetchQuote, isLoadingQuote, errorQuote, quote } =
        useContext(ClockContext);

    useEffect(() => {
        fetchQuote();
    }, [fetchQuote]);

    const { content: quoteContent, author } = quote;

    let content;

    if (isLoadingQuote) {
        content = <Spinner size={40} borderWidth={5} />;
    } else if (errorQuote) {
        content = <AppError message={errorQuote} />;
    } else {
        content = (
            <>
                <div className="quote">
                    <blockquote>
                        <div className="quote__content">
                            &ldquo;{quoteContent}&rdquo;
                        </div>
                        <p className="quote__author">{author}</p>
                    </blockquote>
                    <button onClick={fetchQuote} type="button">
                        <RefreshIcon />
                    </button>
                </div>
            </>
        );
    }

    return <StyledQuote>{content}</StyledQuote>;
};

export default Quote;

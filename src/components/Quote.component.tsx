import React, { useEffect, useContext, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import StyledQuote from './styled/Quote.styled';
import ClockContext from '../context/clockContext';
import Spinner from './UI/Spinner.component';
import AppError from './AppError.component';
import { ReactComponent as RefreshIcon } from '../assets/desktop/icon-refresh.svg';

const Quote = () => {
    const nodeRef = useRef(null);
    const { fetchQuote, isLoadingQuote, errorQuote, quote, isExpanded } =
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
            <div className="component">
                <div className="component__content">
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
            </div>
        );
    }

    return (
        <CSSTransition
            nodeRef={nodeRef}
            in={!isExpanded}
            timeout={250}
            classNames="fade-in"
            mountOnEnter
            unmountOnExit
        >
            <StyledQuote className="quote" ref={nodeRef}>
                {content}
            </StyledQuote>
        </CSSTransition>
    );
};

export default Quote;

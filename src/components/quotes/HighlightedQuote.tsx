import { QuoteType } from "../../types/QuoteType";

import classes from './HighlightedQuote.module.css';

function HighlightedQuote(props: QuoteType){
    return (
        <figure className={classes.quote}>
            <p>{props.text}</p>
            <figcaption>{props.author}</figcaption>
        </figure>
    );
};

export default HighlightedQuote;

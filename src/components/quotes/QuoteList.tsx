import { Fragment } from 'react';
import { QuoteType } from "../../types/QuoteType";

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


interface QuoteListProps{
    quotes: QuoteType[]
}

function QuoteList(props: QuoteListProps){
    return (
        <Fragment>
            <ul className={classes.list}>
                {props.quotes.map((quote) => (
                    <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                        />
                ))}
            </ul>
        </Fragment>
    );
};

export default QuoteList;

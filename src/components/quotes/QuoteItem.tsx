import { Link } from "react-router-dom";

import { QuoteType } from "../../types/QuoteType";

import classes from './QuoteItem.module.css';

function QuoteItem(props: QuoteType){

    return (
        <li className={classes.item}>
            <figure>
                <blockquote>
                    <p>{props.text}</p>
                </blockquote>
                <figcaption>{props.author}</figcaption>
            </figure>
            <Link className='btn' to={`/quotes/detail/${props.id}`}>
                View Fullscreen
            </Link>
        </li>
    );
};

export default QuoteItem;

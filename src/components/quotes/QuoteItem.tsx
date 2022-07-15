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
            <a className='btn'>
                View Fullscreen
            </a>
        </li>
    );
};

export default QuoteItem;

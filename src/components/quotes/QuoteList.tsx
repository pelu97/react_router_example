import { Fragment } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { QuoteType } from "../../types/QuoteType";

import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';



function sortQuotes(quotes: QuoteType[], ascending: boolean){
    return quotes.sort((quoteA, quoteB) => {
        if (ascending) {
            if(quoteA.id > quoteB.id){
                return 1;
            }
            else{
                return -1;
            }
        } else {
            if(quoteA.id < quoteB.id){
                return 1;
            }
            else{
                return -1;
            }
        }
    });
};



interface QuoteListProps{
    quotes: QuoteType[]
}

function QuoteList(props: QuoteListProps){
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    console.log(queryParams.get("sort"));
    const sortingAscending = queryParams.get("sort") === "asc";

    const sortedQuotes = sortQuotes(props.quotes, sortingAscending);


    function changeSortingHandler(){
        if(sortingAscending){
            // history.push(`${location.pathname}?sort=des`);
            navigate(`${location.pathname}?sort=des`);
        }
        else{
            // history.push(`${location.pathname}?sort=asc`);
            navigate(`${location.pathname}?sort=asc`);
        }
    }


    return (
        <Fragment>
            <div className={classes.sorting}>
                <button onClick={changeSortingHandler}>Sort {sortingAscending ? "Descending" : "Ascending"}</button>
            </div>
            <ul className={classes.list}>
                {sortedQuotes.map((quote) => {
                    return <QuoteItem
                        key={quote.id}
                        id={quote.id}
                        author={quote.author}
                        text={quote.text}
                    />;
                })}
            </ul>
        </Fragment>
    );
};

export default QuoteList;

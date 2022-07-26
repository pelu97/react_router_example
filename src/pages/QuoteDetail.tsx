import { useEffect } from "react";
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
// import { QuoteType } from "../types/QuoteType";

import { useHttp } from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

// import { DUMMY_QUOTES } from "../data/DUMMY_QUOTES";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";


interface QuoteDetailParams{
    id: string
}

function QuoteDetail(){
    const params = useParams<QuoteDetailParams>();
    const match = useRouteMatch();
    const {sendRequest, status, data: loadedQuote, error} = useHttp(getSingleQuote, true);


    // let quote = DUMMY_QUOTES.find((quote) => {
    //     return quote.id === params.id;
    // });

    useEffect(() => {
        sendRequest(params.id);
    }, [sendRequest, params.id]);

    if(status === "pending"){
        return(
            <div>
                <LoadingSpinner/>
            </div>
        );
    }

    if(error){
        return (
            <p className="centered focused">{error}</p>
        );
    }

    if(!loadedQuote.text){
        return(
            <p className="centered">No Quote Found!</p>
        );
    }

    return (
        <div>
            <HighlightedQuote id={loadedQuote.id} author={loadedQuote.author} text={loadedQuote.text}/>
            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn" to={`${match.url}/comments`}>Comments</Link>
                </div>
            </Route>
            <Route path={`${match.path}/comments`}>
                <Comments/>
            </Route>
        </div>
    );
}

export default QuoteDetail;

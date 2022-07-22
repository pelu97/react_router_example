import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
// import { QuoteType } from "../types/QuoteType";

import { DUMMY_QUOTES } from "../data/DUMMY_QUOTES";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";


interface QuoteDetailParams{
    id: string
}

function QuoteDetail(){
    const params = useParams<QuoteDetailParams>();
    const match = useRouteMatch();

    let quote = DUMMY_QUOTES.find((quote) => {
        return quote.id === params.id;
    });

    if(!quote){
        quote = {
            id: "q0",
            author: "Not Found",
            text: "Quote Not Found"
        }
    }

    return (
        <div>
            <HighlightedQuote id={quote.id} author={quote.author} text={quote.text}/>
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

import { QuoteType } from "../types/QuoteType";

import QuoteList from "../components/quotes/QuoteList";


interface AllQuotesProps{
    quotes: QuoteType[]
}

function AllQuotes(props: AllQuotesProps){
    return(
        <div>
            <QuoteList quotes={props.quotes}/>
        </div>
    );
}

export default AllQuotes;

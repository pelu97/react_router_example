import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { QuoteType } from "../types/QuoteType";

import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote(){
    const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    function addQuoteHandler(quote: {author: string, text: string}){
        const newQuote: QuoteType = {
            id: "qN",
            author: quote.author,
            text: quote.text
        }

        console.log(newQuote);

        history.push("/quotes");
    }

    return(
        <div>
            <QuoteForm isLoading={isLoading} onAddQuote={addQuoteHandler}/>
        </div>
    );
}

export default NewQuote;

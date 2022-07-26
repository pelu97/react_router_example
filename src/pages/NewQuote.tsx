import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { QuoteType } from "../types/QuoteType";

import { useHttp } from "../hooks/use-http";
import { addQuote } from "../lib/api";

import QuoteForm from "../components/quotes/QuoteForm";

function NewQuote(){
    // const [isLoading, setIsLoading] = useState(true);
    const history = useHistory();
    const {sendRequest, status} = useHttp(addQuote);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setIsLoading(false);
    //     }, 1000);
    //
    //     return () => {
    //         clearTimeout(timeout);
    //     }
    // }, []);

    useEffect(() => {
        if(status === "completed"){
            history.push("/quotes");
        }
    }, [status, history]);

    function addQuoteHandler(quote: {author: string, text: string}){
        const newQuote: QuoteType = {
            id: "qN",
            author: quote.author,
            text: quote.text
        }

        console.log(newQuote);

        sendRequest(quote);

        // history.push("/quotes");
    }

    return(
        <div>
            <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler}/>
        </div>
    );
}

export default NewQuote;

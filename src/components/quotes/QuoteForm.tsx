import { useRef, useState, Fragment } from 'react';
// import { Prompt } from "react-router-dom";

import Card from '../UI/Card';
import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';


interface QuoteFormProps{
    isLoading: boolean,
    onAddQuote: (
        quote: {author: string, text: string}
    ) => void
}


function QuoteForm(props: QuoteFormProps){
    const authorInputRef = useRef<HTMLInputElement>(null);
    const textInputRef = useRef<HTMLTextAreaElement>(null);
    const [formFocused, setFormFocused] = useState(false);

    function submitFormHandler() {

        const enteredAuthor = authorInputRef.current!.value;
        const enteredText = textInputRef.current!.value;

        // optional: Could validate here

        props.onAddQuote({ author: enteredAuthor, text: enteredText });
    }


    function focusFormHandler(){
        console.log("Focused on form");
        if(!formFocused){
            setFormFocused(true);
        }
    }

    function finishFormHandler(){
        setFormFocused(false);
    }

    return (
        <Fragment>
            {/*
            <Prompt when={formFocused} message={(location) => {
                return "Are you sure you want to leave? All your entered data will be lost!"
            }}/>
            */}
            <Card>
                <form onFocus={focusFormHandler} className={classes.form} onSubmit={(event) => {
                    event.preventDefault();
                    submitFormHandler();
                }}>
                    {props.isLoading && (
                        <div className={classes.loading}>
                            <LoadingSpinner />
                        </div>
                    )}

                    <div className={classes.control}>
                        <label htmlFor='author'>Author</label>
                        <input type='text' id='author' ref={authorInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='text'>Text</label>
                        <textarea id='text' rows={5} ref={textInputRef}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishFormHandler} className='btn'>Add Quote</button>
                    </div>
                </form>
            </Card>
        </Fragment>

    );
};

export default QuoteForm;

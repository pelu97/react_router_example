import { useRef, useEffect } from 'react';

import { useHttp } from "../../hooks/use-http";
import { addComment } from "../../lib/api";

import LoadingSpinner from "../UI/LoadingSpinner";

import classes from './NewCommentForm.module.css';

interface NewCommentProps{
    onAddedComment: () => void,
    quoteId: string
}

function NewCommentForm(props: NewCommentProps){
    const commentTextRef = useRef<HTMLTextAreaElement>(null);

    const {sendRequest, status, error} = useHttp(addComment);

    const {onAddedComment} = props;

    useEffect(() => {
        if(status === "completed" && !error){
            onAddedComment();
        }
    }, [status, error, onAddedComment]);


    function submitFormHandler(){

        // optional: Could validate here

        // send comment to server
        const inputText = commentTextRef.current!.value;

        // console.log(props);

        sendRequest({
            quoteId: props.quoteId,
            comment: { text: inputText }
        });

    };

    return (
        <form className={classes.form} onSubmit={(event) => {
            event.preventDefault();
            submitFormHandler();
        }}>
            {status === "pending" && (
                <div className="centered">
                    <LoadingSpinner/>
                </div>
            )}
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor='comment'>Your Comment</label>
                <textarea id='comment' rows={5} ref={commentTextRef}></textarea>
            </div>
            <div className={classes.actions}>
                <button className='btn'>Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;

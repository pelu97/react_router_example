import { useRef } from 'react';

import classes from './NewCommentForm.module.css';

function NewCommentForm(){
    const commentTextRef = useRef<HTMLTextAreaElement>(null);

    function submitFormHandler(){

        // optional: Could validate here

        // send comment to server
    };

    return (
        <form className={classes.form} onSubmit={(event) => {
            event.preventDefault();
            submitFormHandler();
        }}>
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

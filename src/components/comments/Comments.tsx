import { useState, useEffect, useCallback } from 'react';
import { useParams } from "react-router-dom";

import { useHttp } from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";

import NewCommentForm from './NewCommentForm';
import CommentsList from "./CommentsList";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from './Comments.module.css';

interface CommentsParams{
    id: string
}

function Comments(){
    const [isAddingComment, setIsAddingComment] = useState(false);
    const params = useParams<keyof CommentsParams>();

    const {sendRequest, status, data: loadedComments} = useHttp(getAllComments);

    useEffect(() => {
        sendRequest(params.id);
    }, [params.id, sendRequest]);

    function startAddCommentHandler(){
        setIsAddingComment(true);
    };

    const addedCommentHandler = useCallback(() => {
        sendRequest(params.id);
        setIsAddingComment(false);
    }, [sendRequest, params.id]);

    // console.log(params);

    let comments;

    if(status === "pending"){
        comments = (
            <div className="centered">
                <LoadingSpinner/>
            </div>
        );
    }

    if(status === "completed" && (loadedComments && loadedComments.length>0)){
        comments = (
            <CommentsList comments={loadedComments}/>
        );
    }

    if(status === "completed" && (!loadedComments || loadedComments.length === 0)){
        comments = (
            <p className="centered">No comments added yet</p>
        );
    }

    return (
        <section className={classes.comments}>
            <h2>User Comments</h2>
            {!isAddingComment && (
                <button className='btn' onClick={startAddCommentHandler}>
                    Add a Comment
                </button>
            )}
            {isAddingComment && params.id && <NewCommentForm quoteId={params.id} onAddedComment={addedCommentHandler}/>}
            {comments}
        </section>
    );
};

export default Comments;

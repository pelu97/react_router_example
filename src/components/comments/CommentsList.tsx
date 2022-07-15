import { CommentType } from "../../types/CommentType";

import CommentItem from './CommentItem';

import classes from './CommentsList.module.css';

interface CommentsListProps{
    comments: CommentType[]
}

function CommentsList(props: CommentsListProps){
    return (
        <ul className={classes.comments}>
            {props.comments.map((comment) => (
                <CommentItem key={comment.id} text={comment.text} />
            ))}
        </ul>
    );
};

export default CommentsList;

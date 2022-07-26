import { QuoteType } from "../types/QuoteType";

const FIREBASE_DOMAIN = 'https://react-course-http-b0fa6-default-rtdb.firebaseio.com';

export async function getAllQuotes() {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch quotes.');
    }

    const transformedQuotes: QuoteType[] = [];

    for (const key in data) {
        const quoteObj: QuoteType = {
            id: key,
            ...data[key],
        };

        transformedQuotes.push(quoteObj);
    }

    return transformedQuotes;
}

export async function getSingleQuote(quoteId: string) {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not fetch quote.');
    }

    const loadedQuote: QuoteType = {
        id: quoteId,
        ...data,
    };

    return loadedQuote;
}

export async function addQuote(quoteData: QuoteType) {
    const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
        method: 'POST',
        body: JSON.stringify(quoteData),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not create quote.');
    }

    return null;
}

interface CommentData{
    quoteId: string,
    comment: {
        text: string
    }
}

export async function addComment(requestData: CommentData) {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`, {
        method: 'POST',
        body: JSON.stringify(requestData.comment),
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not add comment.');
    }

    return { commentId: data.name };
}

export async function getAllComments(quoteId: string) {
    const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Could not get comments.');
    }

    const transformedComments = [];

    for (const key in data) {
        const commentObj = {
            id: key,
            ...data[key],
        };

        transformedComments.push(commentObj);
    }

    return transformedComments;
}

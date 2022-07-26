import { useReducer, useCallback } from 'react';


interface HttpAction{
    type: string,
    errorMessage?: string,
    responseData?: any
}

interface HttpState{
    status: string | null,
    data: any | null,
    error?: string | null
}


function httpReducer(state: HttpState, action: HttpAction): HttpState {
    if (action.type === 'SEND') {
        return {
            data: null,
            error: null,
            status: 'pending',
        };
    }

    if (action.type === 'SUCCESS') {
        return {
            data: action.responseData,
            error: null,
            status: 'completed',
        };
    }

    if (action.type === 'ERROR') {
        return {
            data: null,
            error: action.errorMessage,
            status: 'completed',
        };
    }

    return state;
}

export function useHttp(requestFunction: any, startWithPending = false) {
    const [httpState, dispatch] = useReducer(httpReducer, {
        status: startWithPending ? 'pending' : null,
        data: null,
        error: null,
    });

    const sendRequest = useCallback(
        async function (requestData?: any) {
            dispatch({ type: 'SEND' });

            try {
                const responseData = await requestFunction(requestData);
                dispatch({ type: 'SUCCESS', responseData });
            } catch (error) {
                let message;

                if(error instanceof Error){
                    message = error.message
                }
                else{
                    message = String(error);
                }

                dispatch({
                    type: 'ERROR',
                    errorMessage: message || 'Something went wrong!',
                });
            }
        },
        [requestFunction]
    );

    return {
        sendRequest,
        ...httpState,
    };
}

export default useHttp;

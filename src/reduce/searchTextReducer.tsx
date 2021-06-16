import React from 'react'

export class InitialDataSeatchText {
    searchTextReducer: {
        text: ''
    }
}

const searchTextReducer = (state = {text: ''}, action) => {
    
    switch(action.type) {
        case 'SEARCH_TEXT':
            return { ...state, text: action.text}
        default:
            return state;

    }
}

export default searchTextReducer;
const searchTextAction = (text: string) => {
    return {
        type: 'SEARCH_TEXT',
        text
    }
}

export default searchTextAction;
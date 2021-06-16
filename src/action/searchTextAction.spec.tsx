import searchTextAction from './searchTextAction';

test('test create seatch text action', () => {
    expect(searchTextAction('bulbasour')).toEqual({
        type: 'SEARCH_TEXT',
        text: 'bulbasour'
    })
});
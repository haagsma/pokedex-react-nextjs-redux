import React, { BaseSyntheticEvent, useState } from 'react';
import { createStyles, fade, InputBase, makeStyles, TextField, Theme } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch, useSelector} from 'react-redux'

import refreshPokemonList from '../action'
import { InitialData } from '../reduce';
import { NameUrl } from '../reduce'
import searchTextAction from '../action/searchTextAction';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
              backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
              marginLeft: theme.spacing(3),
              width: 'auto',
            },
          },
          searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          inputRoot: {
            color: 'inherit',
          },
          inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
              width: '20ch',
            },
          },
    })
)

const SearchButton = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const pokemonListStore = useSelector((state: InitialData) => state.pokemonList.namesList)

    const onInputToSearch = (event: BaseSyntheticEvent) => {
        const localName: string = event.target.value.toLowerCase();
        
        if (localName.length > 2) {
            const finalList: NameUrl[] = pokemonListStore.filter(pokemon => 
                pokemon.name.includes(localName)
                );
            dispatch(refreshPokemonList(finalList));
        } else {
            dispatch(refreshPokemonList(pokemonListStore.slice(0,40)));
        }

        dispatch(searchTextAction(localName));
    }

    return (
        <>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search..."
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    onInput={onInputToSearch}
                />
            </div>
        </>
          
    )
}

export default SearchButton;
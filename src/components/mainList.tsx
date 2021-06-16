import { Grid, Modal} from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { InitialData } from '../reduce'
import { useDispatch } from 'react-redux'
import refreshPokemonList, { loadPokemonNames } from '../action'
import { InitialDataSeatchText } from '../reduce/searchTextReducer';

const MainList = () => {
    const pokemonListStore = useSelector( (state: InitialData) => state.pokemonList.data);
    const pokemonListStoreNames = useSelector( (state: InitialData) => state.pokemonList.namesList);
    const textSearch: string = useSelector( (state: InitialDataSeatchText) => state.searchTextReducer.text);

    const dispatch = useDispatch();

    const [count, setCount] = useState(0);
    const [countScroll, setCountScroll] = useState(40);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalBody, setModalBody] = useState(null);

    const getDatas = async () => {
        if (count === 0) {
          const result = await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=10000')).json();
          dispatch(refreshPokemonList(result.results.slice(0, countScroll)))
          dispatch(loadPokemonNames(result.results))
          setCount(1);
        }
    }

    const list = (pokemonList) => {
        if (pokemonList.length > 0) {
            return pokemonList.map(p => (
                <Grid onClick={() => openModalNameUrl(p)} key={p.name} style={{textAlign: 'center'}} item xs={3}>
                    <img  src={`https://img.pokemondb.net/sprites/bank/normal/${p.name}.png`} alt={p.name} />
                    <p >{p.name}</p>
                </Grid>
            ))
        }
    }

    const openModalNameUrl = async (nameUrl) => {
        const result = await (await fetch(nameUrl.url)).json();
        setModalBody(result);
        setModalOpen(true);
    }

    const handleClose = () => {
        setModalOpen(false);
    }

    const onScroll = (event) => {
        const target = event.target;
        if (target.offsetHeight + target.scrollTop >= target.scrollHeight) {
            if (!textSearch) {
                setCountScroll(countScroll + 40)
                dispatch(refreshPokemonList(pokemonListStoreNames.slice(0, countScroll)))
            }
          }
    }

    const detailInfo = () => {
        if (modalBody) {
            return (
                <div style={{margin: '20% auto auto auto', width: '400px', height: '400px', backgroundColor: '#ffffff'}}>
                    <img  src={`https://img.pokemondb.net/sprites/bank/normal/${modalBody.name}.png`} alt={modalBody.name} />
                    <p>Name: {modalBody.name}</p>
                    <p>Weight: {modalBody.weight}</p>
                    <h4>Stats</h4>
                    {
                        modalBody.stats.map((stat) => (
                            <p key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</p>
                        ))
                    }
                </div>
            )
        } else {
            return (<></>)
        }
    }

    getDatas();

    return (
        <div onScroll={onScroll} style={{overflow: 'auto', height: '90vh'}}>
            <Grid container spacing={3}>
                {
                    list(pokemonListStore)
                }
            </Grid>
            <Modal 
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {detailInfo()}
            </Modal>
        </div>
    )
}

export default MainList;
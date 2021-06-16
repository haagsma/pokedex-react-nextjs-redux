import Head from 'next/head'
import React, { useState } from 'react'
import MainList from '../components/mainList'
import NavBar from '../components/navBar'
import { Provider } from 'react-redux'
import auth from '../auth'

import store from '../store'

const Home = () => {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main >
        <Provider store={store}>
          <NavBar />
          <MainList />
        </Provider>
      </main>
    </div>
  )
}

export default auth(Home);

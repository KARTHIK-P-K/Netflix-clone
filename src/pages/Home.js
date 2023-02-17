import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Request'

const Home = () => {
  return (
    <>
      <Main/>
      <Row rowId='1' title='Popular'  fetchUrl={requests.requestPopular} />
      <Row rowId='2' title='TopRated'  fetchUrl={requests.requestTopRated} />
      <Row rowId='3' title='Trending'  fetchUrl={requests.requestTrending} />
      <Row rowId='4' title='Horror'  fetchUrl={requests.requestHorror} />
      <Row rowId='5' title='Upcoming'  fetchUrl={requests.requestUpcoming} />
      
    </>
  )
}

export default Home
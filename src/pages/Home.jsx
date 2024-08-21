import React from 'react'
import Card from '../components/card'

const Home = ({creatorData}) => {

  return (
    <div className='d-flex flex-wrap justify-content-center'>
      {creatorData?.map((creator) => (
        <Card creator={creator} />
      ))} 
    </div>
  )
}

export default Home
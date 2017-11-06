import React from 'react'
import styled from 'styled-components'

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const HomePage = () => {
  return (
    <HomePageWrapper>
      <h1>Please log in to view your posts!</h1>
    </HomePageWrapper>
  )
}

export default HomePage

import React, { useState } from 'react'
import { BlackCloseCircle, ButtonCircle, Main, WhiteBox } from './styles'

const Content = () => {
  const [isOpened, setIsOpened] = useState(false)

  const openWidget = () => {
    setIsOpened(true)
  }

  const closeWidget = () => {
    setIsOpened(false)
  }

  if (isOpened) {
    return (
      <WhiteBox>
        <BlackCloseCircle size="40" onClick={closeWidget} />
      </WhiteBox>
    )
  }

  return <ButtonCircle onClick={openWidget}>Click Me</ButtonCircle>
}

const Widget = () => (
  <Main>
    <Content />
  </Main>
)

export default Widget

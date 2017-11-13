import React from 'react'
import styled from 'styled-components'

const size = '3.5rem'
const Image = styled.img`
  width: ${size};
  height: ${size};
  border-radius: ${size};
`

const randomInt = (lb, ub) =>
  Math.floor((Math.random() * (ub - lb)) + lb)

const randomImage = () =>
  `pb_${randomInt(1, 3)}.jpg`

export default props => <Image src={`/images/avatars/${props.url || randomImage()}`} />

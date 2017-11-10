import React from 'react'
import styled from 'styled-components'

import {
  NavText,
} from '../../Atoms'
import styles from '../../styles'

const horizontalPadding = '2rem'

const Block = styled.div`
  padding-left: ${horizontalPadding};
  padding-right: ${horizontalPadding};
  background-color: ${styles.colors.dark};
  width: fit-content;
  height: ${styles.heights.nav};
  display: flex;
  align-items: center;
  cursor: pointer;
`

export default props => (
  <Block>
    <NavText>{props.children}</NavText>
  </Block>
)

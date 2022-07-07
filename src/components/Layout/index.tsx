import React from 'react'
import Header from '@components/Layout/components/Header'
import * as S from '@components/Layout/styles'

interface LayoutProps {
  children: any
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Wrapper>
      <S.HeaderWrapper>
        <Header />
      </S.HeaderWrapper>
      <S.Container>{children}</S.Container>
    </S.Wrapper>
  )
}

export default Layout

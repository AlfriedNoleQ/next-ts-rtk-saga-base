import React from 'react'
import * as S from '@components/ToolTip/styles'

interface ToolTipProps {
  title: string
  text: string
}

const ToolTip: React.FC<ToolTipProps> = ({ title, text }) => {
  return (
    <S.ToolTipWrapper>
      <S.Title>{title}</S.Title>
      <span data-tooltip={text}>i</span>
    </S.ToolTipWrapper>
  )
}

export default ToolTip

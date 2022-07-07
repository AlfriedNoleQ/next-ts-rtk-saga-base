import React from 'react'
import * as S from '@modules/HomePageModule/components/Quote/styles'

interface QuoteProps {
  quote: any
}

const Quote: React.FC<QuoteProps> = ({ quote }) => {
  return (
    <S.Quote
      className={`flex flex-col m-4 p-4 text-white
                  text-left font-bold bg-slate-700/50 rounded-xl shadow-lg`}
    >
      <div
        data-text={quote.content}
        className="content m-auto italic text-4xl"
        dangerouslySetInnerHTML={{ __html: `${quote.content}` }}
      />
      <S.By className="pt-4 text-4xl">{quote.byNovel}</S.By>
    </S.Quote>
  )
}

export default Quote

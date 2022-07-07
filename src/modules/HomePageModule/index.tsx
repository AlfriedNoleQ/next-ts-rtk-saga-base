import React from 'react'
import * as S from '@modules/HomePageModule/styles'
import { Quote } from '@modules/HomePageModule/components'
import Image from 'next/image'
import { csgoQuote, csgoMeme, dataQuote } from '@constants/fake'

interface HomeModuleProps {}

interface TypeQuote {
  id: number
  byNovel: string
  content: string
}

interface TypeQuoteCsgo {
  id: number
  imageUrl: string
}

const HomePageModule: React.FC<HomeModuleProps> = () => {
  return (
    <>
      <S.TopWrapper className="bg-fixed bg-no-repeat bg-center bg-cover">
        <S.TopTitle className="text-center text-4xl text-black font-bold uppercase italic">
          Những câu nói hay trong tiên hiệp
        </S.TopTitle>
        <S.QuoteWrapper className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 p-2 mx-4">
          {dataQuote.map((quote: TypeQuote) => (
            <Quote key={quote.id} quote={quote} />
          ))}
        </S.QuoteWrapper>
      </S.TopWrapper>
      <S.Content className="pt-4">
        <div className="quote__csgo">
          <h1 className="quote__csgo--title text-center text-4xl text-black font-bold uppercase italic">
            Quote vui vẻ về VN-CSGO
          </h1>
          <div className="pt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
            {csgoQuote.map((item: TypeQuoteCsgo) => (
              <div key={item.id} className="p-4">
                <Image
                  src={item.imageUrl}
                  width={450}
                  height={450}
                  objectFit="contain"
                  alt="meme"
                />
              </div>
            ))}
          </div>
        </div>
      </S.Content>
    </>
  )
}

export default HomePageModule

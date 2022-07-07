import React from 'react'
import Image from 'next/image'
import * as S from '@modules/HomePageModule/components/Review/styles'

const Review = ({ data }: any) => {
  return (
    <S.ReviewWrapper>
      <div className="flex rounder flex-col p-2">
        <div className="relative image-review">
          <Image
            src={data.image}
            layout="fill"
            alt="images"
            objectFit="cover"
          />
        </div>
        <div className="text-left uppercase pt-4 font-bold text-4xl">
          {data.title}
        </div>
        <div className="description text-2xl">{data.description}</div>
      </div>
    </S.ReviewWrapper>
  )
}

export default Review

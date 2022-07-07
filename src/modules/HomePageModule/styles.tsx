import styled from 'styled-components'

export const Wrapper = styled.section`
  position: relative;
`

export const TopWrapper = styled.div`
  background-image: url('/images/thiensonmotuyet.jpg');

  width: 100vw;
  position: relative;
  left: calc(-50vw + 50%);
`

export const TopTitle = styled.h1`
  position: relative;
  font-family: 'ThuPhapCong';
  padding-top: 15px;
`

export const QuoteWrapper = styled.div``

export const Quote = styled.div``

export const By = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: auto;
`

export const Content = styled.div`
  position: relative;

  .image-review {
    width: 100%;
    height: 200px;
  }

  .quote__csgo,
  .meme__csgo {
    .quote__csgo--title,
    .meme__csgo--title {
      font-family: 'Pony';
    }
  }
`

import styled from 'styled-components'

export const ToolTipWrapper = styled.div`
  display: inline-block;
  position: relative;
  margin: 0 10px;

  [data-tooltip] {
    position: relative;
    cursor: pointer;
    background: black;
    color: white;
    font-size: 12px;
    border-radius: 1em;
    padding: 0 0.5em;
  }

  [data-tooltip]:before {
    content: attr(data-tooltip);
    position: absolute;
    opacity: 0;
    width: 150px;
    transform: translateX(-50%);
    bottom: 25px;
    padding: 0.5em;
    background-color: black;
    border-radius: 0.25em;
    color: white;
    text-align: center;
    transition: 0.2s;
  }

  [data-tooltip]:after {
    content: '';
    position: absolute;
    opacity: 0;
    bottom: 15px;
    margin-left: -5px;
    border: 5px solid black;
    border-color: black transparent transparent transparent;
    transition: 0.2s;
  }

  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after {
    opacity: 1;
  }
`

export const Title = styled.div`
  display: inline-block;
  margin-right: 5px;
`

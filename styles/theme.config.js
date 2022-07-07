import { createGlobalStyle } from 'styled-components'

export const lightTheme = {}

export const darkTheme = {}

export const GlobalStyles = createGlobalStyle`
  *,*::before,*::after{
    box-sizing:border-box;
    margin: 0;
    padding: 0
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif !important;
    font-weight: 400;
    font-style: normal;
    transition: all 0.50s linear;
  }
  
  input, textarea, button {font-family: inherit}

  ol,ul{
    list-style:none;
    padding: 0;
    margin: 0;

  }
  caption,th{
    text-align:left;
  }
  h1,h2,h3,h4,h5,h6{
    font-size:100%; 
    font-weight: 400;
  }
  q:before,q:after{
    content:'';
  }
  abbr,acronym{
    border:0;
  }
  a{
    text-decoration:none;
  }
  a:hover {
  }
  a:active,a:focus{
    outline:none;
  }

  input:focus-visible, 
  input:active,
  input:focus,
  textarea:focus-visible, 
  textarea:active,
  textarea:focus,
  select:focus-visible, 
  select:active,
  select:focus {
    outline: 1px solid transparent;
    border: 1px solid transparent; 
  }

  table {
    border-collapse: inherit;
    width: 100%;
    border: 1px solid #eaeaea;
    border-radius: 1rem;
    margin-top: 3.2rem;

    thead {
      tr th {
        font-weight: bold;
        font-size: 1.6rem;
        line-height: 2.4rem;
        padding: 2rem;
        padding-bottom: 1.2rem;
      }
    }

    tbody {
      tr td {
        font-size: 1.4rem;
        line-height: 2rem;
        padding: 2rem;
        padding-bottom: 1.2rem;
      }

      tr td:last-child {
        cursor: pointer;
      }

      tr:last-child td {
        border-bottom: none;
      }
    }
  }

  .Toastify__toast .Toastify__toast-body {
    font-size: 1.6rem;
  }

   /* Variables */
  :root{
    font-size: 10px;
  }
`

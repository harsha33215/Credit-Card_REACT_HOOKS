// Style your elements here

import styled from 'styled-components'

export const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content : center;
    align-items:center;
    min-height: 100vh
    width: 100%
`

export const CreditCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content : space-around;
    align-items: center;
    width: 50%;
    height: 100vh;
    background-color: #3b4b69;

`
export const CardHeading = styled.h1`
    font-size: 32px;
    font-family : 'Roboto';
    font-weight: 700;
    color : #ffffff;
    border-bottom : 2px solid #ffd773;
    padding-top: 50px;

`

export const CardBgImage = styled.div`
width : 400px;
min-height: 210px;
background-image: url('https://assets.ccbp.in/frontend/hooks/credit-card-bg.png');
background-size: cover; 
border-radius: 18px;
padding-bottom : 50px;


`

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content : center;
    align-items:center;
    width: 50%
`
export const PaymentCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;
    width: 30vw;
    margin: 20px;
    box-shadow: 5px 5px 5px 5px;
`
export const PaymentHeading = styled.h1`
    font-size: 24px;
    font-family : 'Roboto';
    font-weight: 700;
    color: #344e7a;
`
export const CardNumberInput = styled.input`
    height: 25px;
    width: 250px;
    border: 2px solid #d3d9e0;
    margin: 15px;

`
export const CardNameInput = styled.input`
    height: 25px;
    width: 250px;
    border: 2px solid #d3d9e0;
    margin: 15px;
    
`
export const CardDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items:flex-start;
    margin-top:40px;
    margin-left: 15px;
    
`
export const CardHolderNameHeading = styled.p`
    font-size: 24px;
    font-family : 'Roboto';
    font-weight: 700;
    color: #344e7a;
    color: #ffffff;
`
export const CardHolderName = styled.p`
     font-size: 24px;
    font-family : 'Roboto';
    font-weight: 700;
    color: #344e7a;
    color: #ffffff;
`

export const CardHolderNumber = styled.p`
    font-size: 30px;
    font-family : 'Roboto';
    font-weight: 700;
    color: #344e7a;
    color: #ffffff;
    
    `

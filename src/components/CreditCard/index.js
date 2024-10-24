// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  CreditCardContainer,
  CardHeading,
  CardBgImage,
  PaymentContainer,
  PaymentCard,
  PaymentHeading,
  CardNumberInput,
  CardNameInput,
  CardHolderNameHeading,
  CardHolderName,
  CardHolderNumber,
  CardDetails,
} from './styledComponents'

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState('')
  const [cardName, setCardName] = useState('')

  const onChangeNumber = event => setCardNumber(event.target.value)
  const onChangeName = event => setCardName(event.target.value)
  return (
    <MainContainer>
      <CreditCardContainer>
        <CardHeading>CREDIT CARD</CardHeading>
        <CardBgImage  data-testid="creditCard">
          <CardDetails>
            <CardHolderNumber>{cardNumber}</CardHolderNumber>
            <CardHolderNameHeading>CARDHOLDER NAME </CardHolderNameHeading>
            <CardHolderName>{cardName.toUpperCase()}</CardHolderName>
          </CardDetails>
        </CardBgImage>
      </CreditCardContainer>

      <PaymentContainer>
        <PaymentCard>
          <PaymentHeading>Payment Method</PaymentHeading>
          <CardNumberInput
            type="text"
            placeholder="Card Number"
            onChange={onChangeNumber}
          />
          <CardNameInput
            type="text"
            placeholder="Cardholder Name"
            onChange={onChangeName}
          />
        </PaymentCard>
      </PaymentContainer>
    </MainContainer>
  )
}
export default CreditCard

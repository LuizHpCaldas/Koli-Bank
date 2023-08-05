import { View, Text } from 'react-native'
import React from 'react'
import { Button, ButtonText, Container, InfoContainer, InfoContent, InfoTitle } from './styled'

const CardsInfo = () => {
    return (
        <>
            <Container>
                <Button background={"#d8d8d8"}> 
                    <ButtonText> ANTECIPAR </ButtonText>
                </Button>

            <InfoContainer>
                <InfoTitle>PROXIMAS FATURAS </InfoTitle>
                <InfoContent color={"black"}>R$ 640,00 </InfoContent>
            </InfoContainer>

            </Container>

            <Container>
                <Button background={"#d8d8d8"}> 
                    <ButtonText> ANTECIPAR </ButtonText>
                </Button>

            <InfoContainer>
                <InfoTitle>PROXIMAS FATURAS </InfoTitle>
                <InfoContent color={"black"}>R$ 640,00 </InfoContent>
            </InfoContainer>

            </Container>

            <Container>
                <Button background={"#d8d8d8"}> 
                    <ButtonText> ANTECIPAR </ButtonText>
                </Button>

            <InfoContainer>
                <InfoTitle>PROXIMAS FATURAS </InfoTitle>
                <InfoContent color={"black"}>R$ 640,00 </InfoContent>
            </InfoContainer>

            </Container>
        </>
    )
}

export default CardsInfo
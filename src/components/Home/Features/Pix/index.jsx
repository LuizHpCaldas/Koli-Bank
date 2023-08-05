import { View, Text } from 'react-native'
import React from 'react'
import { Button, ButtonText, Container, Field, Title, Label, Input } from './styled'

const Pix = () => {
  return (
    <Container>
      <Title>Transferencia Via Pix</Title>
      <Field>
        <Label>
            Qual o valor a ser enviado?
        </Label>
        <Input placeholder={"R$ 230,00"} keyBoardType="number-pad" />
      </Field>

      <Field>
        <Label>
            Qual chave Pix?
        </Label>
        <Input placeholder={"CPNF, CNPJ, TELEFONE OU EMAIL?"} keyBoardType="number-pad" />
      </Field>
      <Button>
        <ButtonText>
            Enviar Pix
        </ButtonText>
      </Button>
    </Container>
  )
}

export default Pix
import { View, Text } from 'react-native'
import React from 'react'
import { Container, Field, Form, Label, Title, Input, Button, ButtonText } from './styled';

const Transfer = () => {
  return (
    <Container>
      <Title>Fazer Transferencia</Title>
      <Form>
        <Field>
            <Label>
            Nome da Pessoa
            </Label>
            <Input placeholder={"Luiz Henrique Caldas"} />
        </Field>

        <Field>
            <Label>
            CPF
            </Label>
            <Input placeholder={"000.000.000-00"} keyboardType="number-pad" />
        </Field>

        <Field>
            <Label>
            Banco
            </Label>
            <Input placeholder={"Itau UNIBANCO - SA"} />
        </Field>

        <Field>
            <Label>
            Agencia
            </Label>
            <Input placeholder={"0000"} keyboardType='number-pad' />
        </Field>

        <Field>
            <Label>
            Conta
            </Label>
            <Input placeholder={"00000-0"} keyboardType='number-pad' />
        </Field>

        <Field>
            <Label>
            Valor
            </Label>
            <Input placeholder={"R$ 234,55"} keyboardType='number-pad' />
        </Field>
      </Form>

      <Button>
        <ButtonText>
            Enviar Transferencia
        </ButtonText>
      </Button>
    </Container>
  );
};

export default Transfer;
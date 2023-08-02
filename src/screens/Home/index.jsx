import { Text } from "react-native";
import React, { useState } from "react";
import { Container, MainInfoContainer } from "./styled";
import Header from "../../components/Home/Header";
import MoneyBalance from "../../components/Home/MoneyBalance";
import SelectFeatures from "../../components/Home/SelectFeatures";
import CardList from "../../components/Home/Features/Card";
import CardItem from "../../components/Home/Features/Card/CardItem";

const Home = () => {

  const [currentFeature, setCurrentFeature] = useState("Cards");

    return (
       <Container> 
            <MainInfoContainer>

              <Header />  

              <MoneyBalance />

              <SelectFeatures setFeature={setCurrentFeature} />

            </MainInfoContainer>

            {currentFeature === "Cards" ? (
                <CardList />
              ) : currentFeature === "Transfer" ? (
                <Text>Transfer</Text>
              ) : (
                <Text>Pix</Text>
              )}
            
       </Container> 
    );
};

export default Home;
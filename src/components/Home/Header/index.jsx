import { View, Text } from 'react-native'
import React from 'react'
import { Container, Logo, UserPhotoContainer, UserPhotoImage } from './styled';

import {MaterialCommunityIcons} from "@expo/vector-icons";
 
const Header = () => {
    return (
        <Container>
            <MaterialCommunityIcons name="dots-vertical" size={40} color = "#E53D41" />
            <Logo source={require("../../../../assets/logo.png")} />
            <UserPhotoContainer>
                <UserPhotoImage source={require("../../../../assets/usur.png")} />
            </UserPhotoContainer>
        </Container>
    )
}

export default Header;
import React from "react";
import { Text, StyleSheet } from "react-native";
import styled from "styled-components/native"
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
    background-color : white; 
`;

const RestaurantCaerdCover = styled(Card.Cover)`
    padding : 20px;
    background-color : white;
`;

const Title = styled(Text)`
    padding : 16px;
    color : red;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
    const {
        name = 'Some Restarurant',
        icon,
        photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        ],
        address = '100 some random street',
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily,
    } = restaurant;
    return (
        <RestaurantCard>
            <RestaurantCaerdCover key={name} source={{ uri : photos[0] }}/>
            <Title>{ name }</Title>
        </RestaurantCard>
    );
};

const styles = StyleSheet.create({
    card : {backgoundColor : "white"},
    cover : { padding : 20, backgroundColor : "white"},
    title : { padding : 16 },
});
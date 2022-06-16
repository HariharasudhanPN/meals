import React from "react";
import { StatusBar, StyleSheet, SafeAreaView, View} from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SafeArea = styled(SafeAreaView)`
  flex : 1;
  ${StatusBar.currentHeight && `marginTop : ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  padding : 16px;
`;

const RestarurantListContainer = styled.View`
  flex : 1;
  padding : 16px;
  // backgroundColor : blue;
`;

export const RestaurantsScreen = () => (
    <SafeArea>
        <SearchContainer>
          <Searchbar/>
        </SearchContainer>
        <RestarurantListContainer>
          <RestaurantInfoCard />
        </RestarurantListContainer>
      </SafeArea>
);

const styles = StyleSheet.create({
    container : {
      flex : 1,
      marginTop : StatusBar.currentHeight
    },
    search : {
      padding : 16
    },
    list : {
      flex : 1,
      padding : 16,
      backgroundColor : "blue",
    }
  });
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Flex } from "@chakra-ui/react"

import MainLayout from "../components/MainLayout";
import MealQuery from "../components/MealQuery";
import Card from "../components/Card";
import HistoryList from "../components/HistoryList";

const API_KEY = 'ee6b4684b7084b5c9ef56197d6d483fb';
const API_URL = 'https://api.spoonacular.com/recipes/';

export default function Home() {
  const [recipeData, setRecipeData] = useState(null);
  const [historyData, setHistoryData] = useState([]);
  const [isInvalid, setIsInvalid] = useState(false);

  useEffect(() => {
    const cache = localStorage.getItem('historyData');
    if (cache) {
      setHistoryData(JSON.parse(cache))
    }
  }, []);

  const requestServerApi = (query) => {
    axios.get(
      `${API_URL}complexSearch`,
      {
        params: {
          query,
          number: '1',
          apiKey: API_KEY
        }
      }
    )
      .then((res) => {
        const recipe = res.data.results[0];
        return axios.get(
          `${API_URL}${recipe.id}/information`,
          {
            params: {
              includeNutrition: false,
              apiKey: API_KEY
            }
          }
        )
      })
      .then((res) => {
        const result = {
          ...res.data,
          query
        };
        setRecipeData(result);

        const newHistoryData = [result, ...historyData];
        if (newHistoryData.length > 10) {
          newHistoryData.pop();
        }

        setHistoryData(newHistoryData);
        localStorage.setItem('historyData', JSON.stringify(newHistoryData));
        setIsInvalid(false);
      })
      .catch(() => {
        setIsInvalid(true)
      });
  };

  const getMealData = (mealName) => {
    const query = mealName.trim().toLowerCase().split(' ').join('+');

    const newMeal = historyData.find((item) => {
      return item.query === query;
    });

    if (newMeal) {
      setRecipeData(newMeal)
    } else {
      requestServerApi(query);
    }
  };

  const showCard = (obj) => {
    setRecipeData(obj);
    setIsInvalid(false);
  };

  return (
    <MainLayout title="Ease to cook">
      <Flex flexWrap="wrap" w="100%" maxWidth="900px" alignItems="flex-start" justifyContent="center">
        <Flex flexDirection="column" alignItems="stretch" justifyContent="flex-start" flex="2"  w="100%">
          <MealQuery getMealData={(mealName) => getMealData(mealName)} isInvalid={isInvalid}/>
          {recipeData &&
          <Card recipeData={recipeData}/>
          }
        </Flex>
        <Flex alignItems="center" justifyContent="center" flex="1">
          <HistoryList historyData={historyData} onShowCard={(recipeFromHistory) => showCard(recipeFromHistory)}/>
        </Flex>
      </Flex>
    </MainLayout>
  )
}

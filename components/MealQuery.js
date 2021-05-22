import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function MealQuery() {
  const [recipeData, setRecipeData] = useState(null);
  const [mealName, setMealName] = useState('');

  function getMealData() {

    console.log("go", mealName);

    // fetch(
    //   `https://api.spoonacular.com/mealplanner/generate?apiKey=cb12c08b156c5beddade8b&timeFrame=day&targetCalories=${meal}`
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setRecipeData(data);
    //   })
    //   .catch(() => {
    //     console.log("error");
    //   });
    setMealName('');

  }

  function handleChange(e) {
    setMealName(e.target.value);
  }

  return (
    <>

        <Text fontSize="xl" mb="2" mt="2">
          Provide the meal and get the list of ingredients
        </Text>

        <Box p="6" m="4" borderWidth="1px" rounded="lg">

          <Input onChange={handleChange} value={mealName} placeholder="Provide your meal..."/>
          <Flex flexWrap="wrap" alignItem="center" justifyContent="center" mt="10">
            <Button onClick={getMealData} colorScheme="teal" size="md" isDisabled={!mealName}>
              Find ingredients
            </Button>
            <Button onClick={() => setMealName('')} colorScheme="teal" size="md" isDisabled={!mealName}>
              Clear
            </Button>
          </Flex>

        </Box>

    </>


  )
}

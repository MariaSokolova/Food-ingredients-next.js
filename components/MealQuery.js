import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export default function MealQuery({ getMealData, isInvalid }) {
  const [mealName, setMealName] = useState('');

  function handleChange(e) {
    setMealName(e.target.value);
  }

  const onClean = () => {
    setMealName("");
  };

  return (
      <Box p="6" m="4" borderWidth="1px"
            rounded="lg" >
        <Text fontSize="xl" mb="2" mt="2">
          Provide the meal and get the list of ingredients
        </Text>
        <Input
          onChange={handleChange}
          value={mealName}
          placeholder="Provide your meal..."
          type="text"
          autoFocus
        />
        {isInvalid && <Text fontSize="md" mb="2" mt="2" color="tomato">
          Sorry, we don't have this recipe for you. Please try another meal.
        </Text>}
        <Flex alignItems="center" justifyContent="space-between" mt="10">
          <Button onClick={() => getMealData(mealName)} colorScheme="teal" size="md" isDisabled={!mealName}>
            Find ingredients
          </Button>
          <Button onClick={onClean} colorScheme="teal" size="md" isDisabled={!mealName}>
            Clear
          </Button>
        </Flex>
      </Box>
  )
}



import { UnorderedList, ListItem, Image, Heading, Box, Text, Flex } from "@chakra-ui/react";
import React from "react";

export default function Card({ recipeData }) {
  const { title, extendedIngredients, image } = recipeData;

  return (
      <Box p="6" m="4" borderWidth="1px" rounded="lg">
        <Heading as="h4" align="center" size="lg" mb="2">{title}</Heading>
        <Image src={image} alt={title} mb="4"/>
        <Text fontSize="xl" mb="2" mt="2">
          Ingredients:
        </Text>
        {extendedIngredients && <UnorderedList flexDirection="column">{
          extendedIngredients.map((ingredient) => {
            return <ListItem
              key={ingredient.id}>{ingredient.nameClean} - {ingredient.amount} {ingredient.unit}</ListItem>
          })
        }
        </UnorderedList>}
      </Box>
  )
}

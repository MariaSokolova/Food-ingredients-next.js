import { Box, Heading } from "@chakra-ui/react";
import React from "react";

export default function HistoryList({ historyData, onShowCard }) {

  return (
    <Box p="2" m="4" borderWidth="1px" rounded="lg" minWidth="300px" w="100%">
      <Heading as="h4" align="center" size="lg" mb="2">History</Heading>
      <div>{
        historyData && <Box>{
          historyData.map((recipeFromHistory) => {
            return <Box p="2" m="4"
                        borderWidth="1px"
                        rounded="lg"
                        key={recipeFromHistory.id}
                        onClick={() => onShowCard(recipeFromHistory)}
            >{recipeFromHistory.title}
            </Box>
          })
        }</Box>
      }</div>
    </Box>
  )
}

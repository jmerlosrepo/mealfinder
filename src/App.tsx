import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import MainContent from "./components/MainCOntent";
import { useState } from "react";
import { Category, Meal } from "./types";
import { useHttpData } from "./hooks/useHttpData";

const url = "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

const makeMealUrl = (category: Category) =>
  `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`;

const defaultCategory = { strCategory: "Beef" };

const App = () => {
  const [selectedCategory, setSelectedCategory] =
    useState<Category>(defaultCategory);

  const { loading, data } = useHttpData<Category>(url);
  const { loading: loadingMeal, data: dataMeal } = useHttpData<Meal>(
    makeMealUrl(defaultCategory)
  );

  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"`}
      gridTemplateRows={"60px 1fr"}
      gridTemplateColumns={{ sm: `0 1fr`, md: `250px 1fr` }}
      fontSize={14}
    >
      <GridItem
        boxShadow="lg"
        zIndex="1"
        pos="sticky"
        top="0px"
        pt="7px"
        bg="white"
        area={"header"}
      >
        <Header />
      </GridItem>
      <GridItem
        pos="sticky"
        top="60px"
        left="0"
        p="5"
        area={"nav"}
        height="calc(100vh - 60px)"
        overflowY="auto"
      >
        <SideNav
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={data}
          loading={loading}
        />
      </GridItem>
      <GridItem p="4" bg="gray.100" area={"main"}>
        <MainContent meals={dataMeal} loading={loadingMeal} />
      </GridItem>
    </Grid>
  );
};

export default App;

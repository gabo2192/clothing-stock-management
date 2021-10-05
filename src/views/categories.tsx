import { Container, Heading } from "@chakra-ui/layout";
import MainLayout from "../layouts/main";
import CreateCategory from "../components/forms/create-category";
import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Category } from "../utils/interfaces";
const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response: { categories: Category[] } = await fetch(
          ".netlify/functions/category"
        ).then((res) => res.json());
        setCategories(response.categories);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCategories();
  }, []);
  const addCategory = (category: Category) => {
    setCategories((prev) => [...prev, category]);
  };
  return (
    <MainLayout>
      <Container pt={10}>
        <CreateCategory addCategory={addCategory} />
        <Box mt={6}>
          <Heading as="h4">Categories</Heading>
          <ul>
            {categories.map((category) => (
              <li key={category.id}>{category.name}</li>
            ))}
          </ul>
        </Box>
      </Container>
    </MainLayout>
  );
};

export default Categories;

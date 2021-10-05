import { Heading, Stack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { Category } from "../../utils/interfaces";
import SelectInput from "../inputs/select-input";

const CreateSubcategory = () => {
  const [data, setData] = useState<Category[]>([]);
  const [selectedCategory, setSetelectedCategory] = useState<Category | null>(
    null
  );
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(".netlify/functions/category").then(
          (res) => res.json()
        );
        setData(response.categories);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCategories();
  }, []);
  const handleCategory = (id: string) => {
    const category = data.find((cat) => cat.id === id);
    if (!category) {
      return;
    }
    setSetelectedCategory(category);
  };
  return (
    <Stack>
      <Heading as="h4">Create a subcategory</Heading>
      <SelectInput
        name="categories"
        label="Categories"
        placeholder="Select a Category"
        helper="Please select a category"
        options={data}
        value={selectedCategory}
        handleChange={handleCategory}
      />
    </Stack>
  );
};

export default CreateSubcategory;

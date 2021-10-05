import { v4 as uuid } from "uuid";
import { Button } from "@chakra-ui/button";
import { Heading, Stack } from "@chakra-ui/layout";
import { useState } from "react";
import { Category } from "../../utils/interfaces";
import FieldInput from "../inputs/field-input";

interface CreateCategoryProps {
  addCategory: (category: Category) => void;
}

const CreateCategory: React.FC<CreateCategoryProps> = ({ addCategory }) => {
  const [name, setName] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    addCategory({
      id: uuid(),
      name,
    });
    try {
      const response = await fetch("/.netlify/functions/category", {
        method: "POST",
        body: JSON.stringify({ name }),
      }).then((res) => res.json());
      setName("");
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Stack as="form" onSubmit={handleSubmit} spacing={6}>
      <Heading as="h4">Create a category</Heading>
      <FieldInput
        name="categoryName"
        label="Category Name"
        type="text"
        helper="Add a category name"
        value={name}
        handleChange={setName}
      />
      <Button type="submit">Add Category</Button>
    </Stack>
  );
};
export default CreateCategory;

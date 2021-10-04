import { Box, Container } from "@chakra-ui/layout";
import { useState } from "react";
import DateInput from "../components/date-input";
import FieldInput from "../components/field-input";
import SelectInput from "../components/select-input";
import MainLayout from "../layouts/main";

const CreateProducts = () => {
  const [state, setState] = useState({
    name: "",
    size: "",
    gender: "",
    entryDate: new Date(),
  });
  console.log({ state });
  return (
    <MainLayout>
      <Container pt={10}>
        <Box as="form">
          <FieldInput
            name="productName"
            label="Product Name"
            type="text"
            helper="You need to add a product name"
            value={state.name}
            handleChange={(value: string) =>
              setState((prev) => ({ ...prev, name: value }))
            }
          />
          <SelectInput
            name="size"
            label="Size"
            helper="You need to add a size"
            value={state.size}
            handleChange={(value: string) =>
              setState((prev) => ({ ...prev, size: value }))
            }
            options={[
              {
                text: "S",
                value: "S",
              },
              {
                text: "M",
                value: "M",
              },
              {
                text: "L",
                value: "L",
              },
              {
                text: "XL",
                value: "XL",
              },
            ]}
            placeholder="Choose a size"
          />
          <SelectInput
            name="gender"
            label="Gender"
            helper="You need to add a gender"
            value={state.gender}
            handleChange={(value: string) =>
              setState((prev) => ({ ...prev, gender: value }))
            }
            options={[
              {
                text: "Men",
                value: "men",
              },
              {
                text: "Women",
                value: "Women",
              },
              {
                text: "Girl",
                value: "girl",
              },
              {
                text: "Boy",
                value: "boy",
              },
              {
                text: "Unisex",
                value: "unisex",
              },
              {
                text: "Unisex Child",
                value: "unisex-child",
              },
            ]}
            placeholder="Choose a gender"
          />
          <DateInput
            name="entryDate"
            label="Entry Date"
            handleChange={(value: Date) =>
              setState((prev) => ({ ...prev, entryDate: value }))
            }
            helper="Select an entry date"
            value={state.entryDate}
          />
        </Box>
      </Container>
    </MainLayout>
  );
};

export default CreateProducts;

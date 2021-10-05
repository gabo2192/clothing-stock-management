import { Container } from "@chakra-ui/layout";
import CreateSubcategory from "../components/forms/create-subcategory";

import MainLayout from "../layouts/main";

const Subcategories = () => {
  return (
    <MainLayout>
      <Container>
        <CreateSubcategory />
      </Container>
    </MainLayout>
  );
};

export default Subcategories;

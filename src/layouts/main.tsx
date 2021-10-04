import Header from "../components/header";

const MainLayout: React.FC = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default MainLayout;

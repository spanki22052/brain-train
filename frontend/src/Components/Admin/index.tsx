import { useLocation } from "react-router";
import AddProductPage from "./AddProductPage";
import RemoveProductPage from "./RemoveProductPage";
import { AdminMainBlock } from "./styles";

const Admin = () => {
  const pageState = useLocation().pathname;

  return (
    <AdminMainBlock>
      {pageState === "/admin/add" && <AddProductPage />}
      {pageState === "/admin/remove" && <RemoveProductPage />}
    </AdminMainBlock>
  );
};
export default Admin;

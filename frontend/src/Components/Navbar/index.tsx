import { gql, useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ProductData } from "../Interfaces/products.interface";
import { updateDataAction } from "../Redux/actions/foodtypesActions";
import { updateProductsAction } from "../Redux/actions/productsTypesAction";
import { Link } from "react-router-dom";

const GET_FOOD_TYPES = gql`
  query {
    foodtypes
  }
`;

interface FoodTypesData {
  foodtypes: string[];
}

export const GET_PRODUCTS_LIST = gql`
  query {
    showAll {
      title
      id
      description
      price
      image
      dates
      foodtype
    }
  }
`;

const NavbarComponent = () => {
  const foodTypesData = useQuery<FoodTypesData>(GET_FOOD_TYPES);
  const productData = useQuery<ProductData>(GET_PRODUCTS_LIST);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!foodTypesData.loading)
      foodTypesData.data !== undefined &&
        dispatch(updateDataAction(foodTypesData.data.foodtypes));
  }, [foodTypesData.data, foodTypesData.loading, dispatch]);

  useEffect(() => {
    if (!productData.loading)
      productData.data !== undefined &&
        dispatch(updateProductsAction(productData.data.showAll));
  }, [productData.data, productData.loading, dispatch]);

  return (
    <div className="navbar-component">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/">React-Bootstrap</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/cart">Cart</Link>
              </Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;

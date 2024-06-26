import { Component } from "react";

import { ThreeDots } from "react-loader-spinner";

import axios from "axios";

import Header from "../Header";

import ProductCard from "../ProductsCard";

import "./index.css";
class Bags extends Component {
  state = { productsData: [], isLoading: true };
  componentDidMount() {
    this.getElectronics();
  }

  getElectronics = async () => {
    try {
      const response = await axios.get(`/bags.json`);
      if (response.status === 200) {
        const formatData = response.data.map((each) => ({
          id: each.id,
          title: each.title,
          price: each.price,
          imageUrl: each.image_url,
          discount: each.discount,
        }));

        this.setState({ productsData: formatData, isLoading: false });
      } else {
        console.log("Error while fetching");
      }
    } catch (e) {
      console.log(e);
    }
  };

  renderLoader = () => (
    <div className="loader-container">
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#ffffff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperClass=""
      />
    </div>
  );

  renderSuccessView = () => {
    const { productsData } = this.state;

    return (
      <ul className="products-container">
        {productsData.map((each) => (
          <ProductCard productDetails={each} key={each.id} />
        ))}
      </ul>
    );
  };
  render() {
    const { isLoading } = this.state;
    return (
      <div className="bags-route">
        <Header />

        {isLoading ? this.renderLoader() : this.renderSuccessView()}
      </div>
    );
  }
}

export default Bags;

import "./Home.css";
import React, { Fragment } from "react";
import HomeBody from "./HomeBody";
import LoadingItem from "./LoadingItem";
import { typicalSpinner } from "./loaders";
const Home = () => {
  return (
    <Fragment>
      <section className="home">
        <header>
          LOADING LAB
        </header>
        <HomeBody />
      </section>
    </Fragment>
  );
};

export default Home;

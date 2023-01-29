import { Fragment } from "react";
import "./HomeBody.css";
import LoadingItem from "./LoadingItem";
import { loaders } from "./loaders";
const HomeBody = (props) => {
  return (
    <Fragment>
      <div className="home-body">
        {loaders.map((loader, index) => (
          <LoadingItem key={index} html={loader.html} css={loader.css} />
        ))}
      </div>
    </Fragment>
  );
};

export default HomeBody;

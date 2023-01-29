import React, {useState} from "react";
import './LoadingItem.css'
import Source from "./Source";
const LoadingItem = (props) => {
const [detailsIsOpen, setDetailsIsOpen] = useState(false)
    function sourceHandler(){
        setDetailsIsOpen(e => !e)
    }

  const source = "<Source/>";
  return (
    <div className="loading-item">
       {detailsIsOpen && <Source onClick={sourceHandler} html={props.html} css={props.css}/>}
      <div className="loader">
      {props.html}
      <style>
        {props.css}
      </style>
      </div>
      <footer onClick={sourceHandler}>{source}</footer>
    </div>
  );
};

export default LoadingItem;

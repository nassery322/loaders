import React, { useState, useEffect } from "react";
import DetailsModal from "../UI/DetailsModal";
import "./Source.css";
import ReactDOMServer from "react-dom/server";
import ClipboardJS from "clipboard";

const Source = (props) => {
  const htmlCode = ReactDOMServer.renderToStaticMarkup(props.html);

  const [htmlCopied, setHtmlCopied] = useState(false);
  const [cssCopied, setCssCopied] = useState(false);
  useEffect(() => {
    new ClipboardJS(".copy-html");
    new ClipboardJS(".copy-css");
  }, []);
  const copyHtml = () => {
    setHtmlCopied(true);
    try {
        navigator.clipboard.writeText(htmlCode);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setHtmlCopied(false);
        }, 3000);
      }
  };

  const copyCss = () => {
    setCssCopied(true);
    try {
        navigator.clipboard.writeText(htmlCode);
      } catch (error) {
        console.error(error);
      } finally {
        setTimeout(() => {
          setHtmlCopied(false);
        }, 3000);
      }
  };
  const styles = { color: "#1abc9c" };

  return (
    <DetailsModal onClick={props.onClick} onClose={props.onClick}>
      <section className="source-sections">
        <section className="html-section">
          <div className="html-interface">HTML :</div>
          <div className="html-copy">
            <button
              onClick={copyHtml}
              className="copy-html"
              data-clipboard-text={htmlCode}
            >
              <i
                className="fa-solid fa-copy"
                style={htmlCopied ? styles : {}}
              ></i>
            </button>
          </div>
          <code>
            <pre>{htmlCode}</pre>
          </code>
        </section>
        <section className="css-section">
          <div className="css-interface">CSS :</div>
          <div className="css-copy">
            <button
              onClick={copyCss}
              className="copy-css"
              data-clipboard-text={props.css}
            >
              <i
                className="fa-solid fa-copy"
                style={cssCopied ? styles : {}}
              ></i>
            </button>
          </div>
          <pre>{props.css}</pre>
        </section>
      </section>
    </DetailsModal>
  );
};

export default Source;

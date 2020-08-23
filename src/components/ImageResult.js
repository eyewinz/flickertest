import React from "react";
import "./ImageResult.css";

const getResolvedAuthor = (author) => {
  const resolvedAuthor = author
    .replace('nobody@flickr.com ("', "")
    .replace('")', "");
  return resolvedAuthor;
};

const ImageResult = (props) => {
  let { resultItems } = props;
  return (
    <div class="resultBox">
      {resultItems.map((item) => {
        return (
          <div class="gallery">
            <a target="_blank" href={item.link}>
              <img key={item.media.m} src={item.media.m} />
            </a>
            <div class="desc">By: {getResolvedAuthor(item.author)} </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageResult;

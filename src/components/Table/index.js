import React, { Component } from "react";
import Button from "../Button";

const Table = ({ list, onDismiss }) => {
  return (
    <div className="table">
      {list.map(item => (
        <div key={item.objectID} className="table-row">
          <span style={{ width: "55%" }}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={{ width: "20%" }}>{item.created_at}</span>
          <span style={{ width: "10%" }}>{item.author}</span>
          <span style={{ width: "5%" }}>{item.num_comments}</span>
          <span style={{ width: "5%" }}>{item.points}</span>
          <span style={{ width: "5%" }}>
            <Button
              onClick={() => onDismiss(item.objectID)}
              className="button-inline"
            >
              Dismiss
            </Button>
          </span>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Table;

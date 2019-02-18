import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { sortBy } from "lodash";

const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, "title"),
  AUTHOR: list => sortBy(list, "author"),
  COMMENTS: list => sortBy(list, "num_comments").reverse(),
  POINTS: list => sortBy(list, "points").reverse()
};

const Sort = ({ sortKey, onSort, children }) => (
  <Button onClick={() => onSort(sortKey)}>{children}</Button>
);

const Table = ({ list, sortKey, onSort, onDismiss }) => {
  return (
    <div className="table">
      <div className="table-header">
        <span style={{ width: "55%" }}>
          <Sort sortKey="TITLE" onSort={onSort}>
            Title
          </Sort>
        </span>

        <span style={{ width: "15%" }}>
          <Sort sortKey="AUTHOR" onSort={onSort}>
            Author
          </Sort>
        </span>

        <span style={{ width: "10%" }}>
          <Sort sortKey="COMMENTS" onSort={onSort}>
            Comments
          </Sort>
        </span>

        <span style={{ width: "10%" }}>
          <Sort sortKey="POINTS" onSort={onSort}>
            Points
          </Sort>
        </span>

        <span style={{ width: "10%" }}>Archive</span>
      </div>

      {SORTS[sortKey](list).map(item => (
        <div key={item.objectID} className="table-row">
          <span style={{ width: "55%" }}>
            <a href={item.url}>{item.title}</a>
          </span>
          {/* <span style={{ width: "20%" }}>{item.created_at}</span> */}
          <span style={{ width: "15%" }}>{item.author}</span>
          <span style={{ width: "10%" }}>{item.num_comments}</span>
          <span style={{ width: "10%" }}>{item.points}</span>
          <span style={{ width: "10%" }}>
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

// Table.propTypes = {
//   list: PropTypes.array.isRequired,
//   onDismiss: PropTypes.func.isRequired
// };

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number
    })
  ).isRequired,
  onDismiss: PropTypes.func.isRequired
};

export default Table;

import React from "react";
import PropTypes from "prop-types";

const SortFilter = ({ filter, filterChanged }) => {
  return (
    <div className="column">
      Sort by&nbsp;&nbsp;
      <div className="ui buttons">
        <button
          onClick={filterChanged}
          className={filter === "timestamp" ? "ui button disabled" : "ui button"}
        >
          Date
        </button>
        <div className="or" />
        <button
          onClick={filterChanged}
          className={filter === "voteScore" ? "ui button disabled" : "ui button"}
        >
          Votes
        </button>
      </div>
    </div>
  );
};

SortFilter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterChanged: PropTypes.func.isRequired
};

export default SortFilter;

import React, { Component } from "react";
import axios from "axios";

import "./index.css";
import {
  DEFAULT_QUERY,
  DEFAULT_TAG,
  DEFAULT_HPP,
  PATH_BASE,
  PATH_SEARCH,
  PARAM_SEARCH,
  PARAM_TAG,
  PARAM_PAGE,
  PARAM_HPP
} from "../../constants";

import { ButtonWithLoading } from "../Button";
import Search from "../Search";
import Table from "../Table";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSpinner,
  faAngleUp,
  faAngleDown
} from "@fortawesome/free-solid-svg-icons";

library.add(faSearch, faSpinner, faAngleUp, faAngleDown);

const updateSearchTopStoriesState = (hits, page) => prevState => {
  const { searchKey, results } = prevState;
  const oldHits = results && results[searchKey] ? results[searchKey].hits : [];
  const updatedHits = [...oldHits, ...hits];
  return {
    results: {
      ...results,
      [searchKey]: { hits: updatedHits, page }
    },
    isLoading: false
  };
};

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);
    this.state = {
      message: "Start to Search for the Latest Hacker News Now!!!",
      results: null,
      searchKey: "",
      searchTerm: DEFAULT_QUERY,
      error: null,
      isLoading: false
    };

    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });
    this.fetchSearchTopStories(searchTerm);
  }

  componentWillMount() {
    this._isMounted = false;
  }

  needsToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm];
  }

  setSearchTopStories(result) {
    const { hits, page } = result;
    this.setState(updateSearchTopStoriesState(hits, page));
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    this.setState({ isLoading: true });
    const url =
      PATH_BASE +
      PATH_SEARCH +
      "?" +
      PARAM_SEARCH +
      searchTerm +
      "&" +
      PARAM_TAG +
      DEFAULT_TAG +
      "&" +
      PARAM_PAGE +
      page +
      "&" +
      PARAM_HPP +
      DEFAULT_HPP;

    // console.log(url);

    axios(url)
      .then(result => this._isMounted && this.setSearchTopStories(result.data))
      .catch(error => this._isMounted && this.setState({ error }));

    // fetch(url)
    //   .then(response => response.json())
    //   .then(result => this.setSearchTopStories(result))
    //   .catch(error => this.setState({ error }));
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });

    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }

    event.preventDefault();
  }

  onDismiss(id) {
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];

    const isNotId = item => item.objectID !== id;
    const updatedHits = hits.filter(isNotId);
    this.setState({
      results: { ...results, [searchKey]: { hits: updatedHits, page } }
    });
  }

  render() {
    const {
      searchTerm,
      message,
      results,
      searchKey,
      error,
      isLoading
    } = this.state;
    const page =
      (results && results[searchKey] && results[searchKey].page) || 0;
    const list =
      (results && results[searchKey] && results[searchKey].hits) || [];

    return (
      <div className="page">
        <div className="div">
          <h2>{message}</h2>
        </div>

        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
            <FontAwesomeIcon icon="search" /> Search
          </Search>
        </div>

        {error ? (
          <div className="interactions">
            <p>Something went wrong!</p>
          </div>
        ) : (
          <Table list={list} onDismiss={this.onDismiss} />
        )}

        <div className="interactions">
          <ButtonWithLoading
            isLoading={isLoading}
            onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
          >
            More ...
          </ButtonWithLoading>
        </div>
      </div>
    );
  }
}

export default App;

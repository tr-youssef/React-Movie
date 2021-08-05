import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import { Wrapper, Content } from "./SearchBar.styles.js";
import searchIcon from "../../images/search-icon.svg";

const SearchBar = ({ setSearchterm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchterm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchterm, state]);
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

SearchBar.propTypes = {
  setSearchterm: PropTypes.func,
};

export default SearchBar;

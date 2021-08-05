import { calcTime, convertMoney } from "../../Helpers.js";
import PropTypes from "prop-types";
import { Wrapper, Content } from "./MovieInforBar.styles.js";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>Running time :{calcTime(time)}</p>
      </div>
      <div className="column">
        <p>Budget :{convertMoney(budget)}</p>
      </div>
      <div className="column">
        <p>Revenue:{convertMoney(revenue)}</p>
      </div>
    </Content>
  </Wrapper>
);

MovieInfoBar.propTypes = {
  time: PropTypes.number,
  budget: PropTypes.number,
  revenue: PropTypes.number,
};

export default MovieInfoBar;

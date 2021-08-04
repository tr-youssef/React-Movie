import RMDBLogo from "../../images/react-movie-logo.svg";
import TMDBLogo from "../../images/tmdb_logo.svg";
import { Link } from "react-router-dom";

import { Wrapper, Content, LogoImg, TMDBLogoImg } from "./Header.styles";

const Header = () => (
  <Wrapper>
    <Content>
      <Link to="/">
        <LogoImg src={RMDBLogo} alt="RMDB-Logo" />
      </Link>
      <TMDBLogoImg src={TMDBLogo} alt="TMDB-Logo" />
    </Content>
  </Wrapper>
);

export default Header;

import styled from "styled-components";
import { BsFillMicFill } from "react-icons/bs";
import { IoIosSettings, IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const NavBar = styled.header`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  align-items: center;
  padding: 14px 10px;

  > div:nth-of-type(1) {
    h3 {
      margin: 10px 0;
      color: #133b5c;
    }
  }
  > div:nth-of-type(2) {
    display: flex;

    > span:nth-of-type(1) {
      margin-right: 15px;
    }
  }
`;

const containerVariants = {
  hidden: {
    y: -100,
  },
  visible: {
    y: 0,
    transition: { duration: 1, stiffness: 500 },
  },
};

const Header = ({ home }) => (
  <motion.div variants={containerVariants} initial="hidden" animate="visible">
    <NavBar data-testid="nav">
      {!home && (
        <NavLink to="/">
          <IoIosArrowBack size="25px" color="#133B5C" />
        </NavLink>
      )}
      <div className="text-center flex justify-center">
        <h3 className="text-center flex justify-center">
          {home ? "Stock Metrics" : "Company Details"}
        </h3>
      </div>
    </NavBar>
  </motion.div>
);

Header.propTypes = {
  home: PropTypes.bool.isRequired,
};

export default Header;

import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterSection = styled("footer")`
  background: rgba(88, 3, 173, 0.01)
  padding: 2.5rem 0;
`;

export const Title = styled("h4")`
  font-size: 52px;
  text-transform: capitalize;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 3rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #ffffff;
  }
`;

export const Extra = styled("section")`
  background: rgba(35, 138, 108, 0);
  position: relative;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled("div")`
  display: flex;
  position: relative;
`;

export const Para = styled("div")`
  color: #ffffff;
  font-size: 38px;
  width: 70%;
`;

export const Large = styled(Link)<any>`
  font-size: 38px;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  text-transform: capitalize;
  line-height: 48px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: rgb(255, 130, 92);
    text-underline-position: under;
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const Chat = styled("p")`
  color: #fbb500;
  max-width: fit-content;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.6s ease-in-out;

  &:hover {
    border-bottom: 1px solid rgb(255, 130, 92);
    color: rgb(255, 130, 92);
    text-decoration: rgb(255, 130, 92) wavy underline;
  }
`;

export const Empty = styled("div")`
  position: relative;
  height: 53px;
`;

export const FooterContainer = styled("div")`
  max-width: 510px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  a {
    &:hover,
    &:active,
    &:focus {
      -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
      transform: scale(1.1);
    }
  }

  @media screen and (max-width: 769px) {
    width: auto;

    a:not(:last-child) {
      display: none;
    }
  }

  div {
    cursor: pointer;
    margin-right: 15px;
    width: 25px;
    height: 25px;

    &:hover {
      fill: rgb(255, 130, 92);
    }
  }
`;

export const Language = styled("h4")`
  font-size: 52px;
  text-transform: capitalize;
  color: #ffffff;
  border-bottom: 1px solid #ffffff;


  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;

  }
`;

export const Label = styled("label")`
  font-size: 52px;
  text-transform: capitalize;
  color: #ffffff;
  display: block;
  margin-bottom: 2rem;
  font-family: "m5x7", serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled("div")<any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;

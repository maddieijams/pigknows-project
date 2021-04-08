import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import logo from "./assets/logo-16.svg";

interface IProps {
  setRefreshClicked: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation({setRefreshClicked}: IProps) {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Random Users
      </Navbar.Brand>
      <Nav.Link className="ml-auto" onClick={() => setRefreshClicked(true)}>
        Refresh List
      </Nav.Link>
    </Navbar>
  );
}

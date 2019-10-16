import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Modal,
  InputGroup,
  FormControl,
  Tab,
  Nav
} from "react-bootstrap";
import Web3Provider from "providers/Web3Provider";

const renderHistory = history => {
  return history.map(item => (
    <tr key={item.date}>
      <td>{item.date}</td>
      <td className="text-center"> </td>
      <td className="text-center">{item.amount}</td>
      <td
        className={`text-center text-${
          item.type === "Deposit" ? "primary" : "secondary"
        }`}
      >
        {item.type}
      </td>
    </tr>
  ));
};

const MyProfile = () => {
  const [show, setShow] = useState(false);
  const [showD, setShowD] = useState(false);
  const [value, setValue] = useState(0);
  const handleCloseDeposit = fn => {
    fn();
    setShowD(false);
  };
  const handleShowDeposit = () => setShowD(true);
  const handleCloseWithdraw = fn => {
    fn();
    setShow(false);
  };
  const handleShowWithdraw = () => setShow(true);

  const handleModalButton = fn => {
    fn(value);
    setValue(0);
  };

  return (
    <Web3Provider.Consumer>
      {({
        state: { user, success, message },
        actions: { depositBalance, withdrawBalance, resetMessage }
      }) => (
        <Container className="py-5">
          <h1 className="text-center mb-5">My Profile</h1>
          {user && user.address && (
            <Row className="justify-content-md-center">
              <Col lg="auto" className="text-center">
                <Tab.Container
                  id="left-tabs-example"
                  defaultActiveKey="rif-tab"
                >
                  <Nav
                    variant="tabs"
                    className="justify-content-center custom-tabs d-inline-flex"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="rif-tab">RIF</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="rbtc-tab">RBTC</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <ul className="list-unstyled text-center">
                    <li>
                      <Tab.Content>
                        <Tab.Pane eventKey="rif-tab">
                          <div className="d-inline-block rif-card text-left">
                            <div className="front">
                              <div className="strip-bottom"></div>
                              <div className="strip-top"></div>
                              <svg
                                className="logo"
                                x="0"
                                y="0"
                                viewBox="0 0 600 400"
                              >
                                <g>
                                  <path
                                    fill="#149dd9"
                                    d="M95.5 163.3H149c.3 0 .6-.3.6-.6v-17.3c0-.3-.3-.6-.6-.6H95.5c-.3 0-.6.3-.6.6v17.3c0 .4.3.6.6.6zm36.2-31.7H149c.3 0 .6-.3.6-.6v-17.3c0-.3-.3-.6-.6-.6h-17.3c-.3 0-.6.3-.6.6V131c0 .3.3.6.6.6zm-74 76.7H40.4c-.3 0-.6.3-.6.6v17.3c0 .3.3.6.6.6h17.3c.3 0 .6-.3.6-.6v-17.3c0-.3-.3-.6-.6-.6zm63.5 0h-17.3c-.3 0-.6.3-.6.6v53.5c0 .3.3.6.6.6h17.3c.3 0 .6-.3.6-.6v-53.5c0-.3-.3-.6-.6-.6zM227 191h17.3c.3 0 .6-.3.6-.6v-17.3c0-.3-.3-.6-.6-.6H227c-.3 0-.6.3-.6.6v17.3c0 .4.2.6.6.6zm-31.8 0h17.3c.3 0 .6-.3.6-.6v-53.5c0-.3-.3-.6-.6-.6h-17.3c-.3 0-.6.3-.6.6v53.5c0 .4.3.6.6.6zm-63.5-91.2H149c.3 0 .6-.3.6-.6V81.9c0-.3-.3-.6-.6-.6h-17.3c-.3 0-.6.3-.6.6v17.3c0 .4.3.6.6.6zM89.5 208.3H72.2c-.3 0-.6.3-.6.6v17.3c0 .3.3.6.6.6h17.3c.3 0 .6-.3.6-.6v-17.3c-.1-.3-.3-.6-.6-.6zM221 236.1h-53.5c-.3 0-.6.3-.6.6V254c0 .3.3.6.6.6H221c.3 0 .6-.3.6-.6v-17.3c-.1-.4-.3-.6-.6-.6zm36.5-31.5h-75.8c-.3 0-.6.3-.6.6V222c0 .3.3.6.6.6h75.8c.3 0 .6-.3.6-.6v-16.8c0-.4-.3-.6-.6-.6zm-72.8 63.2h-17.3c-.3 0-.6.3-.6.6v17.3c0 .3.3.6.6.6h17.3c.3 0 .6-.3.6-.6v-17.3c0-.3-.2-.6-.6-.6zm-49.4-90.4c0-.3-.3-.6-.6-.6H58.9c-.3 0-.6.3-.6.6v16.8c0 .3.3.6.6.6h75.8c.3 0 .6-.3.6-.6v-16.8zm140.7-4.8h-17.3c-.3 0-.6.3-.6.6v17.3c0 .3.3.6.6.6H276c.3 0 .6-.3.6-.6v-17.3c0-.4-.2-.6-.6-.6zm-123.3 50h-16.8c-.3 0-.6.3-.6.6V299c0 .3.3.6.6.6h16.8c.3 0 .6-.3.6-.6v-75.8c0-.3-.3-.6-.6-.6zm28.4-46.3v-75.9c0-.3-.3-.6-.6-.6h-16.8c-.3 0-.6.3-.6.6v75.9c0 .3.3.6.6.6h16.8c.3 0 .6-.3.6-.6zm3.6 123.3h-17.3c-.3 0-.6.3-.6.6v17.3c0 .3.3.6.6.6h17.3c.3 0 .6-.3.6-.6v-17.3c0-.4-.2-.6-.6-.6z"
                                  />
                                  <path
                                    fill="white"
                                    d="M385.9 172.5h-26.6c-28.7 0-45.2 20.4-45.2 48.8l-.2 95.3c0 .8.7 1.5 1.5 1.5h33.2c.8 0 1.5-.7 1.5-1.5l-1.1-94.3c0-11.7 6.5-18.1 18.4-18.1h18.5c.8 0 1.5-.7 1.5-1.5V174c0-.8-.7-1.5-1.5-1.5zm65.6.9h-33.2c-.8 0-1.5.7-1.5 1.5v141.7c0 .8.7 1.5 1.5 1.5h33.2c.8 0 1.5-.7 1.5-1.5V174.8c0-.8-.6-1.4-1.5-1.4zm.9-61h-35c-.3 0-.6.3-.6.6v35c0 .3.3.6.6.6h35c.3 0 .6-.3.6-.6v-35c0-.4-.2-.6-.6-.6zm107.4 64.4c0-.8-.7-1.5-1.5-1.5h-37v-14.5c0-11.7 6.5-18.1 18.4-18.1H558c.8 0 1.5-.7 1.5-1.5v-28.7c0-.8-.7-1.5-1.5-1.5h-26.4c-28.7 0-45.2 20.4-45.2 48.8l-.2 156.8c0 .8.7 1.5 1.5 1.5h33.2c.8 0 1.5-.7 1.5-1.5V206.4h35.9c.8 0 1.5-.7 1.5-1.5v-28.1z"
                                  />
                                </g>
                              </svg>

                              <div className="investor">
                                Balance: <strong>{user.balance}</strong>
                              </div>
                              <div className="chip">
                                <div className="chip-line"></div>
                                <div className="chip-line"></div>
                                <div className="chip-line"></div>
                                <div className="chip-line"></div>
                                <div className="chip-main"></div>
                              </div>
                              <svg
                                className="wave"
                                viewBox="0 3.71 26.959 38.787"
                                width="26.959"
                                height="38.787"
                                fill="white"
                              >
                                <path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z"></path>
                                <path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z"></path>
                                <path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z"></path>
                              </svg>
                              <div className="card-number">
                                <div className="section">
                                  <Nav.Link
                                    target="blank"
                                    href={`https://explorer.rsk.co/address/${user.address}`}
                                  >
                                    {user.address.slice(0, 9)}
                                    ....
                                    {user.address.slice(33, 42)}
                                  </Nav.Link>
                                </div>
                              </div>

                              <div className="card-holder">
                                {user.rskAddress}
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="rbtc-tab">
                          <div className="d-inline-block rsk-card text-left">
                            <div className="front">
                              <div className="strip-bottom"></div>
                              <div className="strip-top"></div>

                              <svg
                                className="logo"
                                x="0px"
                                y="0px"
                                viewBox="0 0 303 167.8"
                              >
                                <g>
                                  <g>
                                    <path
                                      fill="#FFFFFF"
                                      d="M123.5,135l0-59.1l12.1-1.5l1.9,9.3c4-6.4,9.7-9.5,17.3-9.5c1.6,0,2.9,0.1,3.9,0.2l-0.2,12.1    c-1.5-0.2-3-0.3-4.6-0.3c-5.3,0-9.3,1.4-11.9,4.2c-2.6,2.8-3.9,6.8-3.9,11.8V135H123.5z"
                                    />
                                    <path
                                      fill="#FFFFFF"
                                      d="M186.3,136.1c-8.9,0-16.1-1.5-21.4-4.6l1.5-10.9c2.4,1.3,5.5,2.5,9.3,3.6c3.7,1,7.2,1.6,10.3,1.6    c3.2,0,5.7-0.6,7.5-1.8c1.8-1.2,2.7-2.9,2.7-5.3c0-2.1-0.8-3.7-2.5-5s-4.9-2.7-9.6-4.5c-1.6-0.6-2.7-1-3.1-1.2    c-5.6-2.2-9.6-4.6-12.1-7.2c-2.5-2.7-3.7-6.3-3.7-10.8c0-5.5,2-9.7,6-12.7c4-2.9,9.5-4.4,16.7-4.4c7.7,0,14.5,1.5,20.3,4.4    l-3.6,10c-5.8-2.7-11.3-4-16.5-4c-2.9,0-5.2,0.5-6.8,1.5s-2.5,2.5-2.5,4.4c0,1.9,0.8,3.3,2.4,4.4c1.6,1,4.7,2.4,9.3,4.1    c0.1,0,0.6,0.2,1.4,0.5c0.8,0.3,1.4,0.5,1.9,0.7c5.5,2,9.6,4.4,12.2,7.2c2.6,2.8,3.9,6.5,3.9,11c0,6.1-2.1,10.7-6.2,14.1    C199.6,134.4,193.8,136.1,186.3,136.1z"
                                    />
                                    <polygon
                                      fill="#FFFFFF"
                                      points="250.1,100.5 274.8,74.4 257.6,74.4 232.9,99.8 232.9,54.6 218.5,57.3 218.5,135 232.9,135 232.9,135     232.9,118.6 240.9,110.1 258.9,135 276.4,135   "
                                    />
                                  </g>
                                  <g>
                                    <path
                                      fill="#FFFFFF"
                                      d="M109.8,75.7c-0.4-0.2-11-5.8-19.9-0.7c-7.1,4.1-8.6,12.4-8.8,15.8l-3.3,1.9c-1.6-1.6-3.9-2.6-6.4-2.6    c-2.5,0-4.7,1-6.3,2.6L50,84c0.2-0.7,0.3-1.4,0.3-2.2c0-4.2-2.8-7.7-6.6-8.8v-5.4c4.4-2.8,18.4-13.1,18.4-29.5    C62.1,19.3,43.3,7.5,42.5,7l-1.3-0.8L39.8,7C39,7.5,20.3,19.3,20.3,38.2c0,16.4,14,26.6,18.4,29.5V73c-3.8,1.1-6.6,4.6-6.6,8.8    c0,0.8,0.1,1.5,0.3,2.2l-15.1,8.7c-1.6-1.6-3.9-2.6-6.3-2.6c-5,0-9.1,4.1-9.1,9.1c0,4.1,2.8,7.7,6.6,8.8v18.1    c-3.8,1.1-6.6,4.6-6.6,8.8c0,5,4.1,9.1,9.1,9.1c2.7,0,5.1-1.1,6.7-3l14.7,8.5c-0.2,0.7-0.3,1.4-0.3,2.2c0,5,4.1,9.1,9.1,9.1    c5,0,9.1-4.1,9.1-9.1c0-0.8-0.1-1.5-0.3-2.2l14.7-8.5c1.7,1.8,4.1,3,6.7,3c5,0,9.1-4.1,9.1-9.1c0-4.1-2.8-7.7-6.6-8.8V108    c3.8-1.1,6.6-4.6,6.6-8.8c0-0.7-0.1-1.5-0.2-2.1l3.3-1.9c1.9,0.9,5.7,2.4,10,2.4c2.6,0,5.4-0.6,8.2-2.1c8.9-5.1,9.4-17.1,9.4-17.5    l0-1.6L109.8,75.7z M74,102.5c-0.7,0.6-1.6,0.9-2.5,0.9c-0.5,0-1-0.1-1.4-0.3c-0.4-0.1-0.8-0.3-1.1-0.6c-0.8-0.6-1.4-1.6-1.5-2.6    c0-0.2,0-0.4,0-0.6c0-0.2,0-0.3,0-0.5c0.2-1.5,1.2-2.7,2.5-3.3c0.5-0.2,1-0.3,1.5-0.3c0.6,0,1.1,0.1,1.6,0.3    c1.5,0.6,2.5,2.1,2.5,3.8c0,0.2,0,0.4-0.1,0.7C75.3,101,74.7,101.9,74,102.5z M75.5,134.9c0,2.2-1.8,4.1-4.1,4.1    c-0.8,0-1.5-0.2-2.1-0.6c-1.2-0.7-1.9-2-1.9-3.5c0,0,0-0.1,0-0.1v0c0-0.4,0.1-0.9,0.2-1.2c0.3-0.7,0.7-1.4,1.3-1.8    c0.5-0.4,1.1-0.7,1.8-0.8c0.2,0,0.5-0.1,0.7-0.1c1,0,1.8,0.3,2.5,0.9C74.9,132.5,75.5,133.6,75.5,134.9z M68.9,126.2    c-1.2,0.4-2.4,1-3.3,1.8L50.1,119v0c0.1-0.6,0.2-1.2,0.2-1.8c0-0.9-0.1-1.7-0.4-2.5l15.2-8.8c1,1,2.3,1.8,3.8,2.2V126.2z     M41.2,155.8c-2,0-3.7-1.5-4-3.5c0-0.2,0-0.4,0-0.6c0-1.7,1.1-3.2,2.5-3.8c0.5-0.2,1-0.3,1.5-0.3c0.5,0,1.1,0.1,1.5,0.3    c1.5,0.6,2.5,2.1,2.5,3.8c0,0.2,0,0.4,0,0.6C44.9,154.3,43.2,155.8,41.2,155.8z M32.2,119l-15.5,8.9c-1-0.8-2.1-1.4-3.3-1.8V108    c1.5-0.4,2.7-1.2,3.8-2.2l15.2,8.8c-0.2,0.8-0.4,1.7-0.4,2.6C32,117.8,32.1,118.4,32.2,119L32.2,119z M15,134.9    c0,1.5-0.8,2.8-1.9,3.5c-0.6,0.4-1.3,0.6-2.1,0.6c-2.2,0-4.1-1.8-4.1-4.1c0-1.3,0.6-2.5,1.5-3.2c0.7-0.6,1.6-0.9,2.5-0.9    c0.2,0,0.5,0,0.7,0.1c0.7,0.1,1.3,0.4,1.8,0.8c0.6,0.5,1.1,1.1,1.3,1.8c0.1,0.4,0.2,0.8,0.2,1.3C15,134.8,15,134.9,15,134.9z     M6.8,99.3c0-2.2,1.8-4.1,4.1-4.1c0.5,0,1,0.1,1.5,0.3c1.3,0.5,2.3,1.7,2.5,3.2c0,0.2,0,0.4,0,0.6c0,0.2,0,0.4,0,0.6    c-0.1,1.1-0.7,2-1.5,2.6c-0.3,0.2-0.6,0.4-1,0.6c-0.5,0.2-1,0.3-1.5,0.3c-1,0-1.8-0.3-2.5-0.9C7.4,101.7,6.8,100.6,6.8,99.3z     M38.6,78.6c0.7-0.5,1.6-0.9,2.5-0.9c0.9,0,1.8,0.3,2.5,0.9c0.8,0.6,1.3,1.6,1.5,2.6c0,0.2,0,0.4,0,0.6c0,1.3-0.6,2.5-1.6,3.2    c-0.3,0.2-0.7,0.4-1,0.6c-0.5,0.2-1,0.3-1.5,0.3c-0.5,0-1-0.1-1.5-0.3c-0.4-0.1-0.7-0.3-1-0.6c-0.9-0.7-1.6-1.9-1.6-3.2    c0-0.2,0-0.4,0-0.6C37.3,80.1,37.8,79.2,38.6,78.6z M45.2,117.4c0,1.2-0.6,2.3-1.5,3c-0.2,0.1-0.4,0.3-0.6,0.4    c-0.6,0.3-1.2,0.5-1.9,0.5c-0.7,0-1.3-0.2-1.9-0.5c-0.2-0.1-0.4-0.2-0.6-0.4c-0.9-0.7-1.5-1.8-1.5-3.1c0,0,0-0.1,0-0.1    c0-0.4,0-0.7,0.1-1.1c0.2-0.9,0.7-1.6,1.4-2.1c0.4-0.3,1-0.6,1.5-0.7c0.3-0.1,0.7-0.1,1-0.1c0.4,0,0.7,0,1.1,0.1    c0.5,0.1,1,0.4,1.5,0.7c0.7,0.5,1.2,1.3,1.4,2.1c0.1,0.3,0.2,0.7,0.2,1.1C45.2,117.3,45.2,117.3,45.2,117.4L45.2,117.4z     M62.6,97.1c-0.2,0.7-0.3,1.4-0.3,2.2c0,0.8,0.1,1.5,0.3,2.3l-15.4,8.9c-1-0.9-2.2-1.6-3.5-2V90.6c1.5-0.4,2.7-1.2,3.8-2.2    L62.6,97.1z M25.3,38.2c0-13.4,11.8-23.1,15.9-26c4,2.9,15.9,12.6,15.9,26c0,11.2-8.3,19.4-13.3,23.2V40.3c0-1.4-1.1-2.5-2.5-2.5    c-1.4,0-2.5,1.1-2.5,2.5v21.2C33.6,57.6,25.3,49.5,25.3,38.2z M34.8,88.4c1.1,1,2.3,1.8,3.8,2.2v17.9c-1.3,0.4-2.5,1-3.5,1.9    l-15.4-8.9c0.2-0.7,0.3-1.4,0.3-2.2s-0.1-1.5-0.3-2.2L34.8,88.4z M19.9,136.5c0.1-0.5,0.1-1.1,0.1-1.6c0-1-0.2-1.9-0.4-2.8l15-8.6    c1.1,1.1,2.5,2,4.1,2.5v17c-1.5,0.4-2.8,1.2-3.8,2.2L19.9,136.5z M47.5,145.2c-1.1-1-2.4-1.8-3.8-2.2v-17c1.6-0.4,3-1.3,4.1-2.5    l15,8.6c-0.3,0.9-0.4,1.8-0.4,2.8c0,0.5,0,1.1,0.1,1.6L47.5,145.2z M99.3,91.2c-3.4,1.9-7.1,1.6-10,0.8l5-2.9    c1.2-0.7,1.6-2.2,0.9-3.4c-0.7-1.2-2.2-1.6-3.5-0.9l-5,2.9c0.8-2.8,2.4-6.3,5.7-8.2c4.8-2.8,10.8-1,13.5,0.1    C105.5,82.4,104.1,88.4,99.3,91.2z"
                                    />
                                  </g>
                                </g>
                              </svg>

                              <div className="investor">
                                Balance: <strong>{user.balance}</strong>
                              </div>
                              <div className="chip">
                                <div className="chip-line"></div>
                                <div className="chip-line"></div>
                                <div className="chip-line"></div>
                                <div className="chip-line"></div>
                                <div className="chip-main"></div>
                              </div>
                              <svg
                                className="wave"
                                viewBox="0 3.71 26.959 38.787"
                                width="26.959"
                                height="38.787"
                                fill="white"
                              >
                                <path d="M19.709 3.719c.266.043.5.187.656.406 4.125 5.207 6.594 11.781 6.594 18.938 0 7.156-2.469 13.73-6.594 18.937-.195.336-.57.531-.957.492a.9946.9946 0 0 1-.851-.66c-.129-.367-.035-.777.246-1.051 3.855-4.867 6.156-11.023 6.156-17.718 0-6.696-2.301-12.852-6.156-17.719-.262-.317-.301-.762-.102-1.121.204-.36.602-.559 1.008-.504z"></path>
                                <path d="M13.74 7.563c.231.039.442.164.594.343 3.508 4.059 5.625 9.371 5.625 15.157 0 5.785-2.113 11.097-5.625 15.156-.363.422-1 .472-1.422.109-.422-.363-.472-1-.109-1.422 3.211-3.711 5.156-8.551 5.156-13.843 0-5.293-1.949-10.133-5.156-13.844-.27-.309-.324-.75-.141-1.114.188-.367.578-.582.985-.542h.093z"></path>
                                <path d="M7.584 11.438c.227.031.438.144.594.312 2.953 2.863 4.781 6.875 4.781 11.313 0 4.433-1.828 8.449-4.781 11.312-.398.387-1.035.383-1.422-.016-.387-.398-.383-1.035.016-1.421 2.582-2.504 4.187-5.993 4.187-9.875 0-3.883-1.605-7.372-4.187-9.875-.321-.282-.426-.739-.266-1.133.164-.395.559-.641.984-.617h.094zM1.178 15.531c.121.02.238.063.344.125 2.633 1.414 4.437 4.215 4.437 7.407 0 3.195-1.797 5.996-4.437 7.406-.492.258-1.102.07-1.36-.422-.257-.492-.07-1.102.422-1.359 2.012-1.075 3.375-3.176 3.375-5.625 0-2.446-1.371-4.551-3.375-5.625-.441-.204-.676-.692-.551-1.165.122-.468.567-.785 1.051-.742h.094z"></path>
                              </svg>
                              <div className="card-number">
                                <div className="section">
                                  <Nav.Link
                                    target="blank"
                                    href={`https://explorer.rsk.co/address/${user.address}`}
                                  >
                                    {user.address.slice(0, 9)}
                                    ....
                                    {user.address.slice(33, 42)}
                                  </Nav.Link>
                                </div>
                              </div>

                              <div className="card-holder">
                                {user.rskAddress}
                              </div>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </li>
                    <li className="mt-4">
                      <Button
                        variant="primary"
                        size="lg"
                        className="mx-2"
                        onClick={handleShowDeposit}
                      >
                        Deposit
                      </Button>
                      <Button
                        variant="secondary"
                        size="lg"
                        className="mx-2"
                        onClick={handleShowWithdraw}
                      >
                        Withdraw
                      </Button>
                    </li>
                  </ul>
                </Tab.Container>
              </Col>
              <Col>
                <h3 className="text-center mb-3 font-weight-bold">
                  Transactions History
                </h3>
                <Table responsive striped borderless={true} hover size="sm">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th className="text-center">Currency</th>
                      <th className="text-center">Amount</th>
                      <th className="text-center">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {renderHistory(user && user.history ? user.history : [])}
                  </tbody>
                </Table>
              </Col>
            </Row>
          )}

          <Modal show={show} onHide={() => handleCloseWithdraw(resetMessage)}>
            <Modal.Header closeButton>
              <Modal.Title>
                <strong>Make a Withdraw</strong>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {!message && (
                <div>
                    <h4 className="text-center">Your Balance: <strong>{user.balance}</strong></h4>
                  <InputGroup className="mb-3">
                    <InputGroup.Append>
                      <FormControl
                        as="select"
                        className="custom-select select-currency"
                      >
                        <option>RIF</option>
                        <option>RBTC</option>
                      </FormControl>
                    </InputGroup.Append>
                    <FormControl
                      placeholder="Amount"
                      aria-label="Amount"
                      onChange={e => setValue(parseInt(e.target.value, 10))}
                    />
                  </InputGroup>
                  <div className="text-center">
                    <Button
                      variant="secondary"
                      onClick={() => handleModalButton(withdrawBalance)}
                    >
                      Withdraw
                    </Button>
                  </div>
                </div>
              )}

              {message && (
                <div className="d-block text-center my-2">
                  {success ? (
                    <div className="mb-2">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="check-circle"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svgMsg"
                      >
                        <path
                          fill="#53c676"
                          d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <div className="mb-2">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="times-circle"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svgMsg"
                      >
                        <path
                          fill="#d93528"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm94.8-285.3L281.5 256l69.3 69.3c4.7 4.7 4.7 12.3 0 17l-8.5 8.5c-4.7 4.7-12.3 4.7-17 0L256 281.5l-69.3 69.3c-4.7 4.7-12.3 4.7-17 0l-8.5-8.5c-4.7-4.7-4.7-12.3 0-17l69.3-69.3-69.3-69.3c-4.7-4.7-4.7-12.3 0-17l8.5-8.5c4.7-4.7 12.3-4.7 17 0l69.3 69.3 69.3-69.3c4.7-4.7 12.3-4.7 17 0l8.5 8.5c4.6 4.7 4.6 12.3 0 17z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  )}
                  <span
                    className={`text-${
                      success ? "secondary" : "danger"
                    } font-weight-bold`}
                  >
                    {message}
                  </span>
                </div>
              )}
            </Modal.Body>
          </Modal>

          <Modal show={showD} onHide={() => handleCloseDeposit(resetMessage)}>
            <Modal.Header closeButton>
              <Modal.Title>
                <strong>Make a Deposit</strong>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {!message && (
                <div>
                    <h4 className="text-center">Your Balance: <strong>{user.balance}</strong></h4>
                    <InputGroup className="mb-3">
                    <InputGroup.Append>
                      <FormControl
                        as="select"
                        className="custom-select select-currency"
                      >
                        <option>RIF</option>
                        <option>RBTC</option>
                      </FormControl>
                    </InputGroup.Append>
                    <FormControl
                      placeholder="Amount"
                      aria-label="Amount"
                      onChange={e => setValue(parseInt(e.target.value, 10))}
                    />
                  </InputGroup>
                  <div className="text-center">
                    <Button
                      variant="primary"
                      onClick={() => handleModalButton(depositBalance)}
                    >
                      Deposit
                    </Button>
                  </div>
                </div>
              )}
              {message && (
                <div className="d-block text-center my-2">
                  {success ? (
                    <div className="mb-2">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="check-circle"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svgMsg"
                      >
                        <path
                          fill="#53c676"
                          d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    <div className="mb-2">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fal"
                        data-icon="times-circle"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="svgMsg"
                      >
                        <path
                          fill="#d93528"
                          d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 464c-118.7 0-216-96.1-216-216 0-118.7 96.1-216 216-216 118.7 0 216 96.1 216 216 0 118.7-96.1 216-216 216zm94.8-285.3L281.5 256l69.3 69.3c4.7 4.7 4.7 12.3 0 17l-8.5 8.5c-4.7 4.7-12.3 4.7-17 0L256 281.5l-69.3 69.3c-4.7 4.7-12.3 4.7-17 0l-8.5-8.5c-4.7-4.7-4.7-12.3 0-17l69.3-69.3-69.3-69.3c-4.7-4.7-4.7-12.3 0-17l8.5-8.5c4.7-4.7 12.3-4.7 17 0l69.3 69.3 69.3-69.3c4.7-4.7 12.3-4.7 17 0l8.5 8.5c4.6 4.7 4.6 12.3 0 17z"
                          className=""
                        ></path>
                      </svg>
                    </div>
                  )}

                  <span
                    className={`text-${
                      success ? "secondary" : "danger"
                    } font-weight-bold`}
                  >
                    {message}
                  </span>
                </div>
              )}
            </Modal.Body>
          </Modal>
        </Container>
      )}
    </Web3Provider.Consumer>
  );
};

export default MyProfile;

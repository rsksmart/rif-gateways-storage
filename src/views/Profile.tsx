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
import Card from "../components/Card";

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
                            {user.balances.map(b => <Card balance={b.balance} rskAddress={user.rskAddress} address={user.address} type='rif-card' />)}
                        </Tab.Pane>
                        <Tab.Pane eventKey="rbtc-tab">
                            {user.balances.map(b => <Card balance={b.balance} rskAddress={user.rskAddress} address={user.address} type='rsk-card' />)}
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
                  <h4 className="text-center">
                    Your Balance: <strong>{user.balances[0].balance}</strong>
                  </h4>
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
                  <h4 className="text-center">
                    Your Balance: <strong>{user.balances[0].balance}</strong>
                  </h4>
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

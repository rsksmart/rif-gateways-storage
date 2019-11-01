import React, { useState } from "react";
import Moment from "moment";
import CheckSVG from "../rifui/assets/check.svg";
import ErrorSVG from "../rifui/assets/error.svg";
import { ETokenName } from "models/Token";
import {
  Row,
  Col,
  Button,
  Table,
  Modal,
  InputGroup,
  Form,
  FormControl,
  Tab,
  Nav
} from "react-bootstrap";
import Web3Provider from "providers/Web3Provider";
import Card from "../components/Card";

const renderHistory = history => {
  return history.map((item, index) => (
    <tr key={index}>
      <td>
        {/*{item.date}*/}
        {Moment(new Date(item.date)).format("MM/DD/YYYY")}
      </td>
      <td className="text-center">{item.currency} </td>
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
  const [currency, setCurrency] = useState(ETokenName.RIF);

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

  const handleModalButton = (fn, tokenAddress) => {
    fn(value, tokenAddress, currency);
    setValue(0);
  };

  const handleCurrencySelect = event => {
    const { value } = event.target;
    const currencyToUse =
      value === ETokenName.RBTC ? ETokenName.RBTC : ETokenName.RIF;
    setCurrency(currencyToUse);
  };

  return (
    <Web3Provider.Consumer>
      {({
        state: { user, success, message },
        actions: { depositBalance, withdrawBalance, resetMessage }
      }) => (
        <div className="py-5">
          <h1 className="text-center mb-5">My Profile</h1>
          {user && user.address && (
            <Row className="justify-content-md-center">
              <Col lg="auto" className="text-center">
                <Tab.Container id="currency-tabs" defaultActiveKey="rif-tab">
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
                          {user.tokens.map((b, index) => (
                            <Card
                              key={index}
                              balance={b.balance[ETokenName.RIF]}
                              rskAddress={user.rskAddress}
                              address={user.address}
                              type="rif-card"
                            />
                          ))}
                        </Tab.Pane>
                        <Tab.Pane eventKey="rbtc-tab">
                          {user.tokens.map((b, index) => (
                            <Card
                              key={index}
                              balance={b.balance[ETokenName.RBTC]}
                              rskAddress={user.rskAddress}
                              address={user.address}
                              type="rsk-card"
                            />
                          ))}
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
                <h3 className="text-center mb-3 font-weight-bold mt-5 mt-sm-0">
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

          {/* WITHDRAW MODAL */}
          <Modal show={show} onHide={() => handleCloseWithdraw(resetMessage)}>
            <Modal.Header closeButton>
              <Modal.Title>
                <strong>Make a Withdraw</strong>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                {message && (
                  <div className="d-block text-center my-2">
                    {success && (
                      <div className="mb-2">
                        <img src={CheckSVG} alt="" style={{ maxWidth: 40 }} />
                        <p
                          className={`text-${
                            success ? "secondary" : "danger"
                          } font-weight-bold`}
                        >
                          {message}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <InputGroup className="mb-0">
                  <InputGroup.Append>
                    <FormControl
                      as="select"
                      className="custom-select select-currency"
                      onChange={handleCurrencySelect}
                    >
                      <option>RIF</option>
                      <option>RBTC</option>
                    </FormControl>
                  </InputGroup.Append>
                  <FormControl
                    type="number"
                    placeholder="Amount"
                    aria-label="Amount"
                    onChange={e => setValue(parseInt(e.target.value, 10))}
                  />
                </InputGroup>
                {message && (
                  <div className="text-right">
                    {!success && (
                      <Form.Text className="text-danger">{message}</Form.Text>
                    )}
                  </div>
                )}

                <div className="text-center mt-3">
                  <Button
                    disabled={!value}
                    variant="secondary"
                    onClick={() =>
                      handleModalButton(
                        withdrawBalance,
                        user.tokens[0].tokenAddress
                      )
                    }
                  >
                    Withdraw
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          {/* DEPOSIT MODAL */}
          <Modal show={showD} onHide={() => handleCloseDeposit(resetMessage)}>
            <Modal.Header closeButton>
              <Modal.Title>
                <strong>Make a Deposit</strong>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                {message && (
                  <div className="d-block text-center my-2">
                    {success ? (
                      <div className="mb-2">
                        <img src={CheckSVG} alt="" style={{ maxWidth: 40 }} />
                      </div>
                    ) : (
                      <div className="mb-2">
                        <img src={ErrorSVG} alt="" style={{ maxWidth: 40 }} />
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
                <InputGroup className="mb-3">
                  <InputGroup.Append>
                    <FormControl
                      as="select"
                      className="custom-select select-currency"
                      onChange={handleCurrencySelect}
                    >
                      <option>RIF</option>
                      <option>RBTC</option>
                    </FormControl>
                  </InputGroup.Append>
                  <FormControl
                    type="number"
                    placeholder="Amount"
                    aria-label="Amount"
                    onChange={e => setValue(parseInt(e.target.value, 10))}
                  />
                </InputGroup>
                <div className="text-center">
                  <Button
                    variant="primary"
                    onClick={() =>
                      handleModalButton(
                        depositBalance,
                        user.tokens[0].tokenAddress
                      )
                    }
                  >
                    Deposit
                  </Button>
                </div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </Web3Provider.Consumer>
  );
};

export default MyProfile;

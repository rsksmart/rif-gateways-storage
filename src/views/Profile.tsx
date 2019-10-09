import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Table,
  Modal,
  InputGroup,
  FormControl
} from "react-bootstrap";
import Web3Provider from "providers/Web3Provider";

const renderHistory = history => {
  return history.map(item => (
    <tr key={item.date}>
      <td>{item.date}</td>
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
              <Col lg="auto">
                <ul className="list-unstyled text-center">
                  <li>
                    <div className="d-inline-block rif-card text-left">
                      <div className="front">
                        <div className="strip-bottom"></div>
                        <div className="strip-top"></div>
                        <svg className="logo" x="0" y="0" viewBox="0 0 600 400">
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
                          <div className="section">{user.address}</div>
                        </div>

                        <div className="card-holder mt-3">
                          {user.rskAddress}
                        </div>
                      </div>
                    </div>
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
              </Col>
              <Col>
                <h3 className="text-center mb-3 font-weight-bold">
                  Transactions History
                </h3>
                <Table responsive striped borderless={true} hover size="sm">
                  <thead>
                    <tr>
                      <th>Date</th>
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
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Amount"
                    aria-label="Amount"
                    aria-describedby="basic-addon2"
                    onChange={e => setValue(parseInt(e.target.value, 10))}
                  />
                  <InputGroup.Append>
                    <Button
                      variant="secondary"
                      className="py-0"
                      onClick={() => handleModalButton(withdrawBalance)}
                    >
                      Withdraw
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
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
            <Modal.Footer>
              <Button
                variant="dark"
                className="mx-auto"
                onClick={() => handleCloseWithdraw(resetMessage)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={showD} onHide={() => handleCloseDeposit(resetMessage)}>
            <Modal.Header closeButton>
              <Modal.Title>
                <strong>Make a Deposit</strong>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {!message && (
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Amount"
                    aria-label="Amount"
                    aria-describedby="basic-addon2"
                    onChange={e => setValue(parseInt(e.target.value, 10))}
                  />
                  <InputGroup.Append>
                    <Button
                      variant="primary"
                      className="py-0"
                      onClick={() => handleModalButton(depositBalance)}
                    >
                      Deposit
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
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
            <Modal.Footer>
              <Button
                variant="dark"
                className="mx-auto"
                onClick={() => handleCloseDeposit(resetMessage)}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </Container>
      )}
    </Web3Provider.Consumer>
  );
};

export default MyProfile;

import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import RifLogo from "../rifui/assets/logo.svg";
import RskLogo from "../rifui/assets/rsk_logo.svg";
import Chip from "../rifui/assets/chip.svg";

type CardProps = {
  balance: number;
  address: string;
  rskAddress: string;
  type: string;
};
type CardState = {};

export default class Card extends Component<CardProps, CardState> {
  render() {
    const { balance, address, rskAddress, type } = this.props;
    return (
      <div className={`d-inline-block text-left ${type}`}>
        <div className="front">
          <div className="strip-bottom"> </div>
          <div className="strip-top"> </div>
          {type === "rif-card" ? (
            <img
              src={RifLogo}
              alt="Rif"
              className="logo"
              style={{ width: 100 }}
            />
          ) : (
            <img
              src={RskLogo}
              alt="Rsk"
              className="logo"
              style={{ width: 100 }}
            />
          )}

          <div className="investor">
            Balance: <strong>{balance}</strong>
          </div>
          <div className="chip">
            <div className="chip-line"></div>
            <div className="chip-line"></div>
            <div className="chip-line"></div>
            <div className="chip-line"></div>
            <div className="chip-main"></div>
          </div>
            <img
                src={Chip}
                alt=""
                className="wave"
                style={{ width: 100 }}
            />
          <div className="card-number">
            <div className="section">
              <Nav.Link
                target="blank"
                href={`https://explorer.rsk.co/address/${address}`}
              >
                {address.slice(0, 10)}
                ...
                {address.slice(33, 42)}
              </Nav.Link>
            </div>
          </div>
          <div className="card-holder">{rskAddress}</div>
        </div>
      </div>
    );
  }
}

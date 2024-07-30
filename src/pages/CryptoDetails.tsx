import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";
import { Container, Table, Tooltip } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Coin } from "../models/Coin";
import coinLogo from "../assets/images-Photoroom.png";
import PriceGraph from "../components/PriceGraph";
import CoinDetailSelect from "../components/CoinDetailSelect";

const CryptoDetails = () => {
  const [coinDetail, setCoinDetail] = useState<Coin>();
  const [coinSymbol, setCoinSymbol] = useState<Coin>();

  let { symbol } = useParams();
  console.log({ symbol });

  useEffect(() => {
    axios
      .get(`https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`)
      .then((response) => {
        setCoinDetail(response.data);
      });
  }, []);

  useEffect(() => {}, [coinSymbol]);

  const formatVolume = (coinInfo: string) => {
    return parseFloat(coinInfo).toLocaleString("en-US");
  };

  return (
    <div>
      <div className="container ">
        <br />

        <div className="card bg-dark text-white mb-3">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-3 d-flex align-items-center">
                <img
                  src={coinLogo}
                  className="me-2"
                  style={{ height: "40px" }}
                />
                {/* <h6 className="mb-0">{coinDetail?.symbol}</h6> */}
                <CoinDetailSelect symbol={coinDetail?.symbol} />
              </div>
              <div className="col-4">
                <h6 className="mb-0">Last Price: {coinDetail?.lastPrice}</h6>
              </div>
              <div className="col-4">
                <h6 className={`mb-0`}>
                  Price Change Percent: {coinDetail?.priceChangePercent}
                </h6>
              </div>
            </div>
          </div>
        </div>

        {coinDetail && (
          <div className="card bg-dark text-white mt-4">
            <div className="card-body">
              <h5 className="card-title">Details for {coinDetail?.symbol}</h5>
              <table className="table table-dark table-striped">
                <tbody>
                  <tr>
                    <th>Symbol</th>
                    <td>{coinDetail?.symbol}</td>
                  </tr>
                  <tr>
                    <th>Price Change</th>
                    <td>{formatVolume(coinDetail?.priceChange)}</td>
                  </tr>
                  <tr>
                    <th>Price Change Percent</th>
                    <td>{formatVolume(coinDetail?.priceChangePercent)}%</td>
                  </tr>
                  <tr>
                    <th>Weighted Avg Price</th>
                    <td>{formatVolume(coinDetail?.weightedAvgPrice)}</td>
                  </tr>
                  <tr>
                    <th>Prev Close Price</th>
                    <td>{formatVolume(coinDetail?.prevClosePrice)}</td>
                  </tr>
                  <tr>
                    <th>Last Price</th>
                    <td>{formatVolume(coinDetail?.lastPrice)}</td>
                  </tr>
                  <tr>
                    <th>Last Qty</th>
                    <td>{formatVolume(coinDetail?.lastQty)}</td>
                  </tr>
                  <tr>
                    <th>Bid Price</th>
                    <td>{formatVolume(coinDetail?.bidPrice)}</td>
                  </tr>
                  <tr>
                    <th>Bid Qty</th>
                    <td>{formatVolume(coinDetail?.bidQty)}</td>
                  </tr>
                  <tr>
                    <th>Ask Price</th>
                    <td>{formatVolume(coinDetail?.askPrice)}</td>
                  </tr>
                  <tr>
                    <th>Ask Qty</th>
                    <td>{formatVolume(coinDetail?.askQty)}</td>
                  </tr>
                  <tr>
                    <th>Open Price</th>
                    <td>{formatVolume(coinDetail?.openPrice)}</td>
                  </tr>
                  <tr>
                    <th>High Price</th>
                    <td>{formatVolume(coinDetail?.highPrice)}</td>
                  </tr>
                  <tr>
                    <th>Low Price</th>
                    <td>{formatVolume(coinDetail?.lowPrice)}</td>
                  </tr>
                  <tr>
                    <th>Volume</th>
                    <td>{formatVolume(coinDetail?.volume)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        <br />
        <br />
        <PriceGraph symbol={symbol} />
      </div>
    </div>
  );
};

export default CryptoDetails;

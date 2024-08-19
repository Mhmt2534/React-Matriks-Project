import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Container, Table, Tooltip } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Coin } from "../models/Coin";
import coinLogo from "../assets/images-Photoroom.png";
import PriceGraph from "../components/PriceGraph";
import CoinDetailSelect from "../components/CoinDetailSelect";
import { ColorContext } from "../context/ColorContext";

const CryptoDetails = () => {
  const [coinDetail, setCoinDetail] = useState<Coin>();
  const [pricePositive, setPricePositive] = useState<boolean>();

  let { symbol } = useParams();
  console.log({ symbol });

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${symbol}`
      );
      setCoinDetail(response.data);
    };
    fetchData();
  }, [symbol]);

  useEffect(() => {
    if (coinDetail) {
      const stringPriceChange = coinDetail.priceChange;
      const intNumber = Number(stringPriceChange);
      setPricePositive(intNumber >= 0);
    }
  }, [coinDetail]);

  const formatVolume = (coinInfo: string) => {
    const number = parseFloat(coinInfo);
    if (isNaN(number)) {
      return coinInfo;
    }
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 1, // Minimum kesirli basamak sayısı
      maximumFractionDigits: 8, // Maksimum kesirli basamak sayısı
    }).format(number);
  };

  const colorContext = useContext(ColorContext);

  if (!colorContext) {
    throw "HATA";
  }

  const { isBlack } = colorContext;

  const className1: any = () => {
    return isBlack
      ? "card bg-dark  text-white mb-3"
      : "card bg-white  text-black mb-3";
  };

  const className2: any = () => {
    return isBlack
      ? "table table-dark table-striped"
      : "table table-white table-striped";
  };

  const className3: any = () => {
    return isBlack
      ? "card bg-dark  text-white mt-4"
      : "card bg-white  text-black mt-4";
  };

  return (
    <div>
      <div className="container">
        <br />
        <div className={className1()}>
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-3 d-flex align-items-center">
                <img
                  src={coinLogo}
                  className="me-2"
                  style={{ height: "40px" }}
                />
                <CoinDetailSelect symbol={coinDetail?.symbol} />
              </div>
              <div className="col-4">
                <h6 className="mb-0">Son Fiyat: {coinDetail?.lastPrice}</h6>
              </div>
              <div className="col-4">
                <h6 className={`mb-0`}>
                  Fiyat Değişim Yüzdesi:{" "}
                  <span style={{ color: pricePositive ? "green" : "red" }}>
                    {coinDetail?.priceChangePercent}
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        {coinDetail && (
          <div className={className3()}>
            <div className="card-body">
              <h5 className="card-title">{coinDetail?.symbol} için Detaylar</h5>
              <table className={className2()}>
                <tbody>
                  <tr>
                    <th>Sembol</th>
                    <td>{coinDetail?.symbol}</td>
                  </tr>
                  <tr>
                    <th>Fiyat Değişimi</th>
                    <td style={{ color: pricePositive ? "green" : "red" }}>
                      {formatVolume(coinDetail?.priceChange)}
                    </td>
                  </tr>
                  <tr>
                    <th>Fiyat Değişim Yüzdesi</th>
                    <td style={{ color: pricePositive ? "green" : "red" }}>
                      {formatVolume(coinDetail?.priceChangePercent)}%
                    </td>
                  </tr>
                  <tr>
                    <th>Ağırlıklı Ortalama Fiyat</th>
                    <td>{formatVolume(coinDetail?.weightedAvgPrice)}</td>
                  </tr>
                  <tr>
                    <th>Önceki Kapanış Fiyatı</th>
                    <td>{formatVolume(coinDetail?.prevClosePrice)}</td>
                  </tr>
                  <tr>
                    <th>Son Fiyat</th>
                    <td>{formatVolume(coinDetail?.lastPrice)}</td>
                  </tr>
                  <tr>
                    <th>Son Miktar</th>
                    <td>{formatVolume(coinDetail?.lastQty)}</td>
                  </tr>
                  <tr>
                    <th>Teklif Fiyatı</th>
                    <td>{formatVolume(coinDetail?.bidPrice)}</td>
                  </tr>
                  <tr>
                    <th>Teklif Miktarı</th>
                    <td>{formatVolume(coinDetail?.bidQty)}</td>
                  </tr>
                  <tr>
                    <th>İstek Fiyatı</th>
                    <td>{formatVolume(coinDetail?.askPrice)}</td>
                  </tr>
                  <tr>
                    <th>İstek Miktarı</th>
                    <td>{formatVolume(coinDetail?.askQty)}</td>
                  </tr>
                  <tr>
                    <th>Açılış Fiyatı</th>
                    <td>{formatVolume(coinDetail?.openPrice)}</td>
                  </tr>
                  <tr>
                    <th>Yüksek Fiyat</th>
                    <td>{formatVolume(coinDetail?.highPrice)}</td>
                  </tr>
                  <tr>
                    <th>Düşük Fiyat</th>
                    <td>{formatVolume(coinDetail?.lowPrice)}</td>
                  </tr>
                  <tr>
                    <th>Hacim</th>
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

import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Coin } from "../models/Coin";
import axios from "axios";
import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowUpShortWide, FaArrowUpWideShort } from "react-icons/fa6";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ColorContext } from "../context/ColorContext";

const Home = () => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [favoritesCoin, setFavoritesCoin] = useState<Coin[]>([]);
  const [sorted, setSorted] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (sorted) {
      const fetchTickers = async () => {
        const response = await axios.get(
          "https://api.binance.com/api/v3/ticker/24hr"
        );

        const usdtTickers = response.data.filter((ticker: Coin) =>
          ticker.symbol.endsWith("USDT")
        );

        const sortedTickers = usdtTickers.sort(
          (a: Coin, b: Coin) => parseFloat(b.volume) - parseFloat(a.volume)
        );

        const top10Coins = sortedTickers.slice(0, 10);

        const reversedCoins = top10Coins.sort(
          (a: Coin, b: Coin) => parseFloat(a.volume) - parseFloat(b.volume)
        );

        setCoins(reversedCoins);
      };

      fetchTickers();
    } else {
      const fetchTickers = async () => {
        const response = await axios.get(
          "https://api.binance.com/api/v3/ticker/24hr"
        );

        const usdtTickers = response.data.filter((ticker: Coin) =>
          ticker.symbol.endsWith("USDT")
        );

        const sortedTickers = usdtTickers.sort(
          (a: Coin, b: Coin) => parseFloat(b.volume) - parseFloat(a.volume)
        );

        const top10Coins = sortedTickers.slice(0, 10);

        setCoins(top10Coins);
      };

      fetchTickers();
    }
  }, [sorted]);

  useEffect(() => {
    const savedFavorites: any = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavoritesCoin(JSON.parse(savedFavorites));
    }
  }, []);

  const authContext = useContext(AuthContext);

  const colorContext = useContext(ColorContext);

  if (!colorContext) {
    throw "HATA";
  }

  const { isBlack } = colorContext;

  const className: any = () => {
    return isBlack
      ? "table table-dark table-striped"
      : "table table-white table-striped";
  };

  const style = {
    cursor: "pointer",
    color: isBlack ? "white" : "black",
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoritesCoin));
  }, [favoritesCoin]);

  const handleFavorite = (item: any) => {
    if (favoritesCoin.some((fav) => fav.symbol === item.symbol)) {
      setFavoritesCoin(
        favoritesCoin.filter((fav) => fav.symbol !== item.symbol)
      );
    } else {
      setFavoritesCoin([...favoritesCoin, item]);
    }
  };

  const formatVolume = (volume: string) => {
    return parseFloat(volume).toLocaleString("en-US");
  };

  return (
    <div className="container">
      <div className=" bg-dark text-white">
        <div className="card-body">
          <table className={className()}>
            <thead>
              <tr>
                <th>
                  <span style={{ marginLeft: "208px" }}>Symbol</span>
                </th>
                <th style={{ textAlign: "center" }}>
                  Volume{" "}
                  <span style={style}>
                    {sorted ? (
                      <FaArrowUpShortWide
                        onClick={() => {
                          setSorted(false);
                        }}
                      />
                    ) : (
                      <FaArrowUpWideShort
                        onClick={() => {
                          setSorted(true);
                        }}
                      />
                    )}
                  </span>
                </th>
                <th style={{ textAlign: "center" }}>Detail</th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <tr key={coin.symbol} onClick={() => {}}>
                  <td>
                    <span
                      style={{ cursor: "pointer", marginLeft: "158px" }}
                      onClick={() => handleFavorite(coin)}
                    >
                      {favoritesCoin.some(
                        (fav) => fav.symbol === coin.symbol
                      ) ? (
                        <FaStar style={{ marginBottom: "6px" }} />
                      ) : (
                        <FaRegStar style={{ marginBottom: "6px" }} />
                      )}
                    </span>
                    <span style={{ marginLeft: "30px" }}> {coin.symbol}</span>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    {formatVolume(coin.volume)}
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Button
                      variant="success"
                      onClick={() =>
                        navigate(`/home/cryptodetail/${coin.symbol}`)
                      }
                    >
                      Detail
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;

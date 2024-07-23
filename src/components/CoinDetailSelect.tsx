import React, { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { Coin } from "../models/Coin";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CoinDetailSelect = (props: any) => {
  const [coins, setCoins] = useState<Coin[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchTickers = async () => {
      const response = await axios.get(
        "https://api.binance.com/api/v3/ticker/24hr"
      );
      console.log(response);

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
  }, []);

  return (
    <div>
      <NavDropdown title={props.symbol} id="basic-nav-dropdown">
        {coins.map((coin) => (
          <NavDropdown.Item
            href={`/home/cryptodetail/${coin.symbol}`}
            key={coin.symbol}
          >
            {coin.symbol}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    </div>
  );
};

export default CoinDetailSelect;

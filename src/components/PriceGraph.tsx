import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tooltip } from "react-bootstrap";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import "./PriceGraph.css";

const PriceGraph = (symbol: any) => {
  const [coinChar, setCoinChar] = useState([]);
  const [pointer, setPointer] = useState(0);

  useEffect(() => {
    console.log(" dsa" + symbol.symbol);
    switch (pointer) {
      case 0:
        axios
          .get(
            `https://api.binance.com/api/v3/klines?symbol=${symbol.symbol}&interval=1h&limit=24`
          )
          .then((data: any) => {
            const formattedData = data.data.map((item: any) => ({
              time: new Date(item[0]).toLocaleTimeString(),
              price: parseFloat(item[4]),
            }));
            setCoinChar(formattedData);
            console.log(formattedData);
          });
        break;
      case 1:
        axios
          .get(
            `https://api.binance.com/api/v3/klines?symbol=${symbol.symbol}&interval=1h&limit=168`
          )
          .then((data: any) => {
            const formattedData = data.data.map((item: any) => ({
              time: new Date(item[0]).toLocaleTimeString(),
              price: parseFloat(item[4]),
            }));
            setCoinChar(formattedData);
            console.log(formattedData);
          });
        break;
      case 2:
        axios
          .get(
            `https://api.binance.com/api/v3/klines?symbol=${symbol.symbol}&interval=1d&limit=30`
          )
          .then((data: any) => {
            const formattedData = data.data.map((item: any) => ({
              time: new Date(item[0]).toLocaleTimeString(),
              price: parseFloat(item[4]),
            }));
            setCoinChar(formattedData);
            console.log(formattedData);
          });
        break;
      case 3:
        axios
          .get(
            `https://api.binance.com/api/v3/klines?symbol=${symbol.symbol}&interval=1d&limit=365`
          )
          .then((data: any) => {
            const formattedData = data.data.map((item: any) => ({
              time: new Date(item[0]).toLocaleTimeString(),
              price: parseFloat(item[4]),
            }));
            setCoinChar(formattedData);
            console.log(formattedData);
          });
        break;
      default:
        break;
    }
  }, [pointer]);

  return (
    <div>
      <span
        onClick={() => {
          setPointer(0);
        }}
      >
        24 Saat
      </span>
      <span
        onClick={() => {
          setPointer(1);
        }}
      >
        7 Gün
      </span>
      <span
        onClick={() => {
          setPointer(2);
        }}
      >
        1 Ay
      </span>
      <span
        onClick={() => {
          setPointer(3);
        }}
      >
        1 Yıl
      </span>
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          data={coinChar}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="price"
            stroke="#8884d8"
            fill="#8884d8"
            activeDot={{ r: 8 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceGraph;

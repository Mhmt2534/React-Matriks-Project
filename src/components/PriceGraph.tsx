import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./PriceGraph.css";
import { Button, Container } from "react-bootstrap";

const PriceGraph = (symbol: any) => {
  const [coinChar, setCoinChar] = useState([]);
  const [pointer, setPointer] = useState(0);
  const [inter, setInter] = useState(4);

  useEffect(() => {
    switch (pointer) {
      case 0:
        axios
          .get(
            `https://api.binance.com/api/v3/klines?symbol=${symbol.symbol}&interval=5m&limit=288`
          )
          .then((data: any) => {
            const formattedData = data.data.map((item: any) => ({
              time: new Date(item[0]).toLocaleTimeString(),
              price: parseFloat(item[4]),
            }));
            setCoinChar(formattedData);
            setInter(50);
          });
        break;
      case 1:
        axios
          .get(
            `https://api.binance.com/api/v3/klines?symbol=${symbol.symbol}&interval=15m&limit=672`
          )
          .then((data: any) => {
            const formattedData = data.data.map((item: any) => ({
              time:
                new Date(item[0]).toLocaleDateString() +
                " " +
                new Date(item[0]).toLocaleTimeString(),
              price: parseFloat(item[4]),
            }));
            setCoinChar(formattedData);
            setInter(200);
          });
        break;
      case 2:
        axios
          .get(
            `https://api.binance.com/api/v3/klines?symbol=${symbol.symbol}&interval=1h&limit=720`
          )
          .then((data: any) => {
            const formattedData = data.data.map((item: any) => ({
              time:
                new Date(item[0]).toLocaleDateString() +
                " " +
                new Date(item[0]).toLocaleTimeString(),
              price: parseFloat(item[4]),
            }));
            setCoinChar(formattedData);
            setInter(200);
          });
        break;
      case 3:
        axios
          .get(
            `https://api.binance.com/api/v3/klines?symbol=${symbol.symbol}&interval=1d&limit=365`
          )
          .then((data: any) => {
            const formattedData = data.data.map((item: any) => ({
              time:
                new Date(item[0]).toLocaleDateString() +
                " " +
                new Date(item[0]).toLocaleTimeString(),
              price: parseFloat(item[4]),
            }));
            setCoinChar(formattedData);
            setInter(73);
          });
        break;
      default:
        break;
    }
  }, [pointer]);

  return (
    <div>
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
          <XAxis interval={inter} dataKey="time" />
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
      <Container>
        <div
          style={{ marginTop: "20px", textAlign: "center" }}
          className="container"
        >
          {pointer == 0 ? (
            <Button
              variant="primary"
              style={{ marginRight: "10px" }}
              onClick={() => {
                setPointer(0);
              }}
            >
              Günlük
            </Button>
          ) : (
            <Button
              variant="outline-primary"
              style={{ marginRight: "10px" }}
              onClick={() => {
                setPointer(0);
              }}
            >
              Günlük
            </Button>
          )}

          {pointer == 1 ? (
            <Button
              variant="primary"
              style={{ marginRight: "10px" }}
              onClick={() => {
                setPointer(1);
              }}
            >
              Haftalık
            </Button>
          ) : (
            <Button
              variant="outline-primary"
              style={{ marginRight: "10px" }}
              onClick={() => {
                setPointer(1);
              }}
            >
              Haftalık
            </Button>
          )}
          {pointer == 2 ? (
            <Button
              variant="primary"
              style={{ marginRight: "10px" }}
              onClick={() => {
                setPointer(2);
              }}
            >
              Aylık
            </Button>
          ) : (
            <Button
              variant="outline-primary"
              style={{ marginRight: "10px" }}
              onClick={() => {
                setPointer(2);
              }}
            >
              Aylık
            </Button>
          )}
          {pointer == 3 ? (
            <Button
              variant="primary"
              style={{ marginRight: "10px" }}
              onClick={() => {
                setPointer(3);
              }}
            >
              Yıllık
            </Button>
          ) : (
            <Button
              variant="outline-primary"
              style={{ marginRight: "10px" }}
              onClick={() => {
                setPointer(3);
              }}
            >
              Yıllık
            </Button>
          )}
        </div>
      </Container>
    </div>
  );
};

export default PriceGraph;

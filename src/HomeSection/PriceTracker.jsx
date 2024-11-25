import React, { useState, useEffect } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const PriceTracker = ({ product}) => {
  const [priceData, setPriceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const generateMockData = () => {
    const today = new Date();
    const priceHistory = Array.from({ length: 30 }, (_, i) => {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      return {
        date: date.toISOString().split("T")[0],
        price: Math.random() * (10000 - 5000) + 5000,
      };
    }).reverse();

    return {
      name: "Premium Wireless Headphones",
      currentPrice: priceHistory.at(-1).price,
      highestPrice: Math.max(...priceHistory.map((p) => p.price)),
      lowestPrice: Math.min(...priceHistory.map((p) => p.price)),
      history: priceHistory,
    };
  };

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPriceData(generateMockData());
    } catch {
      setError("Failed to load price data.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [product]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{priceData.name}</h1>
      <p>Product ID: {product}</p>
      <p>Current Price: ₹{priceData.currentPrice.toFixed(2)}</p>
      <p>Highest Price: ₹{priceData.highestPrice.toFixed(2)}</p>
      <p>Lowest Price: ₹{priceData.lowestPrice.toFixed(2)}</p>

      <div style={{ height: "300px", margin: "20px 0" }}>
        <ResponsiveContainer>
          <LineChart data={priceData.history}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <button onClick={fetchData} style={{ padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "5px" }}>
        Refresh
      </button>
    </div>
  );
};

export default PriceTracker;

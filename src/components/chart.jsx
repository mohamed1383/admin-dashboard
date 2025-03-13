import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { month: "Jan", US: 80, UK: 60, France: 70 },
  { month: "Feb", US: 75, UK: 65, France: 68 },
  { month: "Mar", US: 78, UK: 67, France: 66 },
  { month: "Apr", US: 85, UK: 95, France: 72 },
  { month: "May", US: 83, UK: 72, France: 73 },
  { month: "Jun", US: 79, UK: 70, France: 71 },
  { month: "Jul", US: 81, UK: 74, France: 75 },
];

const CustomDot = (props) => {
  const { cx, cy, stroke, value } = props;
  if (value > 90) {
    return (
      <circle cx={cx} cy={cy} r={6} fill={stroke} stroke="white" strokeWidth={2} />
    );
  }
  return null;
};

const ClientStatisticChart = () => {
  const [selectedCountries, setSelectedCountries] = useState(["US", "UK", "France"]);

  const toggleCountry = (country) => {
    setSelectedCountries((prev) =>
      prev.includes(country) ? prev.filter((c) => c !== country) : [...prev, country]
    );
  };

  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Client Statistic</h2>
      
      <div className="flex gap-2 mb-4">
        {["US", "UK", "France"].map((country, index) => (
          <button
            key={index}
            className={`px-4 py-1 rounded-lg ${
              selectedCountries.includes(country)
                ? "bg-purple-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => toggleCountry(country)}
          >
            {country === "US" ? "🇺🇸 US" : country === "UK" ? "🇬🇧 UK" : "🇫🇷 France"}
          </button>
        ))}
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />

          {selectedCountries.includes("US") && (
            <Line
              type="monotone"
              dataKey="US"
              stroke="#6B46C1"
              strokeWidth={3}
              dot={<CustomDot />}
            />
          )}
          {selectedCountries.includes("UK") && (
            <Line
              type="monotone"
              dataKey="UK"
              stroke="#1D3557"
              strokeWidth={3}
              dot={<CustomDot />}
            />
          )}
          {selectedCountries.includes("France") && (
            <Line
              type="monotone"
              dataKey="France"
              stroke="#457B9D"
              strokeWidth={3}
              dot={<CustomDot />}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ClientStatisticChart;

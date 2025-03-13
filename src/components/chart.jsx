import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
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
    <div style={{width: "700px" , position: "absolute",top: "24.5%", right: "8%" , marginLeft: "30px"}} className="w-full p-6 bg-white rounded-lg shadow-md">

      <svg style={{display: "none"}}>

          <symbol id="america" width="16" height="16" viewBox="0 0 16 16" fill="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <rect x="1" y="3" width="14" height="11" fill="url(#pattern0_13078_11815)"/>
                <defs>
                <pattern id="pattern0_13078_11815" patternContentUnits="objectBoundingBox" width="1" height="1">
                <use xlink:href="#image0_13078_11815" transform="scale(0.0714286 0.0909091)"/>
                </pattern>
                <image id="image0_13078_11815" width="14" height="11" preserveAspectRatio="none" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAALCAIAAADA5ys1AAAAAXNSR0IArs4c6QAAAFNJREFUGBlj6OzcwMBQhpVczMCAjBiA6lavvsPAMAWT/I8Ezpw5wwA2D4s6oM4zDAxwBDR+SJkK9BqSR3EygcoYgV7TBPsOP3EdKE2aqfjNg8sCADSi4Rs7bpPpAAAAAElFTkSuQmCC"/>
                </defs>
          </symbol>

      </svg>
      
      <div className="title-container">
        <h2 style={{fontFamily: "poppins-regular"}} className="text-lg font-semibold mb-4">Client Statistic</h2>
        
        <div style={{display: "flex"}} className="flex gap-8 mb-4">
          {["US", "UK", "France"].map((country, index) => (
            <div
              style={{width: "58px" , height: "28px"}}
              key={index}
              className={`px-4 py-1 rounded-lg ${
                selectedCountries.includes(country)
                  ? "bg-purple-500 text-white"
                  : "bg-gray-200 text-black"
              }`}
              onClick={() => toggleCountry(country)}
            >
              {country === "US" ? 'US' : country === "UK" ? "UK" : "France"}
            </div>
          ))}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />

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

import React from "react";
import ForecastSummary from "./ForecastSummary";
import "../styles/ForecastSummaries.css";
import "../styles/App.css";
import "../styles/index.css";

function ForecastSummaries({ forecasts, onForecastSelect }) {
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          classname="forecast-date"
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          onSelect={onForecastSelect}
          temperature={forecast.temperature}
        />
      ))}
    </div>
  );
}

export default ForecastSummaries;
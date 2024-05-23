import StatisticsLine from "./StatisticsLine";

/* eslint-disable react/prop-types */
const Statistics = ({ all, good, bad, neutral, average, positive }) => {
  const check = all.reduce((a, b) => a + b);
  return (
    <div>
      {check === 0 ? (
        "No feedback given"
      ) : (
        <>
          <StatisticsLine text={"good"} good={good} />
          <StatisticsLine text={"neutral"} neutral={neutral} />
          <StatisticsLine text={"bad"} bad={bad} />
          <StatisticsLine text={"all"} all={all} />
          <StatisticsLine text={"average"} average={average} />
          <StatisticsLine text={"positive"} positive={positive} />
        </>
      )}
    </div>
  );
};

export default Statistics;

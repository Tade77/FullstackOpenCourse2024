/* eslint-disable react/prop-types */
const StatisticsLine = ({
  text,
  good,
  bad,
  neutral,
  all,
  positive,
  average,
}) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td className="txt">{text}</td>
            <td>
              {good}
              {neutral}
              {bad}
              {all}
              {average}
              {positive}
              {positive}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatisticsLine;

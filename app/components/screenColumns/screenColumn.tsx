"use client";

import ColFive from "./colFive";
import ColFour from "./colFour";
import ColOne from "./colOne";
import ColThree from "./colThree";
import ColTwo from "./colTwo";

interface Props {
  colNumber: number;
  index: number;
}

const ScreenColumn: React.FC<Props> = ({ colNumber, index }) => {
  const renderColumn = () => {
    switch (index) {
      case 0:
        return <ColOne />;
      case 1:
        return <ColTwo />;
      case 2:
        return <ColThree />;
      case 3:
        return <ColFour marginTop={""} arrOfWords={[]} />;
      case 4:
        return <ColFive />;
      default:
        return null;
    }
  };

  return <div className='min-h-screen'>{renderColumn()}</div>;
};

export default ScreenColumn;

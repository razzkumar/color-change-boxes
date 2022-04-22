import React from 'react';

import { Box } from '~/components/Box';
import { NUMBER_OF_BOXES } from '~/constants';

import './App.scss';
import { getColors } from './utils';

function App() {
  const [colors, setColors] = React.useState<string[]>(getColors());

  // Color generator with memo but doesn't work for same box clicked twice
  // const [selectedBox, setSelectedBox] = React.useState<number | undefined>()

  // const colors: string[] = React.useMemo(() => {
  //   return Array.from({ length: NUMBER_OF_BOXES }).map(() => {
  //     return `hsl(${Math.random() * 360}, 100%, 50%)`
  //   })
  // }, [selectedBox]);

  const handleClick = () => {
    // doesn't work in the case of same box being clicked twice
    // setSelectedBox(box)

    const colors: string[] = Array.from({ length: NUMBER_OF_BOXES }).map(() => {
      return `hsl(${Math.random() * 360}, 100%, 50%)`;
    });

    setColors(colors);
  };

  return (
    <div className="container">
      {Array.from({ length: NUMBER_OF_BOXES }).map((_, i) => (
        <Box key={i} box={i + 1} color={colors[i]} onClick={handleClick} />
      ))}
    </div>
  );
}

export default App;

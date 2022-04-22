import { FC } from 'react';

import './box.scss';

interface IProps {
  color: string;
  box: number;
  onClick: () => void;
}

export const Box: FC<IProps> = ({ color, box, onClick }) => {
  return (
    <div className={`box box__${box}`} style={{ background: color }} onClick={onClick}>
      {box}
    </div>
  );
};

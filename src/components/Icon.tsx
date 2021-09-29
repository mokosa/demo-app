import * as React from 'react';
import { FunctionComponent } from 'react';

import { FaEdit, FaTrash } from 'react-icons/fa';

const icons = {
  edit: <FaEdit />,
  delete: <FaTrash />,
};

export type IconName = keyof typeof icons;

interface IconProps {
  name?: IconName;
}

const Icon: FunctionComponent<IconProps> = (props) => {
  return (props.name && icons[props.name]) || null;
};

export default Icon;

import * as React from 'react';
import { FunctionComponent } from 'react';

import { FaEdit } from 'react-icons/fa';

const icons = {
  edit: <FaEdit />,
};

export type IconName = keyof typeof icons;

interface IconProps {
  icon?: IconName;
}

const Icon: FunctionComponent<IconProps> = (props) => {
  return (props.icon && icons[props.icon]) || null;
};

export default Icon;

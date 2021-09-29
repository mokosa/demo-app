import React, { FunctionComponent } from 'react';
import { Button as BtButton, ButtonProps } from 'react-bootstrap';

interface OwnProps extends ButtonProps {
  hasIcon?: boolean;
}

type Props = OwnProps;

const Button: FunctionComponent<Props> = (props) => {
  return (
    <BtButton variant="outline-light" {...props}>
      {props.children}
    </BtButton>
  );
};

export default Button;

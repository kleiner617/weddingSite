// @flow
import React, { FunctionComponent, SyntheticEvent } from "react";
import { Form } from "react-bootstrap";

type Props = {
  name: string;
  value: boolean;
  label: string;
  id?: string;
  onChange: (
    value: boolean,
    name: { checkboxID: string; checkboxName: string }
  ) => void;
  isDisabled: boolean;
  size?: string;
};

export const Checkbox: FunctionComponent<Props> = props => {
  const onChecked = (e: SyntheticEvent<HTMLInputElement>) => {
    const isChecked = e && e.currentTarget && e.currentTarget.checked;
    props.onChange &&
      props.onChange(isChecked, {
        checkboxID: props.name,
        checkboxName: props.label
      });
  };

  return (
    <div className="checkbox-container">
      <Form.Check
        disabled={false}
        type={"checkbox"}
        name={props.name}
        id={props.id}
        checked={props.value}
        onChange={onChecked}
        label={props.label}
      />
    </div>
  );
};

export default Checkbox;

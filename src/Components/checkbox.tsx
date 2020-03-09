// @flow
import React, { FunctionComponent, SyntheticEvent } from "react";
import { Form, Button } from "react-bootstrap";
// const checkboxSizeStyles: {} = {
//   md: css`
//     padding-left: 20px;
//     padding-top: 2px;
//     &:before {
//       width: 13.5px;
//       height: 14px;
//     }
//     &:after {
//       top: 6px;
//       left: 4px;
//       width: 6px;
//       height: 10px;
//     }
//   `,
//   lg: css`
//     padding-left: 36px;
//     padding-top: 7px;
//     &:before {
//       width: 26px;
//       height: 26px;
//     }
//     &:after {
//       top: 7px;
//       left: 9px;
//       width: 9px;
//       height: 18px;
//     }
//   `
// };

// const StyledContainer = styled.div`
//   display: inline-block;
//   vertical-align: top;
//   font-size: 14px;
//   line-height: 22px;
//   box-sizing: border-box;
// `;

// const hoverColor = keyframes`
//   from {
//     border-color: #c0c0c0;
//   }
//   to {
//     border-color: #0559b3;
//   }
// `;

// :before controls the input box
// :after controls the checkmark

// const StyledLabel = styled.label`
//   ${props => checkboxSizeStyles[props.size]};
//   position: relative;
//   display: inline-block;
//   cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
//   vertical-align: middle;
//   color: ${({ disabled }) => (disabled ? "#404040" : "")};
//   opacity: ${({ disabled }) => (disabled ? "0.5" : "")};
//   filter: ${({ disabled }) => (disabled ? "alpha(opacity=50)" : "")};

//   &:hover:before {
//     animation-duration: 0.4s;
//     animation-fill-mode: both;
//     animation-name: ${({ disabled }) => (disabled ? "" : hoverColor)};
//   }

//   &:before {
//     position: absolute;
//     top: 5px;
//     left: 0;
//     display: inline-block;
//     animation-name: ${({ checked }) => (checked ? "none" : "")};
//     content: "";
//     border: 1px solid #c0c0c0;
//     border-radius: 3px;
//     background: ${getBorderAndBGColor};
//     border: ${getBorderAndBGColor};
//     cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
//   }

//   &:after {
//     position: absolute;
//     display: ${({ checked }) => (checked ? "block" : "none")};
//     content: "";
//     box-sizing: border-box;
//     -webkit-transform: rotate(45deg);
//     -ms-transform: rotate(45deg);
//     transform: rotate(45deg);
//     border-width: 3px;
//     border-style: solid;
//     border-color: #fff;
//     border-top: 0;
//     border-radius: 20%;
//     border-left: 0;
//     cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
//   }
// `;

type Props = {
  name: string;
  value: boolean;
  label: string;
  onChange: (value: boolean, name: string) => void;
  isDisabled: boolean;
  size?: string;
};

export const Checkbox: FunctionComponent<Props> = props => {
  const onChecked = (e: SyntheticEvent<HTMLInputElement>) => {
    const isChecked = e && e.currentTarget && e.currentTarget.checked;
    props.onChange && props.onChange(isChecked, props.name);
  };

  return (
    <div className="checkbox-container">
      <Form.Check
        disabled={false}
        type={"checkbox"}
        name={props.name}
        id={props.name}
        checked={props.value}
        onChange={onChecked}
      />
      <label
        //   disabled={this.props.isDisabled}
        // checked={props.value}
        htmlFor={props.name}
        // size={props.size}
      >
        {props.label}
      </label>
    </div>
  );
};

export default Checkbox;

import { DOMAttributes, PureComponent, ReactNode } from "react";
import "./TextArea.scss";

export interface TextAreaProps extends ClassNameExtenderProps, DOMAttributes<HTMLTextAreaElement> {
  required?: boolean;
  placeholder?: string;
  value?: string;
  id?: string;
}

export interface TextAreaState {}

class TextArea extends PureComponent<TextAreaProps, TextAreaState> {
  render(): ReactNode {
    const { required, id, placeholder, value, ...rest } = this.props;

    return (
      <textarea
        className="react-textarea"
        placeholder={placeholder}
        value={value}
        required={required}
        id={id}
        maxLength={1200}
        {...rest}
      ></textarea>
    );
  }
}

export default TextArea;

import {
  FocusEventHandler,
  InputHTMLAttributes,
  forwardRef,
  useState,
} from "react";
import Text from "./Text";
import Input from "./Input";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  hasError?: boolean;
  helpMessage?: string;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    { label, hasError, helpMessage, onFocus, onBlur, ...props },
    ref
  ) {
    const [focused, setFocused] = useState(false);

    const labelColor = hasError ? "red" : focused ? "blue" : undefined;

    const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
      setFocused(true);
      onFocus?.(event);
    };
    const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
      setFocused(false);
      onBlur?.(event);
    };

    return (
      <>
        {label ? (
          <Text
            typograph="t7"
            color={labelColor}
            display="inline-block"
            style={{ marginBlock: 6 }}
          >
            {label}
          </Text>
        ) : null}

        <Input
          ref={ref}
          aria-invalid={hasError}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {/* 동적인 요소에 스타일링 하는 것이 좋다. */}
        {helpMessage ? (
          <Text
            typograph="t7"
            color={labelColor}
            display="inline-block"
            style={{ marginTop: 6 }}
          >
            {helpMessage}
          </Text>
        ) : null}
      </>
    );
  }
);

export default TextField;

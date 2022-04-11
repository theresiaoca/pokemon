import { InputLabel, InputValue } from "./InputCss";

export type InputProps = {
  label: string;
  type: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

const Input = ({
  label,
  type,
  value,
  onChange,
  placeholder = "Input Here",
}: InputProps) => {
  return (
    <div>
      <InputLabel>{label}</InputLabel>
      <InputValue
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;

import {
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/react";

interface InputProps {
  name: string;
  label: string;
  type: "email" | "text";
  helper: string;
  value: string;
  handleChange: (value: string) => void;
}

const FieldInput: React.FC<InputProps> = ({
  name,
  label,
  type,
  helper,
  value,
  handleChange,
}) => {
  return (
    <FormControl id={name}>
      <FormLabel>{label}</FormLabel>
      <Input
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      <FormHelperText>{helper}</FormHelperText>
    </FormControl>
  );
};

export default FieldInput;

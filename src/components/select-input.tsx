import {
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/form-control";
import { Select } from "@chakra-ui/react";

interface InputProps {
  name: string;
  label: string;
  placeholder: string;
  helper: string;
  value: string;
  handleChange: (value: string) => void;
  options: {
    value: string;
    text: string;
  }[];
}

const SelectInput: React.FC<InputProps> = ({
  name,
  label,
  placeholder,
  helper,
  options,
  value,
  handleChange,
}) => {
  return (
    <FormControl id={name}>
      <FormLabel>{label}</FormLabel>
      <Select
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </Select>
      <FormHelperText>{helper}</FormHelperText>
    </FormControl>
  );
};

export default SelectInput;

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
  value: { id: string; name: string } | null;
  handleChange: (id: string) => void;
  options: {
    id: string;
    name: string;
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
        value={value?.id}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map((option, index) => (
          <option key={index} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
      <FormHelperText>{helper}</FormHelperText>
    </FormControl>
  );
};

export default SelectInput;

import {
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/form-control";
import Datepicker from "react-datepicker";

interface DateProps {
  name: string;
  label: string;
  helper: string;
  value: Date;
  handleChange: (value: Date) => void;
}

const DateInput: React.FC<DateProps> = ({
  name,
  label,
  value,
  handleChange,
  helper,
}) => {
  return (
    <FormControl id={name}>
      <FormLabel>{label}</FormLabel>

      <Datepicker selected={value} onChange={handleChange} />
      <FormHelperText>{helper}</FormHelperText>
    </FormControl>
  );
};

export default DateInput;

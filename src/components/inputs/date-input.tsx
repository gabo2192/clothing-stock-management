import { Button } from "@chakra-ui/button";
import {
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/form-control";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

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
  const [isOpen, setOpen] = useState(false);
  return (
    <FormControl id={name}>
      <FormLabel>{label}</FormLabel>
      <Button onClick={() => setOpen(true)}>{value.toDateString()}</Button>
      {isOpen && (
        <Calendar
          value={value}
          onChange={handleChange}
          onClickDay={(e) => {
            handleChange(e);
            setOpen(false);
          }}
        />
      )}

      <FormHelperText>{helper}</FormHelperText>
    </FormControl>
  );
};

export default DateInput;

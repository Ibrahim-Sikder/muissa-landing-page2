import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { SxProps } from "@mui/material";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';

type TDateCalendarProps = {
  name: string;
  sx?: SxProps;
};

const MUIDateCalendar = ({ name, sx }: TDateCalendarProps) => {
  const { control } = useFormContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Controller
        control={control}
        name={name}
        defaultValue={dayjs().format('YYYY-MM-DD')} // Set default value to current date
        render={({ field: { onChange, value } }) => (
          <DateCalendar
            value={value ? dayjs(value) : dayjs()} // Use current date if no value is set
            onChange={(newValue) => {
              const formattedDate = newValue?.format('YYYY-MM-DD') || '';
              onChange(formattedDate);
            }}
            sx={{
              '& .MuiPickersDay-root.Mui-selected': {
                backgroundColor: '#1591A3',
                '&:hover': {
                  backgroundColor: '#1591A3',
                },
              },
              ...sx,
            }}
          />
        )}
      />
    </LocalizationProvider>
  );
};

export default MUIDateCalendar;


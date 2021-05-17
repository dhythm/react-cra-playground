import { IconButton, InputAdornment, Paper } from "@material-ui/core";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Datetime from "react-datetime";
import ReactDateTimePicker from "react-datetime-picker";
import "react-datetime/css/react-datetime.css";
import { TextField } from "./components/TextField";

const App: React.FC = () => {
  const [datetime, setDatetime] = useState(new Date());
  return (
    <Paper>
      <div>
        <ReactDateTimePicker onChange={setDatetime} value={datetime} />
      </div>
      <Datetime
        timeFormat="HH:mm"
        renderInput={(props) => {
          console.log({ props });
          return (
            <TextField
              title="date-time"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={props.onClick}>
                      <CalendarTodayIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          );
        }}
      />
      <ReactDatePicker
        selected={datetime}
        onChange={setDatetime}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={1}
        customInput={
          <TextField
            title="date-time"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton>
                    <CalendarTodayIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        }
      />
    </Paper>
  );
};

export default App;

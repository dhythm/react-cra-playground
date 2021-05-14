import { IconButton, InputAdornment, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { GridLayout } from "./components/GridLayout";
import ReactDateTimePicker from "react-datetime-picker";
import Datetime from "react-datetime";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-datetime/css/react-datetime.css";
import { TextField } from "./components/TextField";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

const App: React.FC = () => {
  const [datetime, setDatetime] = useState(new Date());
  return (
    <Paper>
      <GridLayout />
      <div>
        <ReactDateTimePicker onChange={setDatetime} value={datetime} />
      </div>
      <Datetime
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

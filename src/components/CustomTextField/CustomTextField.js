import React from "react";
import TextField from "@mui/material/TextField";

export const CustomTextField = (props) => {
  return (
    <div style={{ margin: "13px 0px" }}>
      <TextField
        id="outlined-basic"
        error={props.error}
        helperText={props.helperText}
        fullWidth
        label={props.label}
        variant="outlined"
        type={props.type}
        size="small"
        value={props.value}
        onChange={props.onChange}
        color="secondary"
        InputProps={{
          sx: {
            ".css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              border: "1px solid black",
            },
          },
        }}
      />
    </div>
  );
};

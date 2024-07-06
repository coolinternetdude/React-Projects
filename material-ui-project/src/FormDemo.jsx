import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import Stack from "@mui/material/Stack";
import Slider from "@mui/material/Slider";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

export default function FormDemo() {
  const [name, setName] = useState("");
  const [volume, setVolume] = useState(20);
  const updateName = (evt) => {
    setName(evt.target.value);
  };
  const changeVolume = (evt, newVolume) => {
    setVolume(newVolume);
  };
  return (
    <div>
      <h2>Name is : {name}</h2>
      <TextField
        id="outlined-basic"
        label="Username"
        variant="outlined"
        value={name}
        onChange={updateName}
      />
      <h4>Volume : {volume}</h4>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <Slider aria-label="Volume" value={volume} onChange={changeVolume} />
        <VolumeUp />
      </Stack>
      <FormGroup>
        <FormControlLabel required control={<Checkbox />} label="Python" />
        <FormControlLabel control={<Checkbox />} label="Javascript" />
        <FormControlLabel control={<Checkbox />} label="Java" />
      </FormGroup>
    </div>
  );
}

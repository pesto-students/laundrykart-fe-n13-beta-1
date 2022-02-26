import { Box, Button, Input, Stack, TextField } from "@mui/material";
import MapboxModal from "../../../components/Mapbox/MapboxModal";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";

const LaundryInfo = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  const validationSchema = yup.object({
    name: yup.string("Enter your name").required("name is required"),
    about: yup.string("enter your about").required("About is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      address: "",
      about: "",
      lat: "",
      long: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      //   dispatch(AddProfileStart(values));
    },
  });
  return (
    <>
      <Box sx={{ minWidth: 120 }}>
        <Stack
          direction='row'
          justifyContent='space-around'
          alignItems='flex-start'
          spacing={1}
          sx={{ px: 5, mb: 3 }}>
          <Input
            accept='image/*'
            id='contained-button-file'
            multiple
            type='file'
          />
          <Input
            accept='image/*'
            id='contained-button-file'
            multiple
            type='file'
          />
          <Input
            accept='image/*'
            id='contained-button-file'
            multiple
            type='file'
          />
          <Input
            accept='image/*'
            id='contained-button-file'
            multiple
            type='file'
          />
        </Stack>
        <Stack
          direction='row'
          justifyContent='space-around'
          alignItems='flex-start'
          sx={{ px: 5 }}
          spacing={1}>
          <TextField
            fullWidth
            id='name'
            label='Name'
            value={formik.values.name}
            onChange={formik.handleChange("name")}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            variant='outlined'
          />
          <TextField
            fullWidth
            id='address'
            label='Address'
            onChange={formik.handleChange("address")}
            variant='outlined'
            name='address'
          />
          <TextField
            fullWidth
            id='about'
            multiline
            rows={4}
            label='About'
            variant='outlined'
            value={formik.values.about}
            onChange={formik.handleChange("about")}
            error={formik.touched.about && Boolean(formik.errors.about)}
            helperText={formik.touched.about && formik.errors.about}
          />
          <input
            type='hidden'
            name='lat'
            value={formik.values.lat}
            onChange={formik.handleChange("lat")}
          />
          <input
            type='hidden'
            name='long'
            value={formik.values.long}
            onChange={formik.handleChange("long")}
          />
        </Stack>
        <Stack
          sx={{ mb: 6 }}
          direction='row'
          justifyContent='center'
          alignItems='flex-start'
          spacing={2}>
          <Button variant='outlined'>fetch from map</Button>
          <Button variant='outlined' onClick={formik.handleSubmit}>
            Save
          </Button>
        </Stack>
        <MapboxModal
          size='sm'
          open={dialogOpen}
          hide={() => setDialogOpen(false)}
          setText={setAddress}
        />
      </Box>
    </>
  );
};

export default LaundryInfo;

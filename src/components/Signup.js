import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Button,
  TextField,
  Container
} from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';
const useStyles = makeStyles(() => ({
  root: {}
}));
const validationSchema = yup.object({
  name: yup.string('Enter your Name').required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required')
});
const AccountDetails = (props) => {
  const { className, user, UpdateUsername, ...rest } = props;

  const classes = useStyles();

  const formik = useFormik({
    initialValues: {
      name: user?.name,
      email: user?.email
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const { name, email } = values;
      alert(JSON.stringify(values, null, 2));
      console.log(email, name);
    }
  });
  return (
    <Container>
      <Card {...rest} className={clsx(classes.root, className)}>
        <form autoComplete="off" onSubmit={formik.handleSubmit}>
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <CardContent>
            <Grid container spacing={3}>
              <Grid item md={6} xs={12}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="name"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>

              <Grid item md={6} xs={12}>
                <TextField
                  fvariant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
            </Grid>
            <Divider />
            <br />
            <Button
              color="primary"
              variant="contained"
              fullWidth
              type="submit"
              className={classes.submit}
            >
              Save details
            </Button>
          </CardContent>
        </form>
      </Card>
    </Container>
  );
};

AccountDetails.propTypes = {
  className: PropTypes.string
};

export default AccountDetails;

"use client";

import { useFormik } from "formik";

import { Box, Button } from "@chakra-ui/react";
import { MoneyInput } from "components/MoneyInput";

export const AssetsForm = () => {
  const formik = useFormik({
    initialValues: {
      cash: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box minW={800}>
      <form onSubmit={formik.handleSubmit}>
        <MoneyInput
          label="Cash"
          name="cash"
          value={formik.values.cash}
          placeholder="How much dough you got?"
          onChange={formik.handleChange}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

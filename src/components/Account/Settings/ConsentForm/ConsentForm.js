import React from "react";
import { Field, Form, Formik } from "formik";

const initialValues = {
  checked: [],
};

function ConsentForm() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {({ values }) => (
        <Form>
          <label>
            <Field type="checkbox" name="checked" value="Zero" />
            Check all
          </label>
          <label>
            <Field type="checkbox" name="checked" value="One" />I want to
            receive information about current offers and promotions by email{" "}
            <span>More</span>
          </label>
          <label>
            <Field type="checkbox" name="checked" value="Two" />I want to recive
            SMS messages <span>More</span>
          </label>
          <label>
            <Field type="checkbox" name="checked" value="Three" />I want to
            receive an offer tailored to my needs<span> More</span>
          </label>
          <button type="submit">Save consents</button>
        </Form>
      )}
    </Formik>
  );
}

export default ConsentForm;

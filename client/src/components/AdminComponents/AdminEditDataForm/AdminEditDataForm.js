import React from "react";
import FieldComponentEdit from "../../FormikComponents/FieldComponentEdit/FieldComponentEdit";
import { Form, Formik } from "formik";
import BtnConfirm from "../../Buttons/BtnConfirm/BtnConfirm";
import BtnCloseEditProduct from "../../Buttons/BtnCloseEditProduct/BtnCloseEditProduct";
import styles from "./AdminEditDataForm.module.scss";
import putDataUtil from "../../../utils/putDataUtil";

function AdminEditDataForm(props) {
  const { dataForm, apiEndpoint, handleAction, initValues, validationSchema } =
    props;

  async function onSubmit(values, { setSubmitting }) {
    const response = await putDataUtil(apiEndpoint, values);
    window.location.reload();
  }

  return (
    <div>
      <div className={styles.AdminEditDataForm}>
        <Formik
          initialValues={{ ...initValues }}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form>
            {dataForm.map((item, index) => (
              <FieldComponentEdit item={item} key={index} />
            ))}

            <div className={styles.btnsActions}>
              <BtnConfirm />

              <BtnCloseEditProduct handleBtn={handleAction} />
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default AdminEditDataForm;

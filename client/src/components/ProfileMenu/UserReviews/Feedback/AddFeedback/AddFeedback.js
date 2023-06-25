import React, { useState } from "react";
import styles from "./AddFeedback.module.scss";
import RatingsStars from "../../../../RatingStars/RatingStars";
import TextareaCom from "../../../../TextareaCom/TextareaCom";
import BtnClose from "../../../../Buttons/BtnClose/BtnClose";
import BtnSave from "../../../../Buttons/BtnSave/BtnSave";
import { PiPlusLight } from "react-icons/pi";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import ErrMessage from "../../../../ErrorMessage/ErrMessage";

const validationSchema = Yup.object().shape({
  rate: Yup.number().min(1, "Required"),
  comment: Yup.string().required("Required"),
});

function AddFeedback({ handleBtn }) {
  const initialValues = {
    userId: "",
    userName: "",
    productId: "",
    productName: "",
    rate: 0,
    comment: "",
    likes: 0,
    dislikes: 0,
    photos: [],
  };

  return (
    <div className={styles.AddFeedback}>
      <div className={styles.feedbackBar}>
        <span>Add review</span>
        <BtnClose handleBtn={handleBtn} />
      </div>
      <div className={styles.formDiv}>
        <div className={styles.productNameDiv}>
          <img src="/images/product-1.png" alt="product" />{" "}
          <span>Caffe Crema Dolce, 1 kg</span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              actions.setSubmitting(false);
            }, 1000);
          }}
        >
          {(props) => (
            <Form>
              <div className={styles.productRateDiv}>
                <span>Rate the product</span>
                <RatingsStars
                  tab={1}
                  size={"large"}
                  rate={props.values.rate}
                  setFieldValue={props.setFieldValue}
                />
                <ErrMessage name={"rate"} />
              </div>
              <div className={styles.productContentDiv}>
                <p className={styles.pTitle}>
                  Type what do you think about our product
                </p>
                <p className={styles.pText}>
                  Remember that your opinion should concern the product and its
                  functions.
                </p>
                <p className={styles.pModerateReviews}>
                  Check how we moderate reviews.
                </p>
              </div>
              <TextareaCom setFieldValue={props.setFieldValue} />
              <ErrMessage name={"comment"} />
              <div className={styles.addImageDiv}>
                <div className={styles.squarePlus}>
                  <PiPlusLight size={25} />
                  {/* <input type="file" id="myFile" name="filename"></input> */}
                </div>
                <div className={styles.feedbackText}>
                  <p className={styles.firstParagraph}>Add photo (optional) </p>
                  <p className={styles.secondParagraph}>
                    Supported file types: JPG, JPEG, PNG and GIF.
                  </p>
                </div>
              </div>
              <BtnSave />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default AddFeedback;

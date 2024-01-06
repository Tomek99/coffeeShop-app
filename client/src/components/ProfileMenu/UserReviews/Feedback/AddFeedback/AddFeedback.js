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
import axios from "axios";

const validationSchema = Yup.object().shape({
  rate: Yup.number().min(1, "Required"),
  comment: Yup.string().required("Required"),
});

function AddFeedback({ handleBtn, item }) {
  const reviewId = item._id;

  const initialValues = {
    userImages: "",
    comment: "",
    rate: 0,
    productId: item.productId,
    isCheckedReview: true,
  };

  async function onSubmit(values, { resetForm }) {
    const res = await axios.put(
      `${process.env.REACT_APP_API_URI}/api/reviews/type-review`,
      { reviewId, values }
    );

    resetForm();
    window.location.reload();
  }

  return (
    <div className={styles.AddFeedback}>
      <div className={styles.feedbackBar}>
        <span>Add review</span>
        <BtnClose handleBtn={handleBtn} />
      </div>
      <div className={styles.formDiv}>
        <div className={styles.productNameDiv}>
          <img src={item.productImage} alt="product" />{" "}
          <span>Caffe Crema Dolce, 1 kg</span>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
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
                <span className={styles.pTitle}>
                  Type what do you think about our product
                </span>
                <span className={styles.pText}>
                  Remember that your opinion should concern the product and its
                  functions.
                </span>
                <span className={styles.pModerateReviews}>
                  Check how we moderate reviews.
                </span>
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

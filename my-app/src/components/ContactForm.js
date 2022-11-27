import { React } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const initialValues = {
    name: '',
    email: '',
    phoneNumber: '',
}

const validationSchema = Yup.object().shape({
    name: Yup.string().min(4, "Must be 4 characters or more"),
    email: Yup.string().email('Invalid email address').required('Required'),
    phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')
})

const onSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
        resetForm();
    }, 400);
}


function ContactForm() {
    return (

        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" />
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" />
                <Field type="text" name="phoneNumber" placeholder="Number" />
                <ErrorMessage name="phoneNumber" />
                <button type="submit">Contact Now</button>
            </Form>
        </Formik>

    )
}

export default ContactForm
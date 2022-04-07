import React from "react";
import { Link } from "react-router-dom";
import Logo from "../image/rodufy.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { register } from "../redux/actions/userActions";

// form validation
const reviewSchema = yup.object({
  email: yup.string().required("Email is required").email("Email is not valid"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be 8 characters or longer"),
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle");
  const { error } = useSelector((state) => state.error);

  //Initial value before form is submitted
  const initialValues = {
    email: "",
    password: "",
  };

  //This is invoked when the form is submitted
  const handleSubmit = async ({ email, password }) => {
    setStatus("loading");

    //Payload Schema
    const userInfo = {
      email,
      password,
    };

    //Get a response from the api call
    const responseData = await dispatch(register(userInfo));

    //Display a message according to the response status
    if (responseData?.status === 200) {
      setTimeout(() => {
        setStatus("success");
        toast.success("User successfully registered!");

        setTimeout(() => {
          navigate("/login");
        }, 3000);
      }, 2000);
    } else {
      setStatus("error");
      setTimeout(() => {
        toast.error(`${error}`);
      }, 3000);
    }
  };

  //Changes the text in the register button depending on the status
  const renderSubmitText = () => {
    if (status === "idle" || status === "error") {
      return "Register";
    } else if (status === "success") {
      return "Registered!";
    } else if (status === "loading") {
      return "Registering...";
    }
  };

  return (
    <div>
      <Link to="/">
        <div className="sidebar md:w-48 w-full p-5 fixed">
          <img src={Logo} alt="Rodufy Logo" className="w-36 h-auto" />
        </div>
      </Link>
      <section className="md:ml-48 flex items-center h-screen bg-tertiary">
        <div className="register sm:m-12 m-6 sm:px-10 px-8 py-16  bg-white drop-shadow-lg rounded-xl">
          <h3 className="text-center text-lg font-bold">Register</h3>
          <Toaster position="top-right" />
          <Formik
            initialValues={initialValues}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
              actions.resetForm();
              handleSubmit(values);
            }}
          >
            {({ isSubmitting }) => (
              <div>
                <Form className="py-6">
                  <Field
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="Email"
                    className="bg-tertiary w-full p-4 mb-4 border-none rounded outline-none"
                  />

                  <ErrorMessage
                    name="email"
                    component="div"
                    className="py-3 flex justify-center text-red-500 text-xs italic"
                  />

                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-tertiary w-full p-4 mb-2 border-none rounded outline-none"
                  />

                  <ErrorMessage
                    name="password"
                    component="div"
                    className="py-3 flex justify-center text-red-500 text-xs italic"
                  />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`text-center bg-secondary w-full text-white rounded hover:bg-orange-600 p-4 mt-6 ${
                      status === "loading" && "bg-opacity-70"
                    }`}
                  >
                    {renderSubmitText()}
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default Register;

// import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../image/rodufy.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { clearError, login } from "../redux/actions/userActions";

// form validation
const reviewSchema = yup.object({
  email: yup
    .string()
    .required("Email is required to Login")
    .email("Email is not valid"),
  password: yup.string().required("Password is required Login"),
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [status, setStatus] = useState("idle");
  const { error } = useSelector((state) => state.error);

  //On route change, reset error to null
  useEffect(() => {
    dispatch(clearError());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Initial value before form is submitted
  const initialValues = {
    email: "",
    password: "",
  };

  //This is invoked when the form is submitted
  const handleSubmit = async ({ email, password }) => {
    setStatus("loading");

    //Payload Schema
    const loggedInUser = {
      email,
      password,
    };

    //Get a response from the api call
    const responseData = await dispatch(login(loggedInUser));

    //Display a message according to the response status
    if (responseData?.status === 200) {
      setTimeout(() => {
        setStatus("success");
        navigate("/post");
      }, 2000);
    } else {
      setStatus("error");
      setTimeout(() => {
        !error
          ? toast.error("Something went wrong. Please try again.")
          : toast.error(`${error}`);
      }, 2000);
    }
  };

  //Changes the text in the login button depending on the status
  const renderSubmitText = () => {
    if (status === "idle" || status === "error") {
      return "Login";
    } else if (status === "success") {
      return "Logged In!";
    } else if (status === "loading") {
      return "Logging in...";
    }
  };

  return (
    <div>
      <div className="sidebar md:w-52 w-full p-5 fixed flex justify-center md:justify-start ">
        <Link to="/">
          <img src={Logo} alt="Rodufy Logo" className="w-36 h-auto" />
        </Link>
      </div>

      <section className="md:ml-52 flex justify-center md:justify-start items-center h-screen bg-tertiary">
        <div className="register md:m-20 m-6 sm:px-10 px-8 py-16 bg-white drop-shadow-lg rounded-xl max-w-lg w-full">
          <h3 className="text-center text-lg font-bold">Login</h3>
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
              <Form className="py-6">
                <div>
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
                    className="py-3 flex justify-center error text-red-500 text-xs italic"
                  />
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-tertiary w-full p-4 mb-2 border-none rounded outline-none"
                  />

                  <ErrorMessage
                    name="password"
                    component="div"
                    className="py-3 flex justify-center error text-red-500 text-xs italic"
                    id="error"
                  />
                </div>
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
            )}
          </Formik>
        </div>
      </section>
    </div>
  );
};

export default Login;

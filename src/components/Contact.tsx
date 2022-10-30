import { Formik } from "formik";
import React from "react";
import * as Z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

const Contact = () => {
  const schema = Z.object({
    name: Z.string({
      required_error: "How do I address you?",
    }),
    email: Z.string({
      required_error: "Email is required for me to get back to you!",
    }).email("Invalid email"),
    message: Z.string({
      required_error: "What do you have for me?",
    }),
  });
  return (
    <div className="container mx-auto h-full">
      <div className="gradient relative grid-rows-5 bg-slate-300 px-12 pt-10 text-black sm:px-40">
        <h1 className="text-gradient-to-r text-center text-3xl sm:text-6xl">
          Drop me a message!
        </h1>
        <h2 className="text-gradient-to-l hidden text-center text-xl sm:block sm:text-3xl">
          Want to connect? I will get back ASAP!
        </h2>
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={(e) => console.log(e)}
          validationSchema={toFormikValidationSchema(schema)}
        >
          {(props) => (
            <form
              onSubmit={props.handleSubmit}
              className="grid w-full grid-rows-3 gap-5 p-3 py-6 md:grid-rows-[1fr,0.5fr,0.5fr] lg:py-16"
            >
              <div className="grid w-full grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-10">
                <div className="flex flex-col">
                  <span>Your name</span>
                  <input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="name"
                    placeholder="Enter your name"
                    className="border-b border-solid border-[#2c7c8c] bg-inherit focus-visible:outline-none"
                  />
                  {props.errors.name && (
                    <div id="name">{props.errors.name}</div>
                  )}
                </div>
                <div className="flex flex-col">
                  <span>Your email</span>
                  <input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.email}
                    name="email"
                    placeholder="Enter your email"
                    className="border-b border-solid border-[#2c7c8c] bg-inherit"
                  />
                  {props.errors.email && (
                    <div id="email">{props.errors.email}</div>
                  )}
                </div>
              </div>
              <div className="w-full">
                <span>Your message</span>
                <input
                  type="text"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.message}
                  name="message"
                  placeholder="Enter your message"
                  className="w-full border-b border-solid border-[#2c7c8c] bg-inherit"
                />
                {props.errors.message && (
                  <div id="message">{props.errors.message}</div>
                )}
              </div>
              <button
                type="submit"
                className="my-8 rounded-md border-2 border-[#2c7c8c] bg-transparent p-1 hover:bg-[#2c7c8c] hover:bg-opacity-20 lg:p-3"
              >
                Submit
              </button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Contact;

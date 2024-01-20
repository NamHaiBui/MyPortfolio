import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const { alert, showAlert, hideAlert } = useAlert();
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefult();
    setIsLoading(True);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Nam",
          from_email: form.email,
          to_email: "namhaibui693@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setIsLoading(false);
        showAlert({
          show: true,
          text: "Message sent successfully!",
          type: "success",
        });
        setTimeout(() => {
          hideAlert();
          // setCurrentAnimation('idle')
          setForm({ name: "", email: "", message: "" });
        }, [3000]);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        showAlert({
          show: true,
          text: "Message failed to send!",
          type: "danger",
        });
      });
  };

  return (
    <section className="relative flex lg:flex-wor flex-col max-container">
      {alert.show && <Alert {...alert} />}
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text"> Get in touch</h1>
        <form className="w-full flex flex-col gap-7 mt-14">
          <label className="text-black-500 font-semibold">
            What should I call you by?
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <label className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="email@place.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-black-500 font-semibold">
            Message
            <input
              name="message"
              className="input"
              placeholder="What do you want to talk about?"
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="btn"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onSubmit={handleSubmit}
            >
              {isLoading ? "Sending" : "Send Message"}
            </button>
          </label>
        </form>
      </div>
    </section>
  );
};

export default Contact;

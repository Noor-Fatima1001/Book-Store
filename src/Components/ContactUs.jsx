import React from "react";
import { useForm } from "react-hook-form";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          
          {/* Name */}
          <div>
            <label className="block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <span className="text-sm text-red-500">Name is required</span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-sm text-red-500">Email is required</span>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block mb-1">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full px-3 py-2 border rounded-md outline-none"
              {...register("message", { required: true })}
            />
            {errors.message && (
              <span className="text-sm text-red-500">Message is required</span>
            )}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-700 duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;

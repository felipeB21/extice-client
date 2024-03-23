"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { z } from "zod";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters long")
    .max(18, "Name must be less than 18 characters long"),
  username: z
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters long")
    .max(18, "Username must be less than 18 characters long"),
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(18, "Password must be less than 18 characters long"),
});

type RegisterSchema = z.infer<typeof formSchema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-20 border rounded-xl bg-gradient-to-r from-slate-50 to-gray-50 flex flex-col gap-8">
        <div>
          <h4>Sign up</h4>
          <p>Is easy and fast!</p>
        </div>

        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <div>
              <input
                {...register("name")}
                className="input-form"
                type="text"
                placeholder="Name"
              />
              {errors?.name && (
                <p className="text-red-500 text-sm pt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("username")}
                className="input-form"
                type="text"
                placeholder="Username"
              />
              {errors?.username && (
                <p className="text-red-500 text-sm pt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("email")}
                className="input-form"
                type="email"
                placeholder="Email"
              />
              {errors?.email && (
                <p className="text-red-500 text-sm pt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <input
                {...register("password")}
                className="input-form"
                type="password"
                placeholder="Password"
              />
              {errors?.password && (
                <p className="text-red-500 text-sm pt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button className="btn-form">Sign up</button>
          </form>
        </div>
        <div className="border border-neutral-300">{/* <p>or</p> */}</div>
        <div>
          <p className="text-lg">
            Already have an account?{" "}
            <Link className="text-sky-500 hover:underline" href={"/login"}>
              Log in
            </Link>
          </p>
          <p className="text-gray-500">
            Learn more{" "}
            <Link href={"/about"} className="text-sky-500 hover:underline">
              about us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

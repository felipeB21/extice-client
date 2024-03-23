"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import React from "react";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .max(18, "Password must be less than 18 characters long"),
});

type LoginSchema = z.infer<typeof formSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<LoginSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
    reset();
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="p-20 border rounded-xl bg-gradient-to-r from-slate-50 to-gray-50 flex flex-col gap-8">
        <div>
          <h4>Log in</h4>
          <p>Is easy and fast!</p>
        </div>

        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
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
            <button className="btn-form">Log in</button>
          </form>
        </div>
        <div className="border border-neutral-300">{/* <p>or</p> */}</div>
        <div>
          <p className="text-lg">
            Don&apos;t have an account?{" "}
            <Link className="text-sky-500 hover:underline" href={"/signup"}>
              Sign up
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

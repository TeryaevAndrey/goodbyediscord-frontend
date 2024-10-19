import { Button, TextField } from "@/components/ui";
import { PropsWithClassName } from "@/shared/types";
import { SignInFormData } from "@/shared/types/auth.types";
import { cn } from "@/shared/utils";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const SignInForm: FC<PropsWithClassName> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  const formHandler = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className={cn("sm:min-w-[250px]", className)} onSubmit={formHandler}>
      <div className="flex flex-col gap-4">
        <TextField
          {...register("email", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          placeholder="Email"
        />
        <TextField
          {...register("password", {
            required: {
              value: true,
              message: "Поле обязательно для заполнения",
            },
          })}
          placeholder="Password"
        />
      </div>

      <Button className="mt-6">Войти</Button>

      <Link
        className="mt-2 flex justify-center link link-secondary"
        to="/auth/sign-up"
      >
        Регистрация
      </Link>
    </form>
  );
};

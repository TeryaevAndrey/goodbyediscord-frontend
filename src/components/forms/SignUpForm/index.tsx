import { Button, FormControl, TextField } from "@/components/ui";
import { FormControlError } from "@/components/ui/FormControl/components";
import { PropsWithClassName } from "@/shared/types";
import { SignUpFormData } from "@/shared/types/auth.types";
import { cn } from "@/shared/utils";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export const SignUpForm: FC<PropsWithClassName> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  const formHandler = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className={cn("sm:min-w-[250px]", className)} onSubmit={formHandler}>
      <div className="flex flex-col gap-4">
        <FormControl>
          <TextField
            {...register("email", {
              required: {
                value: true,
                message: "Поле обязательно для заполнения",
              },
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Entered value does not match email format",
              },
            })}
            placeholder="Email"
          />

          {errors?.email?.message && (
            <FormControlError>{errors.email.message}</FormControlError>
          )}
        </FormControl>
        <FormControl>
          <TextField
            {...register("login", {
              required: {
                value: true,
                message: "Поле обязательно для заполнения",
              },
            })}
            placeholder="Login"
          />

          {errors?.login?.message && (
            <FormControlError>{errors.login.message}</FormControlError>
          )}
        </FormControl>
        <FormControl>
          <TextField
            {...register("password", {
              required: {
                value: true,
                message: "Поле обязательно для заполнения",
              },
            })}
            placeholder="Password"
          />

          {errors?.password?.message && (
            <FormControlError>{errors.password.message}</FormControlError>
          )}
        </FormControl>
        <FormControl>
          <TextField
            {...register("passwordRepeat", {
              required: {
                value: true,
                message: "Поле обязательно для заполнения",
              },
            })}
            placeholder="Password repeat"
          />

          {errors?.passwordRepeat?.message && (
            <FormControlError>{errors.passwordRepeat.message}</FormControlError>
          )}
        </FormControl>
      </div>

      <Button className="mt-6">Регистрация</Button>

      <Link
        className="mt-2 flex justify-center link link-secondary"
        to="/auth/sign-in"
      >
        Вход
      </Link>
    </form>
  );
};

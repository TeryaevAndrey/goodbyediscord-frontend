import { Button, FormControl, TextField } from "@/components/ui";
import { FormControlError } from "@/components/ui/FormControl/components";
import { ErrorRes, PropsWithClassName } from "@/shared/types";
import { SignInFormData } from "@/shared/types/auth.types";
import { cn } from "@/shared/utils";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import axios, { AxiosError } from "axios";

export const SignInForm: FC<PropsWithClassName> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();
  const [isLoading, setIsLoading] = useState(false);

  const formHandler = handleSubmit(async (data) => {
    try {
      setIsLoading(true);

      await axios
        .get(import.meta.env.VITE_API + "/auth/csrf/", {
          withCredentials: true,
        })
        .then(async (res) => {
          const csrfToken = res.headers.get("X-CSRFToken");

          await axios
            .post(import.meta.env.VITE_API + "/auth/sign-in/", data, {
              withCredentials: true,
              headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": csrfToken,
              },
            })
            .then(() => {
              toast.success("Авторизация прошла успешно!");

              setTimeout(() => {
                window.localStorage.setItem("is-auth", "true");
                window.location.reload();
              }, 500);
            });
        })
        .catch((err: AxiosError<ErrorRes>) =>
          toast.error(err.response?.data.error)
        );
    } catch {
      toast.error("Не удалось получить токен");
    } finally {
      setIsLoading(false);
    }
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
      </div>

      <Button className="mt-6" disabled={isLoading}>
        {isLoading ? "Загрузка..." : "Войти"}
      </Button>

      <Link
        className="mt-2 flex justify-center link link-secondary"
        to="/auth/sign-up"
      >
        Регистрация
      </Link>
    </form>
  );
};

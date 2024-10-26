import { Button, FormControl, TextField } from "@/components/ui";
import { FormControlError } from "@/components/ui/FormControl/components";
import { useSignInMutation } from "@/shared/store/api";
import { PropsWithClassName } from "@/shared/types";
import { SignInParams } from "@/shared/types/auth.types";
import { cn } from "@/shared/utils";
import Cookies from "js-cookie";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export const SignInForm: FC<PropsWithClassName> = ({ className }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInParams>();
  const [mutate, { isLoading }] = useSignInMutation();

  const formHandler = handleSubmit((data) => {
    mutate(data)
      .then((res) => {
        if (res.error) {
          toast.error("Что-то пошло не так...");
        } else {
          toast.success("Авторизация прошла успешно!");

          const { access, refresh } = res.data;

          Cookies.set("access", access);
          Cookies.set("refresh", refresh);

          setTimeout(() => {
            window.location.reload();
          }, 500);
        }
      })
      .catch(() => {
        toast.error("Ошибка во время авторизации");
      });
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

import { Button, TextField } from "@/components/ui";
import { PropsWithClassName } from "@/shared/types";
import { cn } from "@/shared/utils";
import { FC } from "react";
import { Link } from "react-router-dom";

export const SignUpForm: FC<PropsWithClassName> = ({ className }) => {
  return (
    <form className={cn("sm:min-w-[250px]", className)}>
      <div className="flex flex-col gap-4">
        <TextField placeholder="Email" />
        <TextField placeholder="Login" />
        <TextField placeholder="Password" />
        <TextField placeholder="Password repeat" />
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

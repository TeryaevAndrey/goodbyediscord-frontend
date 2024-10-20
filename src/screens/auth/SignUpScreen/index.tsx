import { SignUpForm } from "@/components/forms";
import AuthLayout from "@/components/layout/AuthLayout";
import { AuthBox } from "@/components/widgets";
import { Title } from "@/components/widgets/AuthBox/components";

export const SignUpScreen = () => {
  return (
    <AuthLayout>
      <AuthBox>
        <Title className="flex justify-center">Регистрация</Title>

        <SignUpForm className="mt-6" />
      </AuthBox>
    </AuthLayout>
  );
};

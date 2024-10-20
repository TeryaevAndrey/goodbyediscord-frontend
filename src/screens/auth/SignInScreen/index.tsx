import { SignInForm } from "@/components/forms";
import AuthLayout from "@/components/layout/AuthLayout";
import { AuthBox } from "@/components/widgets";
import { Title } from "@/components/widgets/AuthBox/components";

export const SignInScreen = () => {
  return (
    <AuthLayout>
      <AuthBox>
        <Title className="flex justify-center">Вход</Title>

        <SignInForm className="mt-6" />
      </AuthBox>
    </AuthLayout>
  );
};

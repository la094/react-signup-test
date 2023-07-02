import { useEmailField, usePasswordFieldset } from "@/apps/globals/hooks";

export type SignupFormModel = {
  email: string;
  password: string;
  passwordRepeat: string;
};

export const useSignupForm = () => {
  const {
    email,
    handleEmailChange,
    errorMessage: emailErrorMessage,
    isValid: isValidEmail,
  } = useEmailField();
  const {
    password,
    handlePwChange,
    pwErrorMessage,

    passwordRepeat,
    handlePwRepeatChange,
    pwRepeatErrorMessage,

    isValidFieldset,
  } = usePasswordFieldset();

  const isValidForm = isValidEmail && isValidFieldset;

  const resetForm = () => {
    handleEmailChange("");
    handlePwChange("");
    handlePwRepeatChange("");
  };

  const handleSubmit = (submit: (model: SignupFormModel) => void) => {
    const data: SignupFormModel = {
      email,
      password,
      passwordRepeat,
    };

    submit(data);
  };

  return {
    email,
    handleEmailChange,
    emailErrorMessage,

    password,
    handlePwChange,
    pwErrorMessage,

    passwordRepeat,
    handlePwRepeatChange,
    pwRepeatErrorMessage,

    isValidForm,
    resetForm,
    handleSubmit,
  };
};

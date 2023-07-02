import { useState } from "react";

import { Regex } from "../regex";

export const useEmailField = () => {
  const [email, setEmail] = useState("");

  const isValid = Regex.email.test(email);
  const isError = !!email && !isValid;
  const errorMessage = isError ? "이메일 형식이 맞지 않습니다." : "";

  const handleEmailChange = (v: string) => {
    setEmail(v);
  };

  return {
    email,
    handleEmailChange,
    isValid,
    isError,
    errorMessage,
  };
};

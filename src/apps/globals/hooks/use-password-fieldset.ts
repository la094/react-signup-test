import { useState } from "react";

import { Regex } from "../regex";

export const usePasswordFieldset = () => {
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const isValidPw = Regex.password.test(password);
  const isErrorPw = !!password && !isValidPw;
  const pwErrorMessage = isErrorPw
    ? "영문자, 특문 !@#$%^&*()를 포함하여 8~20자로 입력해주세요."
    : "";

  const isMatchedPw = password === passwordRepeat;
  const isPwRepeatError = !!passwordRepeat && !isMatchedPw;
  const pwRepeatErrorMessage = isPwRepeatError
    ? "비밀번호가 일치하지 않습니다."
    : "";

  const isValidFieldset = isValidPw && isMatchedPw;

  const handlePwChange = (v: string) => {
    setPassword(v);
  };

  const handlePwRepeatChange = (v: string) => {
    setPasswordRepeat(v);
  };

  return {
    password,
    handlePwChange,
    isValidPw,
    isErrorPw,
    pwErrorMessage,

    passwordRepeat,
    handlePwRepeatChange,
    isMatchedPw,
    isPwRepeatError,
    pwRepeatErrorMessage,

    isValidFieldset,
  };
};

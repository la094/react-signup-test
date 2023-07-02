import { SignupFormModel } from "./use-signup-form";

export const useSignup = () => {
  const signup = async (model: SignupFormModel) => {
    // TODO: API Call

    alert(JSON.stringify(model));
    alert("회원가입이 완료되었습니다.");
  };

  return {
    signup,
  };
};

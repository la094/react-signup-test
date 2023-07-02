import { act, renderHook } from "@testing-library/react";

import { SignupFormModel, useSignupForm } from "./use-signup-form";

describe("use-email-field", () => {
  const defaultFormModel: SignupFormModel = {
    email: "asd@gmail.com",
    password: "asdasd123!!",
    passwordRepeat: "asdasd123!!",
  };

  it("👀 폼 모델의 모든 데이터가 유효하다면 ✅ 폼 유효성 검사가 통과합니다.", () => {
    // given
    const { email, password, passwordRepeat } = defaultFormModel;

    const { result } = renderHook(() => useSignupForm());
    const getInst = () => result.current;

    // when
    act(() => {
      getInst().handleEmailChange(email);
      getInst().handlePwChange(password);
      getInst().handlePwRepeatChange(passwordRepeat);
    });

    // then
    expect(getInst().isValidForm).toBe(true);
  });

  it("👀 resetForm 함수를 호출하면 ✅ 폼 모델 데이터가 초기화 됩니다.", () => {
    // given
    const { email, password, passwordRepeat } = defaultFormModel;

    const { result } = renderHook(() => useSignupForm());
    const getInst = () => result.current;

    // when
    act(() => {
      getInst().handleEmailChange(email);
      getInst().handlePwChange(password);
      getInst().handlePwRepeatChange(passwordRepeat);

      getInst().resetForm();
    });

    // then
    expect(getInst().email).toBe("");
    expect(getInst().password).toBe("");
    expect(getInst().passwordRepeat).toBe("");
  });

  it("👀 handleSubmit 호출 시, ✅ 전달한 콜백 함수가 완성된 폼 모델 데이터와 함께 호출됩니다.", () => {
    // given
    const { email, password, passwordRepeat } = defaultFormModel;

    const { result } = renderHook(() => useSignupForm());
    const getInst = () => result.current;

    const mockFn = jest.fn();

    // when
    act(() => {
      getInst().handleEmailChange(email);
      getInst().handlePwChange(password);
      getInst().handlePwRepeatChange(passwordRepeat);
    });

    getInst().handleSubmit(mockFn);

    // then
    expect(mockFn).toBeCalledTimes(1);
    expect(mockFn).toBeCalledWith(defaultFormModel);
  });
});

import { act, renderHook } from "@testing-library/react";
import { usePasswordFieldset } from "./use-password-fieldset";

describe("use-password-fieldset", () => {
  it("👀 형식에 맞지 않는 비밀번호 입력이 들어오면 ✅ 에러메시지가 존재합니다.", () => {
    // given
    const invalidValue = "asd";

    const { result } = renderHook(() => usePasswordFieldset());
    const getInst = () => result.current;

    // when
    act(() => {
      getInst().handlePwChange(invalidValue);
    });

    // then
    const isExistErrorMsg = !!getInst().pwErrorMessage;
    expect(isExistErrorMsg).toBe(true);
  });

  it("👀 형식에 맞는 비밀번호 입력이 들어오면 ✅ 비밀번호 유효성 검사가 통과합니다.", () => {
    // given
    const validValue = "asdasd123!!";

    const { result } = renderHook(() => usePasswordFieldset());
    const getInst = () => result.current;

    // when
    act(() => {
      getInst().handlePwChange(validValue);
    });

    // then
    expect(getInst().isValidPw).toBe(true);
  });

  it("👀 비밀번호와 비밀번호 재입력이 미일치하면 ✅ 에러메시지가 존재합니다.", () => {
    // given
    const password = "asdasd123!!";
    const notMatchedPasswordRepeat = "asdasd123@@";

    const { result } = renderHook(() => usePasswordFieldset());
    const getInst = () => result.current;

    // when
    act(() => {
      getInst().handlePwChange(password);
      getInst().handlePwRepeatChange(notMatchedPasswordRepeat);
    });

    // then
    const isExistErrorMsg = !!getInst().pwRepeatErrorMessage;
    expect(isExistErrorMsg).toBe(true);
  });

  it("👀 비밀번호와 비밀번호 재입력이 일치하면 ✅ 비밀번호 재입력 유효성 검사가 통과합니다.", () => {
    // given
    const password = "asdasd123!!";
    const matchedPasswordRepeat = password;

    const { result } = renderHook(() => usePasswordFieldset());
    const getInst = () => result.current;

    // when
    act(() => {
      getInst().handlePwChange(password);
      getInst().handlePwRepeatChange(matchedPasswordRepeat);
    });

    // then
    expect(getInst().isMatchedPw).toBe(true);
  });

  it("👀 비밀번호 유효성 검사, 비밀번호 재입력 유효성 검사가 모두 통과되면 ✅ 비밀번호 필드셋 유효성 검사가 통과합니다.", () => {
    // given
    const password = "asdasd123!!";
    const matchedPasswordRepeat = password;

    const { result } = renderHook(() => usePasswordFieldset());
    const getInst = () => result.current;

    // when
    act(() => {
      getInst().handlePwChange(password);
      getInst().handlePwRepeatChange(matchedPasswordRepeat);
    });

    // then
    expect(getInst().isValidFieldset).toBe(true);
  });
});

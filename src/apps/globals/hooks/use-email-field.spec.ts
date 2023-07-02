import { act, renderHook } from "@testing-library/react";

import { useEmailField } from "./use-email-field";

describe("use-email-field", () => {
  it("👀 형식에 맞지 않는 입력이 들어오면 ✅ 에러메시지가 존재합니다.", () => {
    // given
    const invalidValue = "InvalidEmail";

    const { result } = renderHook(() => useEmailField());
    const getInst = () => result.current;

    // when
    act(() => {
      getInst().handleEmailChange(invalidValue);
    });

    // then
    const isExistErrorMsg = !!getInst().errorMessage;
    expect(isExistErrorMsg).toBe(true);
  });

  it("👀 형식에 맞는 입력이 들어오면 ✅ 유효성 검사가 통과합니다.", () => {
    // given
    const validValue = "asd@gmail.com";

    const { result } = renderHook(() => useEmailField());
    const getInst = () => result.current;

    // when
    act(() => {
      getInst().handleEmailChange(validValue);
    });

    // then
    expect(getInst().isValid).toBe(true);
  });
});

import { Regex } from "./regex";

describe("Email regex", () => {
  it("👀 이메일 형식에 맞지 않으면 ✅ 결과가 false 입니다.", () => {
    // given
    const email = "asd";

    // when
    const result = Regex.email.test(email);

    // then
    expect(result).toBe(false);
  });

  it("👀 이메일 형식에 맞으면 ✅ 결과가 true 입니다.", () => {
    // given
    const email = "asd@gmail.com";

    // when
    const result = Regex.email.test(email);

    // then
    expect(result).toBe(true);
  });
});

describe("Password regex", () => {
  it("👀 비밀번호 형식에 맞지 않으면 ✅ 결과가 false 입니다.", () => {
    // given
    const tooShort = "asd";
    const tooLong = "asdasdasdasdasdasdasdsaddasdasdasdasd";
    const notIncludedNumber = "asdasdasd!!";
    const notIncludedSpecialCharacters = "asdasd123";
    const notIncludedAlphabet = "123123!!";
    const notAllowedSpecialCharacters = "asdasd123>>";

    // when
    const result = [
      tooShort,
      tooLong,
      notIncludedNumber,
      notIncludedSpecialCharacters,
      notIncludedAlphabet,
      notAllowedSpecialCharacters,
    ]
      .map((it) => Regex.password.test(it))
      .every((isPassed) => isPassed);

    // then
    expect(result).toBe(false);
  });

  it("👀 비밀번호 형식에 맞으면 ✅ 결과가 true 입니다.", () => {
    // given
    const password = "asdasd123!!";

    // when
    const result = Regex.password.test(password);

    // then
    expect(result).toBe(true);
  });
});

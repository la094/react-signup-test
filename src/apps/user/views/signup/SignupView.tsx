import { css } from "@emotion/react";
import { Button, TextField } from "@mui/material";

import { useSignup, useSignupForm } from "./hooks";

export const SignupView = () => {
  const st = useStyles();

  const { signup } = useSignup();

  const {
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
    handleSubmit: handleFormSubmit,
  } = useSignupForm();

  const handleCancel = () => {
    if (!confirm("작성하던 내용이 초기화됩니다.\n\n정말 취소하시겠어요?"))
      return;

    resetForm();
  };
  const handleSubmit = () => handleFormSubmit(signup);

  return (
    <main css={st.root}>
      <div css={st.inner}>
        <div css={st.mainContainer}>
          <h6 css={st.mainTitle}>{"Signup"}</h6>
        </div>

        <div css={st.form}>
          <TextField
            label={"Email"}
            type={"email"}
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            error={!!emailErrorMessage}
            helperText={emailErrorMessage}
          />

          <div css={st.passwordFieldsContainer}>
            <TextField
              label={"Password"}
              type={"password"}
              value={password}
              onChange={(e) => handlePwChange(e.target.value)}
              error={!!pwErrorMessage}
              helperText={pwErrorMessage}
            />
            <TextField
              label={"Password repeat"}
              type={"password"}
              value={passwordRepeat}
              onChange={(e) => handlePwRepeatChange(e.target.value)}
              error={!!pwRepeatErrorMessage}
              helperText={pwRepeatErrorMessage}
            />
          </div>
        </div>

        <div css={st.buttonsContainer}>
          <Button variant={"outlined"} onClick={handleCancel}>
            {"취소"}
          </Button>
          <Button
            variant={"contained"}
            disabled={!isValidForm}
            onClick={handleSubmit}
          >
            {"확인"}
          </Button>
        </div>
      </div>
    </main>
  );
};

const useStyles = () => {
  return {
    root: css`
      display: flex;
      flex-direction: column;
      align-items: center;

      padding: 100px 24px;
    `,
    inner: css`
      display: flex;
      flex-direction: column;
      gap: 36px;

      width: 100%;
      max-width: 400px;
    `,

    mainContainer: css`
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;

      width: 100%;
    `,
    mainTitle: css`
      font-size: 24px;
      font-weight: 500;
    `,

    form: css`
      display: flex;
      flex-direction: column;
      gap: 36px;

      width: 100%;
    `,
    passwordFieldsContainer: css`
      display: flex;
      flex-direction: column;
      gap: 24px;
    `,

    buttonsContainer: css`
      display: flex;
      justify-content: flex-end;
      gap: 16px;
    `,
  };
};

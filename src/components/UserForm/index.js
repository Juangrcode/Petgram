import React, { Fragment } from "react";
import { useInputValue } from "../../hooks/useInputValue";
import { Error, Form, Input, Title } from "./styles";
import { SubmitButton } from "../SubmitButton";

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue("");
  const password = useInputValue("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ email: email.value, password: password.value });
  };

  return (
    <Fragment>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          disabled={disabled}
          placeholder="Email"
          {...email}
          //value={email.value}
          //onChange={email.onChange}
        />
        <Input
          disabled={disabled}
          placeholder="Password"
          type="password"
          {...password}
          //value={password.value}
          //onChange={password.onChange}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {error && <Error>{error}</Error>}
    </Fragment>
  );
};

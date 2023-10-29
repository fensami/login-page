import styled from "styled-components";
import LoginFormGroup from "./LoginFormGroup";
const LoginForm = () => {
  return (
    <>
      <Form>
        <FormTitle>Login</FormTitle>
        <LoginFormGroup></LoginFormGroup>
      </Form>
    </>
  );
};

export default LoginForm;

const Form = styled.form`
  border-radius: 12px;
  background: #fff;
  box-shadow: 0px 5px 40px 0px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
`;

const FormTitle = styled.h1`
  text-align: center;
  font-size: 48px;
  font-weight: 700;
  margin-top: 40px;
`;

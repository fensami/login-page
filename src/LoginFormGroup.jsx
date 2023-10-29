import styled from "styled-components";
import Rememberme from "./Rememberme";
import AgreeTerms from "./AgreeTerms";
import Button from "./Button";

const LoginFormGroup = () => {
  return (
    <>
      <FromGroup>
        <FormGroupTitle>Login ID</FormGroupTitle>
        <FormInput type="text" placeholder="Enter Login ID" />
      </FromGroup>
      <FromGroup>
        <FormGroupTitle>Password</FormGroupTitle>
        <FormInput type="password" placeholder="Enter Password" />
      </FromGroup>

      <Rememberme></Rememberme>
      <AgreeTerms></AgreeTerms>

      <Button></Button>
    </>
  );
};

export default LoginFormGroup;

const FromGroup = styled.div`
  width: auto;
  display: block;
  padding-right: 30px;
  margin-bottom: 40px;
`;

const FormGroupTitle = styled.label`
  display: block;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: 700;
  line-height: 110%;
`;

const FormInput = styled.input`
  border-radius: 8px;
  border: 2px solid rgba(4, 7, 47, 0.4);
  font-weight: 500;
  width: 100%;
  padding: 10px 16px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

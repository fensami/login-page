import styled from "styled-components";

const Button = () => {
  return (
    <>
      <ButtonDiv>
        <LoginButton>Login</LoginButton>
      </ButtonDiv>
      <HaveAnAccountdiv>
        <HaveAnAccount>
          Don’t have an account?{" "}
          <HaveAnAccountSpan> Register Here </HaveAnAccountSpan>
        </HaveAnAccount>
      </HaveAnAccountdiv>
    </>
  );
};

export default Button;

const LoginButton = styled.button`
  padding: 12px 224px;
  margin-top: 30px;
  border-radius: 8px;
  background: #1575a7;
  border: none;
  color: white;
  @media (max-width: 768px) {
    padding: 10px 100px;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const HaveAnAccountdiv = styled.div`
  display: flex;
  justify-content: center;
`;
const HaveAnAccount = styled.p`
  display: block;
`;

const HaveAnAccountSpan = styled.span`
  color: #f78719;
  font-size: 18px;
  font-weight: 700;
  text-decoration-line: underline;
`;

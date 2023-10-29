import LoginForm from "./LoginForm";
import logo from "./assets/logo.png";
import styled from "styled-components";

function LoginPage() {
  return (
    <Container>
      <ContainerImage src={logo} alt="" />
      <LoginForm></LoginForm>
    </Container>
  );
}

export default LoginPage;

const Container = styled.div`
  font-family: Arial;

  display: flex;
  gap: 90px;
  padding: 0 100px;
  justify-content: flex-center;
  margin: 100px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
`;

const ContainerImage = styled.img`
  width: 400px;
  height: 475px;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

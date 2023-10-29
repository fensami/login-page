import styled from "styled-components";

const Button = () => {
  return (
    <>
    
    <ButtonDiv>
     <LoginButton>Login</LoginButton> 
    </ButtonDiv>
    <HaveAnAccountdiv>

     <HaveAnAccount>Don’t have an account? Register Here</HaveAnAccount>
    </HaveAnAccountdiv>
    </>
  );
};

export default Button;

const LoginButton = styled.button`
  padding: 12px 224px;
  margin-top: 30px;
  border-radius: 8px;
background: #1575A7;
border: none;
color: white;
@media (max-width: 768px) {
    padding: 10px 100px;
  }


  /* display: block; */
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`
const HaveAnAccountdiv = styled.div`
  display: flex;
  justify-content: center;
`
const HaveAnAccount = styled.p`
  display: block;
`
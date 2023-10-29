import styled from "styled-components";

const Rememberme = () => {
  return (
    <>
      <RememberDiv>
        <CheckboxLabel>
          <RememberMeCheckbox
            type="checkbox"
            id="rememberMe"
            // checked={rememberMe}
            // onChange={handleRememberMe}
          />
          Remember Me
        </CheckboxLabel>

        <PasswordText>Change Password</PasswordText>
      </RememberDiv>
    </>
  );
};

export default Rememberme;

const RememberDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    /* flex-direction: column;
    align-items: start; */
    /* justify-items: center; */
    /* vertical-align: auto; */
  }
`;

const PasswordText = styled.h1`
  color: #f78719;
  font-size: 18px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 14px;
    /* align-items: center; */
    /* text-align: center; */
    margin-bottom: 18px;

  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

`;

const RememberMeCheckbox = styled.input`
  margin-right: 5px;
  color: #737B86;
font-size: 18px;
font-weight: 400;
@media (max-width: 768px) {
    /* flex-direction: column;
    align-items: start; */
    /* justify-items: center; */
    /* vertical-align: auto; */
    font-size: 14px;
    align-items: center;

  }
`;

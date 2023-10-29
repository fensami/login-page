import styled from "styled-components";

const AgreeTerms = () => {
  return (
    <>
      <CheckboxLabel>
        <RememberMeCheckbox type="checkbox" id="rememberMe" />
        Agree to <TermsConditions> Terms & Conditions</TermsConditions>
      </CheckboxLabel>
    </>
  );
};

export default AgreeTerms;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const RememberMeCheckbox = styled.input`
  margin-right: 5px;
`;

const TermsConditions = styled.span`
  color: #f78719;
  font-size: 18px;
  font-weight: 400;
  text-decoration-line: underline;
`;

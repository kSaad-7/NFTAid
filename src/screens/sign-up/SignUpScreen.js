import React, { useState } from "react";
import { CustomTextField } from "../../components/CustomTextField/CustomTextField";
import Checkbox from "@mui/material/Checkbox";
import {
  SignUpButton,
  CryptoIcon,
  LoginText,
  StlyedContainer,
  StlyedDiv,
  SignUpDiv,
  InputsDiv,
  TermsDiv,
  DividerDiv,
  CryptoIconsDiv,
} from "./SignUpScreen.styles.js";
import Divider from "@mui/material/Divider";

export const SignUpScreen = () => {
  const [signUpLog, setSignUpLog] = useState({
    fullName: "",
    DOB: "",
    email: "",
    userName: "",
    password: "",
    wallet: "",
  });

  const [termsCheck, setTermsCheck] = useState(false);
  const [showTermsHelperText, setShowTermsHelperText] = useState(false);

  const handleInput = (attribute, e) => {
    setSignUpLog({ ...signUpLog, [attribute]: e.target.value });
    console.log(signUpLog);
  };

  const handleTermsChange = (e) => {
    setTermsCheck(e.target.checked);
  };

  const validateData = () => termsCheck;

  const handleCheckoutClick = () => {
    const isValid = validateData();
    if (!isValid) {
      console.log("not valid");
      setShowTermsHelperText(true);
      return;
    }
    console.log("valid");
    setShowTermsHelperText(false);
  };

  const userAge = parseInt(signUpLog.DOB.toString().slice(0, 4));

  return (
    <StlyedContainer>
      <StlyedDiv>
        <img
          alt="Logo"
          src={require("../../images/logo4.png")}
          style={{ width: 150, height: 80 }}
        />
        <SignUpDiv>
          <h4>Sign up</h4>
          <InputsDiv>
            <CustomTextField
              value={signUpLog.fullName}
              label={"Full name"}
              onChange={(e) => handleInput("fullName", e)}
            />
            <CustomTextField
              type="date"
              error={userAge > 2004}
              helperText={userAge > 2004 ? "You have to be 18 to sign up." : ""}
              value={signUpLog.DOB}
              onChange={(e) => handleInput("DOB", e)}
            />
            <CustomTextField
              value={signUpLog.email}
              label={"Email"}
              onChange={(e) => handleInput("email", e)}
            />
            <CustomTextField
              value={signUpLog.userName}
              label={"User name"}
              onChange={(e) => handleInput("userName", e)}
            />
            <CustomTextField
              value={signUpLog.password}
              label={"Password"}
              onChange={(e) => handleInput("password", e)}
              type="password"
            />{" "}
            <CustomTextField
              value={signUpLog.wallet}
              label={"Wallet address"}
              onChange={(e) => handleInput("wallet", e)}
            />
            <TermsDiv>
              <Checkbox
                checked={termsCheck}
                onChange={(e) => handleTermsChange(e)}
              />
              <h5>
                I agree to the{" "}
                <span
                  id="terms_and_condtions"
                  onClick={() => window.open("https://coinbase.com")}
                >
                  terms and condtions
                </span>
              </h5>
            </TermsDiv>
            {showTermsHelperText && (
              <div
                style={{
                  width: 400,
                  height: 50,
                  textAlign: "start",
                  marginTop: -35,
                }}
              >
                <h6 style={{ color: "red" }}>
                  *Please agree to the terms and condtions.
                </h6>
              </div>
            )}
            <div className="sign-up-button-box">
              <SignUpButton onClick={handleCheckoutClick}>Sign up</SignUpButton>
            </div>
            <DividerDiv>
              <Divider>OR</Divider>
            </DividerDiv>
            <CryptoIconsDiv>
              <CryptoIcon
                src={"https://www.svgrepo.com/show/331345/coinbase-v2.svg"}
                alt="icon of coinbase"
              />
              <CryptoIcon
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/2048px-MetaMask_Fox.svg.png"
                }
                alt="icon of metamask"
              />
              <CryptoIcon
                src={"https://www.svgrepo.com/show/331309/binance.svg"}
                alt="icon of binance"
              />
            </CryptoIconsDiv>
            <span style={{ fontSize: 13 }}>
              Already have an account?{"  "}
              <LoginText href="https://coinbase.com">Login</LoginText>
            </span>
          </InputsDiv>
        </SignUpDiv>
      </StlyedDiv>
    </StlyedContainer>
  );
};

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

//Firebase imports
import { db } from "../../firebase.config";
import { collection, addDoc } from "firebase/firestore";

//Toast notifications
import toast from "react-hot-toast";

//useNavigate hook for navigating to different pages
import { useNavigate } from "react-router-dom";

export const SignUpScreen = () => {
  //For navigating to marketplace once logged in
  let navigate = useNavigate();

  //Function to stimulate a delay
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
  };

  const handleTermsChange = (e) => {
    setTermsCheck(e.target.checked);
  };

  const saveNewUserFirestore = async (e) => {
    try {
      const newDocRef = await addDoc(collection(db, "users"), {
        fullName: signUpLog.fullName,
        DOB: signUpLog.DOB,
        email: signUpLog.email,
        userName: signUpLog.userName,
        password: signUpLog.password,
        wallet: signUpLog.wallet,
        money: 1000,
        nfts: [],
      });
      console.log("Document written with ID: ", newDocRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const validateData = () =>
    !signUpLog.fullName.length ||
    !signUpLog.email.length ||
    !signUpLog.DOB ||
    !signUpLog.userName.length ||
    !signUpLog.password.length ||
    !signUpLog.wallet.length;

  const validateTermsCheck = () => {
    if (!termsCheck) {
      setShowTermsHelperText(true);
    } else if (termsCheck) {
      setShowTermsHelperText(false);
    }
  };

  const handleSignUp = async () => {
    validateTermsCheck();
    const isDataNotValid = validateData();
    if (isDataNotValid || !termsCheck) {
      toast.error("Please fill out all fields correctly.");
      return;
    }
    saveNewUserFirestore();
    toast.success("You have successfully signed up.");
    await delay(2500);
    navigate("/login");
  };

  //User age
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
              <SignUpButton onClick={handleSignUp}>Sign up</SignUpButton>
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

import React, { useState } from "react";
import { CustomTextField } from "../../components/CustomTextField/CustomTextField";
import {
  LoginButton,
  CryptoIcon,
  LoginText,
  StlyedContainer,
  StlyedDiv,
  LoginDiv,
  InputsDiv,
  DividerDiv,
  CryptoIconsDiv,
} from "./LoginScreen.styles";
import Divider from "@mui/material/Divider";
//Firebase imports
import { db } from "../../firebase.config";
import { collection, query, where, getDocs } from "firebase/firestore";
//Toast notifications
import toast from "react-hot-toast";
//useNavigate hook for navigating to different pages
import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
  //For navigating to marketplace once logged in
  let navigate = useNavigate();

  //Function to stimulate a delay

  const [loginLog, setLoginLog] = useState({
    email: "",
    password: "",
  });

  const [currentUser, setCurrentUser] = useState(false); // use context provider in app

  const handleInput = (attribute, e) => {
    setLoginLog({ ...loginLog, [attribute]: e.target.value });
  };

  const handleLogin = async () => {
    const loginQuery = query(
      collection(db, "users"),
      where("email", "==", loginLog.email),
      where("password", "==", loginLog.password)
    );

    const querySnapshot = await getDocs(loginQuery);
    if (querySnapshot.empty) {
      toast.error("Your email or password is wrong, please try again.");
      return;
    }

    const user = querySnapshot.docs[0].data();

    if (!user) {
      toast.error("Your email or password is wrong, please try again.");
      return;
    }
    setCurrentUser(user);
    navigate("/marketplace");
  };

  return (
    <StlyedContainer>
      <StlyedDiv>
        <img
          alt="Logo"
          src={require("../../images/logo4.png")}
          style={{ width: 150, height: 80 }}
        />
        <LoginDiv>
          <h4>Login</h4>
          <InputsDiv>
            <CustomTextField
              value={loginLog.email}
              label={"Email"}
              onChange={(e) => handleInput("email", e)}
            />
            <CustomTextField
              value={loginLog.password}
              label={"Password"}
              onChange={(e) => handleInput("password", e)}
              type="password"
            />
            <div className="sign-up-button-box">
              <LoginButton onClick={handleLogin}>Login</LoginButton>
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
              Dont have an account?{"  "}
              <LoginText href="sign-up">Sign up</LoginText>
            </span>
          </InputsDiv>
        </LoginDiv>
      </StlyedDiv>
    </StlyedContainer>
  );
};
import React, { useState, useEffect } from "react";
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
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

import { db } from "../../firebase.config";
import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  doc,
} from "firebase/firestore";

export const LoginScreen = () => {
  const [currentUser, setCurrentUser] = useState(false); // !!!!! use context provider in app

  const [loginLog, setLoginLog] = useState({
    email: "",
    password: "",
  });

  const [data, setData] = useState([]);
  console.log("🔹 ~ file: LoginScreen.js:32 ~ LoginScreen ~ data", data);
  // ----------------- TEST WHEN READY -----------------

  const getNFTData = async (e) => {
    try {
      const allDocuments = await getDocs(collection(db, "nfts"));
      const usersData = allDocuments.docs.map((doc) => doc.data());
      setData(usersData);
      console.log("Adding new nft");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getNFTData();
  }, []);

  // --------------------------------------------
  const addNewNFT = async () => {
    const userRef = doc(db, "users", "NaIypLebb1d8QNE3EZP6");
    try {
      const newDocRef = await addDoc(collection(db, "nfts"), {
        artist: "London2",
        currentOwner: userRef,
        title: "SaxonZ",
        price: 300,
        url: "https://i.postimg.cc/G2cpVCHc/Character-9.jpg",
      });
      console.log("Document written with ID: ", newDocRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleNewNFT = async () => {
    addNewNFT();
  };
  // --------------------------------------------
  let navigate = useNavigate();

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
          <button onClick={handleNewNFT}>Click for new nft</button>
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

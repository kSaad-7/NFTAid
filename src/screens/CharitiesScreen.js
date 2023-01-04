import React, { useState } from "react";
import { NavBar } from "../components/NavBar/NavBar";

import { CustomTextField } from "../components/CustomTextField/CustomTextField";
import Checkbox from "@mui/material/Checkbox";

import toast from "react-hot-toast";

import { db } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";

export const CharitiesScreen = () => {
  const [charityLog, setCharityLog] = useState({});
  const [termsCheck, setTermsCheck] = useState(false);

  const handleTermsChange = (e) => {
    setTermsCheck(e.target.checked);
  };

  const handleInput = (attribute, e) => {
    setCharityLog({ ...charityLog, [attribute]: e.target.value });
  };

  const validateData = () => {
    if (
      !charityLog.name ||
      !charityLog.charityNumber ||
      !charityLog.postcode ||
      !charityLog.webisteUrl ||
      !charityLog.email ||
      !termsCheck
    ) {
      toast.error("Please fill in all the fields correctly.");
      return false;
    }
    return true;
  };

  const saveToFirebase = async () => {
    try {
      const newDocRef = await addDoc(collection(db, "charities"), {
        name: charityLog.name,
        charityNumber: charityLog.charityNumber,
        postcode: charityLog.postcode,
        websiteUrl: charityLog.webisteUrl,
        email: charityLog.email,
      });
      console.log("Document written with ID: ", newDocRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleCharitySubmit = () => {
    const isValid = validateData();
    if (isValid) {
      saveToFirebase();
      toast.success("Charity has been added to NFTAid.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <NavBar />
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 0.5,
            border: "2px solid black",
            margin: "30px 0px",
            padding: 30,
          }}
        >
          <h4>Join NFTAid</h4>
          <CustomTextField
            value={charityLog.name}
            label={"Charity name"}
            onChange={(e) => handleInput("name", e)}
          />
          <CustomTextField
            value={charityLog.number}
            label={"Charity number"}
            onChange={(e) => handleInput("charityNumber", e)}
          />
          <CustomTextField
            value={charityLog.postcode}
            label={"Postcode"}
            onChange={(e) => handleInput("postcode", e)}
          />
          <CustomTextField
            value={charityLog.websiteUrl}
            label={"Website url"}
            onChange={(e) => handleInput("webisteUrl", e)}
          />
          <CustomTextField
            value={charityLog.email}
            label={"Email"}
            onChange={(e) => handleInput("email", e)}
          />
          <CustomTextField
            value={charityLog.lastYearRev}
            label={"Revenue 2021-2022 ($)"}
            onChange={(e) => handleInput("lastYearRev", e)}
          />
          <div style={{ display: "flex", width: "180%" }}>
            <Checkbox
              checked={termsCheck}
              onChange={(e) => handleTermsChange(e)}
            />
            <h5>
              I agree to the{" "}
              <span
                id="terms_and_condtions"
                onClick={() => window.open("/terms-condtions")}
              >
                terms and condtions
              </span>
            </h5>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                border: "1px solid black",
                borderRadius: 7,
                fontSize: 14,
                fontWeight: "bold",
                height: 30,
                backgroundColor: "#6e0ead",
                color: "white",
                cursor: "pointer",
                width: "50%",
              }}
              onClick={handleCharitySubmit}
            >
              Submit charity
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

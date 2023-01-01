import React from "react";
import { NavBar } from "../../components/NavBar/NavBar";
import {
  Container,
  ClickToLogin,
  LastSection,
  LoginSpan,
} from "./HomeScreen.styles";

export const HomeScreen = () => {
  return (
    <Container>
      <NavBar />
      <div
        className="summary-div"
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1,
          marginBottom: -50,
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ margin: 100 }}>
            <span style={{ fontSize: 50, fontWeight: "bold" }}>
              Giving is not just about donating, it is about making a
              difference.
            </span>
            <br />
            <br />
            <br />
            <span style={{ fontSize: 15 }}>
              Here at <span className="highlighted-summary">NFTAid</span> we
              intergate both{" "}
              <span className="highlighted-summary">charities and NFT's </span>{" "}
              into one platform, like you've never seen before. We made this
              platform to give out to thepeople in need, the people that need
              help , and the people that are calling for assist, no matter the
              country or continent.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "row",
              borderRadius: 5,
              margin: 100,
              backgroundColor: "#8A2BE2",
              color: "white",
            }}
          >
            <h5>Youtube</h5>
            <h5>Twitter</h5>
            <h5>Instagram</h5>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            height: 600,
            marginTop: 9,
            backgroundColor: "#FFD929",
          }}
        >
          <img
            alt="charity"
            src={require("../../images/charity2.jpeg")}
            style={{
              position: "relative",
              top: 100,
              width: 600,
              height: 500,
            }}
          />
        </div>
      </div>
      <LastSection>
        <LoginSpan>
          <ClickToLogin href="sign-up">
            Click me to sign up to NFTAid!
          </ClickToLogin>
        </LoginSpan>
      </LastSection>
    </Container>
  );
};

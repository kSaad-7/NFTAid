import React, { useContext } from "react";
import { UserContext } from "../Context";
import { UserNFTs } from "../components/UserNFTs/UserNFTs";

import { NavBar } from "../components/NavBar/NavBar";

import Skeleton from "@mui/material/Skeleton";

export const ProfileScreen = () => {
  const { currentUser, userNFTS } = useContext(UserContext);
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
      }}
    >
      <NavBar />
      <div className="top-section">
        <div
          style={{
            marginTop: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h3>Welcome back, {currentUser.userName}</h3>
        </div>
        <div
          style={{
            display: "flex",
            flex: 1,
            flexDirection: "row",
            overflowX: "scroll",
            width: "100%",
            whiteSpace: "nowrap",
            marginBottom: 20,
            backgroundColor: "#333",
          }}
        >
          <UserNFTs usersNFTs={userNFTS} />
        </div>
      </div>
      <div
        className="bottom-section"
        style={{
          display: "flex",
          flexDirection: "row",
          height: 257,
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "2px solid black",
            borderRadius: 10,
            marginLeft: 5,
            width: "30%",
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <h4>Acheivements</h4>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "5px 0px",
            }}
          >
            <Skeleton
              variant="circular"
              width={50}
              height={50}
              animation="wave"
            />
            <Skeleton
              variant="text"
              width={360}
              sx={{ fontSize: "1rem" }}
              animation="wave"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "5px 0px",
            }}
          >
            <Skeleton
              variant="circular"
              width={50}
              height={50}
              animation="wave"
            />
            <Skeleton
              variant="text"
              width={360}
              sx={{ fontSize: "1rem" }}
              animation="wave"
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "5px 0px",
            }}
          >
            <Skeleton
              variant="circular"
              width={50}
              height={50}
              animation="wave"
            />
            <Skeleton
              variant="text"
              width={360}
              sx={{ fontSize: "1rem" }}
              animation="wave"
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
            alignSelf: "center",
          }}
        >
          <h5>
            Total:{" "}
            <span style={{ color: "green", fontSize: 18 }}>
              ${currentUser.money}
            </span>
          </h5>
          <h5>Most expensive NFT owned: </h5>
          <h5>Biggest sale made: </h5>
        </div>
      </div>
    </div>
  );
};

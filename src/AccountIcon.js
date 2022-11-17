import React from "react";

export const AccountIcon = () => {
  return (
    <div
      style={{
        // backgroundColor: "red",
        display: "flex",
        flex: 0.1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 10,
      }}
    >
      <div
        style={
          {
            //   backgroundColor: "blue",
          }
        }
      >
        <img
          src={
            "https://i.pinimg.com/originals/7c/02/d8/7c02d8361f7acd759f197fcb243b0800.jpg"
          }
          alt="x"
          style={{
            margin: 5,
            maxHeight: 60,
            maxWidth: 60,
            borderRadius: 7,
          }}
        />
      </div>
      <h6
        style={{
          backgroundColor: "#cccccc",
          border: "1px solid black",
          borderRadius: 20,
          padding: 5,
          margin: -5,
        }}
      >
        0x456...345
      </h6>
    </div>
  );
};

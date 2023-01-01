import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  EmergencyAidScreen,
  ArtistsScreen,
  CharitiesScreen,
  ProfileScreen,
  MarketplaceScreen,
  PageNotFound,
  SignUpScreen,
  HomeScreen,
  LoginScreen,
  CheckoutScreen,
  SellNftScreen,
} from "./screens/index";
import { Toaster } from "react-hot-toast";
import { NFTContext, UserContext } from "./Context.js";

export default function App() {
  const [currentNFT, setCurrentNFT] = useState(null);
  const [currentNFTRef, setCurrentNFTRef] = useState(null);
  const [currentOwnerUserName, setCurrentOwnerUserName] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [currentUserRef, setCurrentUserRef] = useState(null);

  return (
    <div className="App">
      <NFTContext.Provider
        value={{
          currentNFT,
          setCurrentNFT,
          currentNFTRef,
          setCurrentNFTRef,
          currentOwnerUserName,
          setCurrentOwnerUserName,
        }}
      >
        <UserContext.Provider
          value={{
            currentUser,
            setCurrentUser,
            currentUserRef,
            setCurrentUserRef,
          }}
        >
          <Router>
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="marketplace" element={<MarketplaceScreen />} />
              <Route path="marketplace/checkout" element={<CheckoutScreen />} />
              <Route path="marketplace/sell-nft" element={<SellNftScreen />} />
              <Route path="profile" element={<ProfileScreen />} />
              <Route path="charities" element={<CharitiesScreen />} />
              <Route path="artists" element={<ArtistsScreen />} />
              <Route path="emergency-aid" element={<EmergencyAidScreen />} />
              <Route path="sign-up" element={<SignUpScreen />} />
              <Route path="login" element={<LoginScreen />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        </UserContext.Provider>
      </NFTContext.Provider>
      <Toaster
        toastOptions={{
          duration: 3000,
          style: {
            boxShadow: "2px 2px",
            fontWeight: "bold",
            fontSize: 14,
          },
        }}
      />
    </div>
  );
}

import React from "react";
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
} from "./screens/index";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="marketplace" element={<MarketplaceScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
          <Route path="charities" element={<CharitiesScreen />} />
          <Route path="artists" element={<ArtistsScreen />} />
          <Route path="emergency-aid" element={<EmergencyAidScreen />} />
          <Route path="sign-up" element={<SignUpScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          duration: 2500,
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

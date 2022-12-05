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
} from "./screens/index";

// TO-DO
// Make modal for account icon + how to organise styled buttons + clean up app files + navigation.

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MarketplaceScreen />} />
          <Route path="profile" element={<ProfileScreen />} />
          <Route path="charities" element={<CharitiesScreen />} />
          <Route path="artists" element={<ArtistsScreen />} />
          <Route path="emergency-aid" element={<EmergencyAidScreen />} />
          <Route path="sign-up" element={<SignUpScreen />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

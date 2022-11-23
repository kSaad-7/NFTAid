import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  EmergencyAidScreen,
  ArtistsScreen,
  CharitiesScreen,
  ProfileScreen,
  MarketplaceScreen,
  PageNotFound
} from "./screens/index";

// TO-DO
// Make modal for account icon + how to organise styled buttons + clean up app files + navigation.

export default function App() {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<MarketplaceScreen />} /> 
            <Route path="Profile" element={<ProfileScreen />} />
            <Route path="Charities" element={<CharitiesScreen />} />
            <Route path="Artists" element={<ArtistsScreen />} />
            <Route path="EmergencyAid" element={<EmergencyAidScreen />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

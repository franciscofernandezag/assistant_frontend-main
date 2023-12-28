import { Navigate, Route, Routes } from "react-router-dom";

import { Navbar } from "../../ui"

import { Home,Conversation,Settings,Profile } from "../pages";

export const AssistantRoutes = () => {
  return (
    <>
     <Navbar/>
     <Routes>
        <Route path="home" element={<Home />} />
        <Route path="settings" element={<Settings />} />
        <Route path="conversation" element={<Conversation />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </>
  )
}

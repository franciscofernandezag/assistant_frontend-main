import { Route, Routes } from "react-router-dom";

import { Login } from "../auth";
import { AssistantRoutes} from "../assistant";
import { Register } from "../register";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/*" element={<AssistantRoutes />}/>
      </Routes>
    </>
  );
};

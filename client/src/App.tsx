import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./pages/NotFound/NotFound";
import DefaultLayout from "./layouts/DefaultLayout/Default";
import Auth from "./pages/Auth/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

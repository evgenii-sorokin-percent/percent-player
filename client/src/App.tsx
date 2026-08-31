import { BrowserRouter, Route, Routes } from "react-router";
import NotFound from "./pages/NotFound/NotFound";
import DefaultLayout from "./layouts/DefaultLayout/Default";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

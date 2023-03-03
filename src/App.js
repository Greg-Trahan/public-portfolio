import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages";
import { Header, Wrapper } from "./components";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Header>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
        </Header>
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;

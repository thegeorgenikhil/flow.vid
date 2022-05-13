import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, PrivateRoute, Sidebar, Toast } from "./components";
import { AuthProvider } from "./context";
import { DataProvider } from "./context/data-context";
import { Home, Signup, Signin, WatchLater } from "./pages";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <DataProvider>
            <Toast />
            <Navbar />
            <div className="main-container">
              <Sidebar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route
                  path="/watch"
                  element={
                    <PrivateRoute>
                      <WatchLater />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </div>
          </DataProvider>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

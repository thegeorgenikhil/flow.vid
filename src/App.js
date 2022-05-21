import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, PrivateRoute, Sidebar, Toast } from "./components";
import { AuthProvider } from "./context";
import { DataProvider } from "./context/data-context";
import {
  Home,
  Signup,
  Signin,
  WatchLater,
  PlaylistList,
  PlaylistPage,
  VideoPage,
  History,
  Like,
} from "./pages";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <DataProvider>
            <Toast />
            <Navbar setIsSidebarOpen={setIsSidebarOpen} />
            <div className="main-container">
              <Sidebar isSidebarOpen={isSidebarOpen} />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/video/:videoId" element={<VideoPage />} />
                <Route
                  path="/history"
                  element={
                    <PrivateRoute>
                      <History />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/likes"
                  element={
                    <PrivateRoute>
                      <Like />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/watch"
                  element={
                    <PrivateRoute>
                      <WatchLater />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/playlists"
                  element={
                    <PrivateRoute>
                      <PlaylistList />
                    </PrivateRoute>
                  }
                />
                <Route
                  path="/playlists/:playlistId"
                  element={
                    <PrivateRoute>
                      <PlaylistPage />
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

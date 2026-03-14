import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectScreen from "./pages/ProjectScreen";
import ContactScreen from "./pages/ContactScreen";
import { useEffect } from "react";
import NotFoundPage from "./pages/NotFoundPage";
import ArtifactOneScreen from "./pages/ArtifactOneScreen";

function App() {
    useEffect(() => {
        const handleMouseMove = (e) => {
            document.documentElement.style.setProperty("--x", e.clientX + "px");
            document.documentElement.style.setProperty("--y", e.clientY + "px");
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    });

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomeScreen />} />
                <Route path="/AIML-500" element={<HomeScreen />} />
                <Route path="/artifacts" element={<ProjectScreen />} />
                <Route path="/contact" element={<ContactScreen />} />
                <Route path="/artifactOne" element={<ArtifactOneScreen />} />
                <Route path="/*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./globals.css";
import { LanguageProvider } from "./contexts/LanguageContext.tsx";

createRoot(document.getElementById("root")!).render(
  <LanguageProvider>
    <App />
  </LanguageProvider>
);

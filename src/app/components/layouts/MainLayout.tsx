import { Outlet } from "react-router";
import { Nav } from "../Nav";
import { CustomCursor } from "../CustomCursor";
import "../../../styles/fonts.css";

export function MainLayout() {
  return (
    <div
      className="min-h-screen relative"
      style={{
        fontFamily: "'Space Grotesk', sans-serif",
        cursor: "none",
        background: "#FFFFFF",
      }}
    >
      <CustomCursor />
      <Nav />
      
      <main className="relative" style={{ zIndex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
}
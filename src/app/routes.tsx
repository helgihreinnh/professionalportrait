import { createBrowserRouter } from "react-router";
import { MainLayout } from "./components/layouts/MainLayout";
import { HomePage } from "./components/pages/HomePage";
import { ProjectDetail } from "./components/pages/ProjectDetail";
import { DesignSystem } from "./components/pages/DesignSystem";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "projects/:projectId", Component: ProjectDetail },
      { path: "design-system", Component: DesignSystem },
    ],
  },
]);
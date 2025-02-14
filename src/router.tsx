import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "./layouts/MainLayout"
import HomeView from "./views/HomeView"
import NotFoundView from "./views/NotFoundView"
import ProjectsView from "./views/ProjectsView"
import ExercisesView from "./views/ExercisesView"
import AboutView from "./views/AboutView"
import HobbiesView from "./views/HobbiesView"

function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeView />} />
          <Route path="/projects" element={<ProjectsView />} />
          <Route path="/exercises" element={<ExercisesView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="/hobbies" element={<HobbiesView />} />
          <Route path="*" element={<NotFoundView />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router

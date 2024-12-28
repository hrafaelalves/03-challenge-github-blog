import { Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home"
import { Post } from "./pages/Post"
import { DefaultLayout } from "./layouts/DefaultLayout"

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post/:slug" element={<Post />} />
      </Route>
    </Routes>
  )
}

import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/defaultLayout'
import { Home } from './pages/Home'
import { Absence } from './pages/Absence'
import { Homework } from './pages/Homework'
import { Edit } from './pages/EditGrades'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/absence" element={<Absence />} />
        <Route path="/homework" element={<Homework />} />
        <Route path="/edit" element={<Edit />} />
      </Route>
    </Routes>
  )
}

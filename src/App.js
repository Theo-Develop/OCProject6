import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Home</div>
  },
  {
    path: '/about',
    element: <div>About</div>
  },
  {
    path: '/logement',
    element: <div>FicheLogement</div>
  },
  {
    path: '/*',
    element: <div>Error</div>
  }
])

function App() {
  return <RouterProvider router={router} />

}

export default App;

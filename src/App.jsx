import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import HomeLayout from "./components/HomeLayout";
import RootLayout from "./components/RootLayout";
import SearchLayout from "./components/SearchLayout";
import WatchLayout from "./components/WatchLayout";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";
import ShortVideos from "./pages/ShortVideos";
import Watch from "./pages/Watch";
import NotFountPage from "./pages/NotFountPage";



const router=createBrowserRouter([
  {
    element:<RootLayout />,
    children:[
          {
    element:<HomeLayout />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      

    ]
  },
  {
    element:<WatchLayout />,
    children:[
      {
        path:"/watch",
        element:<Watch />,
      },

    ]
  },
  {path:"/shorts", element:<ShortVideos />},
  {element:<SearchLayout />,
    children:[
      {path:"/results", element:<SearchResults />},]
  },
  
  {path:"*", element:<NotFountPage />}
    ]
  },

])



const queryClient= new QueryClient();


export default function App() {
 

  return (
    <>

    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
     
      <RouterProvider router={router} />
    </QueryClientProvider>
    </>
  )
}

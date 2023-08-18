import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import Users from "./pages/Users";

// export const routes = () => {
//     const r = [
//       {
//         path: "/",
//         element: Main,
//       },
//       {
//         path: "sales",
//         element: "<h1>Sales</h1>",
//       },
//       {
//         path: "users",
//         element: "<h1>Users</h1>",
//       },
//     ];
//     return <>

//     </>;
// }

export const routes = [
  {
    path: "/",
    element: <Home />,
    layout: <MainLayout />,
  },
  {
    path: "sales",
    element: <Sales />,
  },
  {
    path: "users",
    element: <Users />,
  },
];

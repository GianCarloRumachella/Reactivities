import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import AcctivityForm from "../../features/activities/dashboard/form/AcctivityForm";
import ActivityDetails from "../../features/activities/dashboard/details/ActivityDetails";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            { path: 'activities', element: <ActivityDashboard /> },
            { path: 'activities/:id', element: <ActivityDetails /> },
            { path: 'createActivity', element: <AcctivityForm key='create' /> },
            { path: 'manage/:id', element: <AcctivityForm key='manage' /> },
        ]
    },
]


export const router = createBrowserRouter(routes)


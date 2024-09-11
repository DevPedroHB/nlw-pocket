import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { queryClient } from "./libs/react-query";
import { Home } from "./pages/home";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
]);

export function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
			<Toaster richColors closeButton pauseWhenPageIsHidden theme="dark" />
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

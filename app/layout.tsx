import LayoutProvider from "./components/layoutProvider";
import Navbar from "./components/navbar";
import { Providers } from "./provider";
import "./global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Providers>
					<LayoutProvider>{children}</LayoutProvider>
				</Providers>
			</body>
		</html>
	);
}

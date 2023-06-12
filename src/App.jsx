import { Shop } from "./components/Shop";
import { ShopContextProvider } from "./context/ShopContext";
import { Header } from "./components/Header";
import "./App.css";

function App() {
	return (
		<div className="App">
			<ShopContextProvider>
				<Header />
				<Shop />
			</ShopContextProvider>
		</div>
	);
}

export default App;

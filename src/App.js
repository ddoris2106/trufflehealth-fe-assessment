import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ReviewForm from "./ReviewForm";
import UploadForm from "./UploadForm";

function App() {
	return (
		<Router>
			<div className="App">
				<Routes>
					<Route
						path="/"
						exact
						element={<Home />}
					/>
					<Route
						path="/uploadBill"
						exact
						element={<UploadForm />}
					/>
					<Route
						path="/reviewUploadedBill"
						exact
						element={<ReviewForm />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;

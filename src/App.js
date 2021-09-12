import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import Bg1 from "./assets/bg1.jpg";
import Bg3 from "./assets/bg3.jpg";

function App() {
	return (
		<>
			<Header />
			<Layout urlBg={Bg1} />
			<Layout colorBg={"red"} />
			<Layout urlBg={Bg3} />
			<Footer />
		</>
	);
}

export default App;

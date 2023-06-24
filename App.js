import Navbar from "./Components/Navbar";

import About from "./Section/About";
import Contact from "./Section/Contact";
import Experience from "./Section/Experience";
import Home from "./Section/Home";
import Work from "./Section/Work";


import ContactBar from "./Components/ContactBar";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
	return (
		<main className="main">
			<Navbar />
			<div className="app_section_container">
				<Home />
				<About />
				<Experience />
				<Work />
				<Contact />
			</div>
			<ContactBar />
			<Footer />
		</main>
	);
}

export default App;
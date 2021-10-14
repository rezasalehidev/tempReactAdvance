import Search from "./Components/Navbar/Search/index";
import Nav from "./Components/Navbar/Nav/Nav";
import Logo from "./Components/Navbar/Logo/Logo";
import Hamberger from "./Components/Navbar/Hamberger/Hamberger";

function App() {
    return (
        <div className="Container">
            <div className="Navbar">
                <Search />
                <Hamberger />
                <Nav />
                <div className="logo-image">
                    <Logo />
                </div>
            </div>
        </div>
    );
}

export default App;

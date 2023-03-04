import useLocoScroll from "./hooks/useLocoScroll";
import Home from "./pages/home";

function App() {
    useLocoScroll()

    return (
        <div id="app" data-scroll-container>
            <Home />
        </div>
    );
}

export default App;

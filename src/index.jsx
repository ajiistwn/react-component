import React from "react";
import ReactDOM from "react-dom/client";

function Food() {
    return (
        <div>
            <img src="food/soto-betawi.jpg" alt="sptp betawi" width={100} height={70} />
            <h2>Soto Betawi</h2>
            <p>Soto Betawi dari Jakarta</p>
        </div>
    );
}

function Heeader() {
    return (
        <header>
            <h1>Warung mang Jaja</h1>
        </header>
    );
}

function Menu() {
    return (
        <div>
            <h2>Menu Kita</h2>
            <Food />
            <Food />
            <Food />
        </div>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const jaamBuka = 10;
    const jamTutup = 22;

    if (hour < jaamBuka || hour >= jamTutup) {
        alert("Warung tutup");
    } else {
        alert("Warung buka");
    }

    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} Warung mang Jaja | jam buka {jaamBuka}</p>
        </footer>
    );
}

function App() {
    return (
        < div >
            <Heeader />
            <Food />
            <Food />
            <Food />
            <Footer />
        </div >
    );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
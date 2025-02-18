import React from "react";
import ReactDOM from "react-dom/client";
import datas from "./data";

import "./index.css";

function Food(props) {
    console.log(props.stok);
    return (
        <li className="food">
            <img src={props.foto} alt={props.nama} width={100} height={70} />
            <div>
                <h3>{props.nama}</h3>
                <p>{props.deskripsi}</p>
                <span>{props.harga}</span>
                <span>Stok: {props.stok} {props.stok ? "Tersedia" : "Habis"}</span>
            </div>
        </li>
    );
}

function Heeader() {
    const style = {
        color: "red", fontSize: "50px", textTransform: "uppercase"
    }

    return (
        <header>
            <h1 style={style}>Warung mang Jaja</h1>
        </header>
    );
}

function Menu() {
    const foods = datas
    const numFoods = foods.length;
    return (
        <main className="menu">
            <Heeader />
            {numFoods && (
                <ul>
                    {foods.map((data, index) => (
                        <Food key={index}
                            nama={data.nama}
                            deskripsi={data.deskripsi}
                            harga={data.harga}
                            foto={data.foto}
                            stok={data.stok}
                        />
                    ))}
                </ul>
            )}
            <Footer />

        </main>
    );
}

function Footer() {
    const hour = new Date().getHours();
    const jaamBuka = 8;
    const jamTutup = 22;

    const isOpen = hour >= jaamBuka && hour < jamTutup;

    return (

        <footer className="footer">
            {isOpen && (
                <div className="order">
                    <p>
                        &copy; {new Date().getFullYear()} Warung mang Jaja | jam buka {jaamBuka} - {jamTutup}

                    </p>
                    <button className="btn">order</button>
                </div>
            )}
        </footer>
    );
}

function App() {
    return (
        < div className="container" >
            <Menu />
        </div >
    );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
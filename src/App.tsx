import React from 'react';
import './App.css';
import Header from "./components/Header/Header";

function App() {
    return (
        <div className="container">
            <div className="app-wrapper">
                <Header/>
                    <div className="nav">
                        <ul className="nav__list">
                            <li className="nav__list-item">
                                <a href='#'>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Profile
                                </a>
                            </li>
                            <li className="nav__list-item">
                                <a href='#' >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    News
                                </a>
                            </li>
                            <li className="nav__list-item">
                                <a href='#' >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Message
                                </a>
                            </li>
                            <li className="nav__list-item">
                                <a href='#' >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Comrades
                                </a>
                            </li>
                            <li className="nav__list-item">
                                <a href='#' >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Music
                                </a>
                            </li>
                            <li className="nav__list-item">
                                <a href='#' >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Setting
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="app-wrapperContent">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aut
                        doloribus fuga id iure libero quasi quidem velit voluptatem. Aut illo natus nemo, nobis odit omnis
                        perferendis quam sed voluptas.lorem*10 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                        exercitationem facilis maiores odit, quia sed sequi sit tempore unde voluptas. Consectetur inventore
                        libero magnam magni minima placeat porro quo voluptatum?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam amet at beatae id incidunt ipsam
                        maxime minima modi natus nostrum praesentium quas rem rerum saepe sint sit, ullam, voluptatibus
                        voluptatum.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam blanditiis dolores eveniet in iure
                        laudantium quo quod quos repellat, repudiandae! Ad adipisci dignissimos ea enim, minima odio
                        perferendis suscipit tempore?
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At distinctio fuga modi. Atque blanditiis
                        culpa dolor eligendi, eveniet fugit maxime reprehenderit sint. Aliquam aut blanditiis consequuntur
                        est ipsa nihil provident.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad cum, cupiditate debitis, distinctio
                        dolor error ex fugiat modi molestiae necessitatibus praesentium quaerat quo. Consequatur deserunt
                        labore soluta ullam? Ea, excepturi?
                    </div>
            </div>
        </div>
    );
}

export default App;

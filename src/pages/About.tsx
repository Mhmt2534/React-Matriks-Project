import React, { useContext } from "react";
import "./About.css";
import { ColorContext } from "../context/ColorContext";

const About = () => {
  const style = {
    color: "black",
  };

  return (
    <div className="about-wrapper" style={style}>
      <div className="about-section">
        <div className="about-container">
          <h2>Türkçe</h2>
          <section>
            <h4>Projenin Hakkında</h4>
            <p>
              Bu proje, kullanıcıya en yüksek hacimli 10 kripto parayı ve her
              birinin detaylarını göstermektedir. Ayrıca favori kripto
              paralarınızı favorilere ekleyebilme imkanı tanır. Basit bir giriş
              sayfası da vardır.
            </p>
          </section>
          <section>
            <h4>Kullanılan Teknolojiler</h4>
            <p>
              Proje geliştirme sürecinde aşağıdaki teknolojiler kullanılmıştır:
            </p>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Bootstrap</li>
              <li>Recharts</li>
              <li>Axios</li>
            </ul>
          </section>
          <section>
            <h4>Kullanılan API'ler</h4>
            <p>Projede aşağıdaki API'ler kullanılmıştır:</p>
            <ul>
              <li>Binance API</li>
            </ul>
          </section>
        </div>
      </div>
      <div className="about-section">
        <div className="about-container">
          <h2>English</h2>
          <section>
            <h4>About the Project</h4>
            <p>
              This project displays the top 10 cryptocurrencies by volume,
              showing the details of each one. It also allows you to add your
              favorite cryptocurrencies to the favorites list. There is also a
              simple login page.
            </p>
          </section>
          <section>
            <h4>Technologies Used</h4>
            <p>
              The following technologies were used during the development
              process:
            </p>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>Bootstrap</li>
              <li>Recharts</li>
              <li>Axios</li>
            </ul>
          </section>
          <section>
            <h4>APIs Used</h4>
            <p>The following APIs were used in the project:</p>
            <ul>
              <li>Binance API</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;

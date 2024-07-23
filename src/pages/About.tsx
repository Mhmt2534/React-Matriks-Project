import React from "react";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="about-container">
        <h1>Türkçe</h1>
        <section>
          <h2>Projenin Hakkında</h2>
          <p>
            Bu proje, Kullanıcıya en yüksek hacimli 10 kripto parayı, her
            birinin dtaylarını göstermektedir. Ayrıca Favori kripto paralarınızı
            Favorilere ekleyebilme imkanı tanır. Basit bir Login Page sayfasıda
            vardır.
          </p>
        </section>
        <section>
          <h2>Kullanılan Teknolojiler</h2>
          <p>
            Proje geliştirme sürecinde aşağıdaki teknolojiler kullanılmıştır:
          </p>
          <ul>
            <li>React</li>
            <li>Typescript</li>
            <li>Bootstrap</li>
            <li>Recharts</li>
            <li>Axios</li>
          </ul>
        </section>
        <section>
          <h2>Kullanılan API'ler</h2>
          <p>Projede aşağıdaki API'ler kullanılmıştır:</p>
          <ul>
            <li>Binance API</li>
          </ul>
        </section>
      </div>
      <div className="about-container">
        <h1>English</h1>
        <section>
          <h2>About the Project</h2>
          <p>
            This project displays the top 10 cryptocurrencies by volume, showing
            the details of each one. It also allows you to add your favorite
            cryptocurrencies to the Favorites list. There is also a simple Login
            Page.
          </p>
        </section>
        <section>
          <h2>Technologies Used</h2>
          <p>
            The following technologies were used during the development process:
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
          <h2>APIs Used</h2>
          <p>The following APIs were used in the project:</p>
          <ul>
            <li>Binance API</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;

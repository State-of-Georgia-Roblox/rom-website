import React, { Component } from "react";
import Head from "next/head";

const users = [
  {
    name: "D_iffusion",
    role: "Founder",
    id: 554652068
  },
  {
    name: "waco_roblox",
    role: "Co-Founder",
    id: 480007068
  },
  {
    name: "Romloxe",
    role: "Co-Founder",
    id: 81326846
  }
];

const Index = ({}) => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <div
      style={{
        backgroundImage: 'url("/img/showcase.jpg")',
        height: "400px"
      }}
      id="showcase"
    >
      <div className="container text-yellow text-center">
        <h1>State of Georgia-ROBLOX</h1>
        <p>We are a ROBLOX group that is making a Role Play community.</p>
      </div>
    </div>

    <section id="boxes">
      <div className="container">
        <div className="row">
          {users.map(user => (
            <div key={user.name} className="col-sm text-center">
              <img
                src={`https://www.roblox.com/headshot-thumbnail/image?userId=${user.id}&width=420&height=420&format=png`}
                alt={user.name + " 's avatar"}
                height="200"
              />
              <h3>{user.role}</h3>
              <p>{user.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

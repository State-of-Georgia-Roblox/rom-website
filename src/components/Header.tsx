import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { Component } from "react";
import dynamic from "next/dynamic";
import { NextPage } from "next";

interface ILink {
  text: string;
  location: string;
  exact?: boolean;
}

const links: ILink[] = [
  {
    text: "Home",
    location: "/",
    exact: true
  },
  {
    text: "Development",
    location: "/development"
  },
  {
    text: "Admin",
    location: "/admin"
  },
  {
    text: "About",
    location: "/about"
  },
  {
    text: "Events",
    location: "/events"
  }
];

const Header = ({ path }: { path: string }) => (
  <header className="bg-orange text-yellow">
    <div className="container">
      <h1 className="text-center">State of Georgia - Roblox</h1>
      <nav>
        <div className="row justify-content-center">
          {links.map(link => (
            <div className="col-sm-auto text-center" key={link.text}>
              <Link href={link.location}>
                <a
                  className={
                    (link.exact
                    ? link.location == path
                    : path.startsWith(link.location))
                      ? "active"
                      : "text-yellow"
                  }
                >
                  {link.text}
                </a>
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </div>
  </header>
);

export default Header;

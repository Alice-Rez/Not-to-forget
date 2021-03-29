import React from "react";
import { Link } from "react-router-dom";

export default function Message(props) {
  return (
    <article className="message">
      {props.type === "finished" ? (
        <p>There are no finished to-do's. Check your open ones.</p>
      ) : (
        <div>
          <p>
            There are no opened to-do's. Add some new:{" "}
            <Link to="/add" className="link icon-add">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                id="SVGRoot"
                viewBox="0 0 16 16"
                role="presentation"
                focusable="false"
              >
                <g id="circle">
                  <circle
                    id="path1453"
                    cx="7.9812"
                    cy="8.0188"
                    r="7.9812"
                    fill="#407076"
                  />
                  <path
                    d="M9.3979 9.4605h2.522V6.6233h-2.522v-2.522H6.5606v2.522h-2.522v2.8372h2.522v2.522H9.398v-2.522z"
                    id="path1436-3"
                    fill="#fff"
                  />
                </g>
              </svg>
            </Link>
          </p>
        </div>
      )}
    </article>
  );
}

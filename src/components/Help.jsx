import React, { Component } from "react";

export default class Help extends Component {
  render() {
    return (
      <section>
        <section className="section-main">
          <h2>Clever management of your to-dos</h2>
          <p className="lead-p">
            Never more need to worry about forgetting important things - work
            deadlines, taxes deadlines or birthdays of your significant others{" "}
            <span role="img" aria-labelledby="grinning face">
              😁
            </span>
            .
          </p>
        </section>
        <section className="my-card-deck">
          <article className="card-white">
            <p>
              <strong>Add to-do items</strong>
            </p>
            <p></p>
          </article>
          <article className="card-white">
            <p>explore advantages of Not to Forget in demo version</p>
            <p>or</p>
            <p>start your own to-do management by signing-up.</p>
          </article>
          <article className="card-white">
            <p>
              <strong>List to-do items</strong>
            </p>
            <p>
              And sort them by importance level, deadline, alphabetically by
              title or reset to the default order of adding date
            </p>
          </article>
        </section>
      </section>
    );
  }
}

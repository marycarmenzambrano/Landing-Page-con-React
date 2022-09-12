import React from "react";

function Heading() {
  return (
    <div>
      <div className="card p-3 bg-light border-0">
        <div className="card-body">
          <h1 className="card-title">A Warm Welcome!</h1>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nunc a felis scelerisque convallis aliquam id magna. Donec luctus massa vitae sollicitudin semper. Donec nec luctus nunc, a posuere leo. Donec sit amet pellentesque dolor.
          </p>

          <a href="/" className="btn btn-primary">
            Call to action!
          </a>
        </div>
      </div>
    </div>
  );
}


export default Heading;
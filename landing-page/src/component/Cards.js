import React from "react";

const object = { width: "18rem" };

function Cards() {
  return (
    
        <div className="card" style={object}>
          <img src="https://edgewoodreit.com/wp-content/uploads/2018/01/500x325.png" className="card-img-top" alt="/" />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed nunc a felis scelerisque convallis aliquam id magna. Donec luctus massa vitae sollicitudin semper. Donec nec luctus nunc, a posuere leo. Donec sit amet pellentesque dolor.</p>
            <a href="/" className="btn btn-primary">Find Out More!</a>
          </div>
        </div>
  );
}

export default Cards;
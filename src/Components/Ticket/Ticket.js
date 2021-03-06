import React from "react";
import { Link } from "react-router-dom";
import classes from "./Ticket.module.css";

const ticket = (props) => {
  return (
    <Link to={`/tickets/${props.id}`}>
      <div className={classes.Ticket}>
        <div className={classes.TicketPicture}>
          <img src={props.picture} alt="PictureExample" />
        </div>
        price:
        {props.price} description: {props.description}
      </div>
    </Link>
  );
};

export default ticket;

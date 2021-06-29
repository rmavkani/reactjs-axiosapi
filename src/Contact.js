import React from "react";

function Contact(props) {
  const worklocation = [
    {
      hours: "Mon-Sat: 4.30pm - 7.30pm",
      location: " Consulation at Clinic  & Online"
    }
  ];
  const work = worklocation.map((wl) => {
    return (
      <div className="ui">
        {wl.hours} / {wl.location}{" "}
      </div>
    );
  });

  return (
    <div className="ui bottom segment vertical">
      Working hours:
      {work}
      For Appoinments: {props.phone}
    </div>
  );
}
export default Contact;

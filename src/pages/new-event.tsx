import React, { Fragment } from "react";
import Head from "next/head";
import AddNewEvent from "@/components/modules/events";

const NewEvents = () => {
  return (
    <Fragment>
      <Head>
        <title>Add New Event</title>
        <meta
          name="description"
          content="Add a lot of great events that allow you to evolve..."
        />
      </Head>
      <AddNewEvent />
    </Fragment>
  );
};

export default NewEvents;

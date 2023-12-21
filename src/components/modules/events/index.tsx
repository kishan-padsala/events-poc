import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useStoreEventForm } from "./hooks";
import { StoreEvents } from "./types";

const AddNewEvent = () => {
  const { handleStoreEvent } = useStoreEventForm();
  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<StoreEvents>();

  const onSubmit: SubmitHandler<StoreEvents> = (data) => {
    const id = Math.random().toString(36).substring(2, 7);
    const newEvent = { id, ...data };
    handleStoreEvent(newEvent);
  };

  return (
    <div className="login-box">
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="user-box">
          <input
            type="text"
            {...register("title", {
              required: "Please enter the event title.",
            })}
          />
          <label>Title</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            id="date"
            {...register("startDate", {
              required: "Please enter the start date.",
            })}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
          <label>Start Date</label>
        </div>
        <div className="user-box">
          <input
            type="text"
            id="date"
            {...register("endDate", {
              required: "Please enter the end date.",
            })}
            onFocus={(e) => (e.target.type = "date")}
            onBlur={(e) => (e.target.type = "text")}
          />
          <label>End Date</label>
        </div>
        <div className="user-box">
          <input type="text" {...register("location", {
              required: "Please enter the event location.",
            })} />
          <label>Location</label>
        </div>
        <div className="user-box">
          <input type="text" {...register("eventImage", {
              required: "Please enter the event image (url).",
            })} />
          <label>Event Image</label>
        </div>        
        <div className="isfeatured">
          <input
            id="checkbox"
            type="checkbox"
            {...register("isFeatured")}
          />
          <label htmlFor="checkbox">Featured</label>
        </div>

        <button>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddNewEvent;

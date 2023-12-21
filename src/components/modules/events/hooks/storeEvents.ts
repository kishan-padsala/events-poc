import { useStoreEventMutation } from "@/store";
import { StoreEvents } from "../types";
import { toast } from "react-toastify";

export const useStoreEventForm = () => {
  const [storeEvent, { isLoading }] = useStoreEventMutation();

  //! store events
  const handleStoreEvent = async (data: StoreEvents) => {
    const res = await storeEvent(data);

    if ((res as any)?.error) toast.error("Failed to store event");

    toast.success("Event store successfully");

    return res;
  }

  return{
    handleStoreEvent
  }
};

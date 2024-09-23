"use client";

import { createContext, useContext, useState } from "react";

const ReservationContext = createContext();

const initialState = { from: undefined, to: undefined };

function ResearvationProvider({ children }) {
  const [range, setRange] = useState(initialState);
  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservationContext() {
  const context = useContext(ReservationContext);
  if (context === undefined)
    throw new Error(
      "You are trying to consume the context from a component that isn't a child component of the provider. The provider only gives all child component access to the context."
    );
  return context;
}

export { ResearvationProvider, useReservationContext };

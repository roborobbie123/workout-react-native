// context/TrainerContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { trainer, clients } from "../DUMMY_DATA/users";

const TrainerContext = createContext();

export const TrainerProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(trainer);
  const [clientList, setClientList] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [workout, setWorkout] = useState([]);
  const [set, setSet] = useState({
    exercise: "",
    weight: "",
    reps: "",
    notes: "",
  });
  const [workingExercises, setWorkingExercises] = useState([]);

  useEffect(() => {
    if (activeUser?.role === "trainer") {
      setClientList(clients);
    } else {
      setClientList([]);
    }
  }, [activeUser]);

  return (
    <TrainerContext.Provider
      value={{
        activeUser,
        setActiveUser,
        clientList,
        selectedClient,
        setSelectedClient,
        workout,
        setWorkout,
        set,
        setSet,
        workingExercises,
        setWorkingExercises,
      }}
    >
      {children}
    </TrainerContext.Provider>
  );
};

export const useTrainer = () => useContext(TrainerContext);

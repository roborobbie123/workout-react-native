import React from "react";
import { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

import NewWorkout from "../pages/NewWorkout.jsx";
import WorkoutHistory from "../pages/WorkoutHistory.jsx";
import LiftLog from "../pages/LiftLog.jsx";

import Button from "@/components/Button.jsx";

import { workouts } from "../DUMMY_DATA/workouts.js";
import { trainer, clients } from "../DUMMY_DATA/users.js";

export default function Index() {
  const [activeUser, setActiveUser] = useState(trainer);
  const [clientList, setClientList] = useState([]);

  const [newWorkoutScreen, setNewWorkoutScreen] = useState(false);
  const [workoutHistoryScreen, setWorkoutHistoryScreen] = useState(false);
  const [liftLog, setLiftLog] = useState(false);

  // states for new workout
  const [workout, setWorkout] = useState([]);
  const [set, setSet] = useState({
    exercise: "",
    weight: "",
    reps: "",
    notes: "",
  });
  const [workingExercises, setWorkingExercises] = useState([]);

  // set client list based on active user
  useEffect(() => {
    if (activeUser && activeUser.role === "trainer") {
      setClientList(clients);
    } else {
      setClientList([]);
    }
  }, [activeUser]);

  return (
    <View style={styles.root}>
      {!newWorkoutScreen && !workoutHistoryScreen && !liftLog && (
        <View>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>RoboTrain</Text>
          </View>
          <Button
            text="New Workout"
            onPress={() => setNewWorkoutScreen(true)}
          />
          <Button
            text="Your Workouts"
            onPress={() => setWorkoutHistoryScreen(true)}
          />
          <Button text="Lift Log" onPress={() => setLiftLog(true)} />
        </View>
      )}
      {newWorkoutScreen && (
        <NewWorkout
          setSet={setSet}
          set={set}
          workout={workout}
          setWorkout={setWorkout}
          setNewWorkoutScreen={setNewWorkoutScreen}
          workingExercises={workingExercises}
          setWorkingExercises={setWorkingExercises}
        />
      )}
      {workoutHistoryScreen && (
        <WorkoutHistory
          setWorkoutHistoryScreen={setWorkoutHistoryScreen}
          workouts={workouts}
        />
      )}
      {liftLog && <LiftLog setLiftLog={setLiftLog} workouts={workouts} />}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  titleContainer: {
    alignItems: "center",
    marginVertical: 50,
  },
  titleText: {
    fontSize: 40,
    padding: 5,
    color: "#1E90FF",
  },
  button: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 3,
    borderWidth: 1,
    borderRadius: 5,
    width: 150,
    height: 40,
    borderColor: "#1E90FF",
    marginTop: 20,
  },
  buttonText: {
    color: "#1E90FF",
  },
  set: {
    display: "flex",
    borderWidth: 1,
    padding: 5,
  },
  setInput: {
    borderWidth: 1,
    padding: 3,
    borderRadius: 2,
    marginBottom: 2,
  },
});

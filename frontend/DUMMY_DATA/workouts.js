export const workouts = {
  // Jane Client (id: 2)
  101: {
    id: 101,
    userId: 2,
    date: "2025-06-01",
    summary: "Upper body strength",
    sets: [
      { exercise: "Bench Press", weight: 135, reps: 8, notes: "Good form" },
      { exercise: "Overhead Press", weight: 65, reps: 10, notes: "" },
    ],
  },
  103: {
    id: 103,
    userId: 2,
    date: "2025-06-04",
    summary: "Full body circuit",
    sets: [
      { exercise: "Squat", weight: 155, reps: 10, notes: "Felt strong" },
      { exercise: "Pull-ups", weight: null, reps: 8, notes: "Bodyweight only" },
    ],
  },

  // Mike Client (id: 3)
  201: {
    id: 201,
    userId: 3,
    date: "2025-05-20",
    summary: "Leg day",
    sets: [
      {
        exercise: "Deadlift",
        weight: 225,
        reps: 5,
        notes: "Keep back straight",
      },
      { exercise: "Leg Curl", weight: 90, reps: 12, notes: "" },
      { exercise: "Calf Raises", weight: 50, reps: 15, notes: "" },
    ],
  },
  202: {
    id: 202,
    userId: 3,
    date: "2025-05-22",
    summary: "Back and biceps",
    sets: [
      { exercise: "Barbell Row", weight: 115, reps: 8, notes: "" },
      { exercise: "Bicep Curl", weight: 40, reps: 12, notes: "" },
      { exercise: "Chin-ups", weight: null, reps: 6, notes: "Bodyweight" },
      { exercise: "Face Pulls", weight: 50, reps: 15, notes: "" },
    ],
  },

  // Sara Client (id: 4)
  301: {
    id: 301,
    userId: 4,
    date: "2025-06-03",
    summary: "HIIT cardio",
    sets: [
      {
        exercise: "Sprint",
        weight: null,
        reps: 10,
        notes: "20 sec sprint, 40 sec rest",
      },
      { exercise: "Jumping Jacks", weight: null, reps: 50, notes: "" },
      { exercise: "Burpees", weight: null, reps: 15, notes: "" },
      { exercise: "Mountain Climbers", weight: null, reps: 30, notes: "" },
      { exercise: "Jump Rope", weight: null, reps: 100, notes: "" },
    ],
  },
  302: {
    id: 302,
    userId: 4,
    date: "2025-06-06",
    summary: "Core and abs",
    sets: [
      { exercise: "Plank", weight: null, reps: 1, notes: "Held for 1 min" },
      { exercise: "Leg Raises", weight: null, reps: 20, notes: "" },
      { exercise: "Russian Twists", weight: 10, reps: 40, notes: "" },
    ],
  },

  // Alex Client (id: 5)
  401: {
    id: 401,
    userId: 5,
    date: "2025-06-01",
    summary: "Push day",
    sets: [
      { exercise: "Bench Press", weight: 185, reps: 6, notes: "" },
      { exercise: "Overhead Dumbbell Press", weight: 45, reps: 10, notes: "" },
      { exercise: "Tricep Dips", weight: null, reps: 12, notes: "" },
      { exercise: "Push-ups", weight: null, reps: 15, notes: "" },
    ],
  },
  402: {
    id: 402,
    userId: 5,
    date: "2025-06-04",
    summary: "Pull day",
    sets: [
      { exercise: "Pull-ups", weight: null, reps: 8, notes: "Bodyweight" },
      { exercise: "Barbell Rows", weight: 135, reps: 8, notes: "" },
      { exercise: "Face Pulls", weight: 60, reps: 15, notes: "" },
      { exercise: "Bicep Curl", weight: 45, reps: 12, notes: "" },
    ],
  },

  // Lilly Client (id: 6)
  501: {
    id: 501,
    userId: 6,
    date: "2025-05-28",
    summary: "Yoga and flexibility",
    sets: [
      {
        exercise: "Sun Salutation",
        weight: null,
        reps: 5,
        notes: "Focus on breathing",
      },
      { exercise: "Downward Dog", weight: null, reps: 1, notes: "Hold 1 min" },
      {
        exercise: "Warrior Pose",
        weight: null,
        reps: 3,
        notes: "30 sec each side",
      },
    ],
  },
  502: {
    id: 502,
    userId: 6,
    date: "2025-06-02",
    summary: "Full body stretch",
    sets: [
      {
        exercise: "Hamstring Stretch",
        weight: null,
        reps: 1,
        notes: "Hold 2 min",
      },
      { exercise: "Quad Stretch", weight: null, reps: 1, notes: "Hold 2 min" },
    ],
  },
};

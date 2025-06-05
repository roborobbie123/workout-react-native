export const trainer = {
  id: 1,
  name: "Robb Trainer",
  email: "robb.trainer@example.com",
  role: "trainer",
  clients: [
    {
      id: 2,
      name: "Jane Client",
      email: "jane.client@example.com",
    },
    {
      id: 3,
      name: "Mike Client",
      email: "mike.client@example.com",
    },
    {
      id: 4,
      name: "Sara Client",
      email: "sara.client@example.com",
    },
    {
      id: 5,
      name: "Alex Client",
      email: "alex.client@example.com",
    },
    {
      id: 6,
      name: "LillyClient",
      email: "lilly.client@example.com",
    },
  ],
};

export const clients = [
  {
    id: 2,
    name: "Jane Client",
    email: "jane.client@example.com",
    role: "client",
    workouts: {
      total: 132,
      page: 1,
      limit: 2,
      results: [
        {
          id: 101,
          date: "2025-06-01",
          summary: "Upper body strength",
          setCount: 2,
        },
        {
          id: 103,
          date: "2025-06-04",
          summary: "Full body circuit",
          setCount: 2,
        },
      ],
    },
  },
  {
    id: 3,
    name: "Mike Client",
    email: "mike.client@example.com",
    role: "client",
    workouts: {
      total: 58,
      page: 1,
      limit: 2,
      results: [
        {
          id: 201,
          date: "2025-05-20",
          summary: "Leg day",
          setCount: 3,
        },
        {
          id: 202,
          date: "2025-05-22",
          summary: "Back and biceps",
          setCount: 4,
        },
      ],
    },
  },
  {
    id: 4,
    name: "Sara Client",
    email: "sara.client@example.com",
    role: "client",
    workouts: {
      total: 75,
      page: 1,
      limit: 2,
      results: [
        {
          id: 301,
          date: "2025-06-03",
          summary: "HIIT cardio",
          setCount: 5,
        },
        {
          id: 302,
          date: "2025-06-06",
          summary: "Core and abs",
          setCount: 3,
        },
      ],
    },
  },
  {
    id: 5,
    name: "Alex Client",
    email: "alex.client@example.com",
    role: "client",
    workouts: {
      total: 90,
      page: 1,
      limit: 2,
      results: [
        {
          id: 401,
          date: "2025-06-01",
          summary: "Push day",
          setCount: 4,
        },
        {
          id: 402,
          date: "2025-06-04",
          summary: "Pull day",
          setCount: 4,
        },
      ],
    },
  },
  {
    id: 6,
    name: "Lilly Client",
    email: "lilly.client@example.com",
    role: "client",
    workouts: {
      total: 45,
      page: 1,
      limit: 2,
      results: [
        {
          id: 501,
          date: "2025-05-28",
          summary: "Yoga and flexibility",
          setCount: 3,
        },
        {
          id: 502,
          date: "2025-06-02",
          summary: "Full body stretch",
          setCount: 2,
        },
      ],
    },
  },
];

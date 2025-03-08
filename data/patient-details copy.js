export const users = [
{
  userId: "001",
  times: {
    morningPills: {
      pill1: {
        name: "Morning Pill Name 1",
        dosage: 2,
        isTaken: true
      },
      pill2: {
        name: "Morning Pill Name 2",
        dosage: 2,
        isTaken: false
      },
      pill3: {
        name: "Morning Pill Name 3",
        dosage: 2,
        isTaken: true
      }
    },
    afternoonPills: {
      pill1: {
        name: "Afternoon Pill Name 1",
        dosage: 1,
        isTaken: false
      },
      pill2: {
        name: "Afternoon Pill Name 2",
        dosage: 2,
        isTaken: true
      }
    },
    nightPills: {
      pill1: {
        name: "Night Pill Name 1",
        dosage: 1,
        isTaken: false
      }, 
      pill2: {
        name: "Night Pill Name 2",
        dosage: 1,
        isTaken: false
      }
    }
  },
  pillTakingData: [[0, 0, 0], [0, 0, 0], [1, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [1, 0, 0], [1, 1, 1]]
}
]

export const timings = {morning: "9:00 AM", afternoon: "3:00 PM", night: "9:00 PM"}

const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
export const restockDate = today.toLocaleDateString('en-US', options);
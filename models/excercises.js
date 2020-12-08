const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exercisesSchema = new Schema(
    {
      day: {
        type: Date,
        default: () => new Date(),
      },
      exercises: [
        {
          type: {
            type: String,
            trim: true,
            required: "Enter type"
          },
          name: {
            type: String,
            trim: true,
            required: "Enter name"
          },
          duration: {
            type: Number,
            required: "Enter duration"
          },
          weight: {
            type: Number
          },
          reps: {
            type: Number
          },
          sets: {
            type: Number
          },
          distance: {
            type: Number
          }
        }
      ]
    },
    {
      toJSON: {
        virtuals: true
      }
    }
);

exercisesSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Exercises = mongoose.model("Exercises", exercisesSchema);

module.exports = Exercises;


"use client";

import { Button, Checkbox, CheckIcon, createTheme, Grid, Slider } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  components: {
    Button: {
      styles: {
        root: {
          backgroundColor: "#009a80",
          color: "white",
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)', // Subtle shadow for a slight raised effect
        }
      }
    },

    Grid: {
      styles: {
        root: {
        }
      }
    },

    Fieldset: {
      styles: {
        root: {
          // backgroundColor: "#d1e8df"
          // padding: 40,
        }
      }
    },

    Title: {
      styles: {
        root: {
          color: "black"
        }
      }
    },

    Checkbox: {
      styles: {
        root: {
          display: 'flex',
          alignItems: 'center',
          margin: 5,
        },
        input: {
          backgroundColor: '#009a80', // Change checkbox color
          borderColor: '#009a80',     // Change checkbox border color
          '&:hover': {
            borderColor: '#007a66',   // Change border color on hover
          },
          '&:checked': {
            backgroundColor: '#009a80', // Keep the checked state color
            borderColor: '#009a80',
          },
        },
        label: {
          color: 'black', // Change the label text color
        },
      },
    },

    Slider: {
      styles: {
        root: {
          // Optionally add styles for the root here
          margin: 10,
        },
        bar: {
          backgroundColor: '#009a80', // Set the track color
        },
        thumb: {
          backgroundColor: '#009a80', // Set the thumb color
          border: '2px solid white',    // Optional: Add a white border to the thumb
        },
        mark: {
          backgroundColor: '#009a80', // Optional: Set mark color
        },
        markLabel: {
          color: 'black',               // Change mark label color to white
        },
      },
    },
  },

});

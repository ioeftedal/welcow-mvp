"use client";

import { Button, Checkbox, CheckIcon, createTheme, Slider } from "@mantine/core";

export const theme = createTheme({
  /* Put your mantine theme override here */
  components: {
    Button: {
      styles: {
        root: {
          backgroundColor: "#009a80",
          color: "white",
        }
      }
    },

    Checkbox: {
      styles: {
        root: {
          display: 'flex',
          alignItems: 'center',
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

  Pagination: {
    styles: {
      root: {
        // Optionally add styles for the root here
      },
      item: {
        // Set the background color for the pagination item
        backgroundColor: '#009a80', // Color for the inactive page buttons
        color: 'white',              // Text color for inactive page buttons
        '&[data-active]': {
          backgroundColor: '#007a66', // Color for the active page button
          border: '2px solid white',   // Optional: border for the active button
        },
        '&:hover': {
          backgroundColor: '#007a66', // Color on hover
        },
      },
    },
  },

});

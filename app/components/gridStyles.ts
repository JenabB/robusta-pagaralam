interface Styles {
  [key: string]: React.CSSProperties;
}

export const styles: Styles = {
  pin_container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridAutoRows: '10px',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'red',
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
};

// Responsive styles for smaller screens (e.g., mobile)
const smallScreenStyles: Styles = {
  pin_container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)', // Display 2 items per row
    gap: '10px', // Add gap between items
    backgroundColor: 'black',
  },
  card: {
    margin: '15px', // Adjusted margin
    padding: '10px', // Adjusted padding
    borderRadius: '8px', // Adjusted border radius
    backgroundColor: 'red',
  },
};
// Merge base styles with responsive styles
export const responsiveStyles: Styles = {
  ...styles, // Base styles
  '@media (max-width: 600px)': smallScreenStyles,
};

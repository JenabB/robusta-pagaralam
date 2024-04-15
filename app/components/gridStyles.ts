export const styles = {
  pin_container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
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

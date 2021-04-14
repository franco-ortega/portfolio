export const borderCornerData = {
  cornerNW: {
    grid: {
      gridColumn: '1 / 2',
      gridRow: '1 / 2',
      alignItems: 'flex-start',
      justifyContent: 'flex-start'
    },
    shape: {
      borderRadius: '0% 0% 90% 0%',
    }   
  },
  cornerNE: {
    grid: {
      gridColumn: '12 / 13',
      gridRow: '1 / 2',
      alignItems: 'flex-start',
      justifyContent: 'flex-end'
    },
    shape: {
      borderRadius: '0% 0% 0% 90%',
    }
  },
  cornerSW: {
    grid: {
      gridColumn: '1 / 2',
      gridRow: '7 / 8',
      alignItems: 'flex-end',
      justifyContent: 'flex-start'
    },
    shape: {
      borderRadius: '0% 90% 0% 0%',
    }
  },
  cornerSE: {
    grid: {
      gridColumn: '12 / 13',
      gridRow: '7 / 8',
      alignItems: 'flex-end',
      justifyContent: 'flex-end'
    },
    shape: {
      borderRadius: '90% 0% 0% 0%',
    }
  }
};
  
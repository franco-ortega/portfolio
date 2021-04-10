export const continentData = {
  profile: {
    title: 'Profile',
    grid: {
      gridColumn: '5 / 9',
      gridRow: '3 / 6'
    },
    link: '/profile',
    shape: {
      borderRadius: '120vw 70vw 95vw 90vw',
      marginRight: '2vw'
    },
    size: {
      height: '25vh',
      width: '25vw'
    }
      
  },
  projects: {
    title: 'Team Projects',
    grid: {
      gridColumn: '1 / 5',
      gridRow: '2 / 5'
    },
    link: '/projects',
    shape: {
      borderRadius: '220vw 170vw 395vw 90vw'
    },
    size: {
      height: '20vh',
      width: '23vw'
    }
  },
  resume: {
    title: 'Resume',
    grid: {
      gridColumn: '8 / 11',
      gridRow: '5 / 8',
      marginTop: '2vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    outerCoastline: {
      background: 'var(--outer-coastline)',
      boxShadow: '0vw 0vw 2vw 2vw var(--coastline-shadow)',
      borderRadius: '520vw 270vw 495vw 90vw',
      padding: '0.75vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerCoastline: {
      background: 'var(--inner-coastline)',
      border: '0.15vw dashed var(--continent-border)',
      borderRadius: 'inherit',
      padding: '1vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 'fit-content',
      width: 'fit-content'

    },
    continent: {
      background: 'var(--continent)',
      border: '.25vw solid var(--continent-border)',
      borderRadius: 'inherit',
      height: '15vh',
      width: '20vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3vw',
      fontWeight: 'bold'
    }
      
  }
  
  
};

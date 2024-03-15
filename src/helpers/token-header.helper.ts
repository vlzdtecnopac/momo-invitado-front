export const tokenHeader = {
    'x-token': `${localStorage.getItem('token-momo')}`,
    'Content-Type': 'application/json', // Adjust content type as needed
  };
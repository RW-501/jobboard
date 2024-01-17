// auth.js

// Function to log out the user
const logout = async () => {
  try {
    await firebase.auth().signOut();
    removeLoggedInFlag(); // Remove the flag from localStorage on logout
  } catch (error) {
    console.error('Logout failed:', error.message);
  }
};

// Function to check if a user is logged in
var checkUserLogin = () => {
  return firebase.auth().currentUser;
};

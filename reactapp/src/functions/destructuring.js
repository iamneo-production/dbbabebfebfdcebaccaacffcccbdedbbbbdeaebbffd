// File: reactapp/src/functions/destructuring.js

// Function to get user IP and name using destructuring
function getUserIpDetails(userResponse = {}) {
  const { userName, userIp = '0.0.0.0' } = userResponse;
  return [userName, userIp];
}

// Function to get top three student marks using destructuring
function getTopThree(studentMarks = []) {
  const [first = null, second = null, third = null] = studentMarks;
  return [first, second, third].sort((a, b) => b - a);
}
export { getUserIpDetails, getTopThree };

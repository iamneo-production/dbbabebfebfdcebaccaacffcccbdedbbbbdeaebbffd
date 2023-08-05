// File: reactapp/src/functions/destructuring.js

// Function to get user IP and name using destructuring
function getUserIpDetails(userResponse = {}) {
    const { userIp = '0.0.0.0', userName } = userResponse;
    return [userName, userIp];
  }
  
  // Function to get top three student marks using destructuring
  function getTopThree(studentMarks = []) {
    const [firstMark = null, secondMark = null, thirdMark = null] = studentMarks;
    return [firstMark, secondMark, thirdMark].sort((a, b) => b - a).slice(0, 3);
  }
  
  export { getUserIpDetails, getTopThree };
  
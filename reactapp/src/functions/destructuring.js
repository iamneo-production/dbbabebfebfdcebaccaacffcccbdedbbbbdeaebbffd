function getUserIpDetails(userResponse = {}) {
    const {userIp = '0.0.0.0', userName} = userResponse;
    return [userName, userIp];
  }
  
  function getTopThree(studentMarks = []) {
    const [firstMark = null, secondMark = null, thirdMark = null] = studentMarks;
    return [firstMark, secondMark, thirdMark].sort();
  }
  
  export { getUserIpDetails,getTopThree};
function getUserIpDetails(userResponse = {}) {
  const { userName, userIp ='0.0.0.0' } = userResponse;
  return [username,userIp];
}
function getTopThree(StudentMarks=[]) {
  const [first=null,second=null,third=null, ...rest]=student
  retuen [first,second,third].sort();
}
export {getUserIpDetails,getTopThree}

  
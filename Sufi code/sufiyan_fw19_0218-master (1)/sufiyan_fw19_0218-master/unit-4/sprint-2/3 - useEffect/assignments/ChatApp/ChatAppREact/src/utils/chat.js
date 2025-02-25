export const users = [
    {
      id: 1,
      name: "Sufi"
    },
    
    {
      id: 2,
      name: "Meher"
    },
    {
        id: 3,
        name: "Saurabh"
      },
 
  ];
  
  function createConnection(user) {

    console.log(`started lisening to `, user);

    let id;

    function listen(callback) {
      id = setInterval(() => {
        let message = `new Message from ${
          user.name
        } at ${new Date().toTimeString()}`;
        callback(message);
      }, 1000);
    }


    
    function unsubscribe() {
      console.log(`stopped listening to ${user.name}`);
      clearInterval(id);
    }
    
    return { listen, unsubscribe };
  }
  
  export default createConnection;
  
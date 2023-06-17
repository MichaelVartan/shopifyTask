(()=>{
    const miniCart = document.querySelector("miniCart")  
    async function getMiniCart() {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (response.status < 400) {
            const users = await response.json();
            displayUsers(users);
          } else {
            alert('Error from server');
          }
        } catch (err) {
          alert(err.message);
        }
      }      
})();
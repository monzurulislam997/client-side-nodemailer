import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    //error handling


    const name = e.target.name.value;
    const email = e.target.email.value;
    const address = e.target.name.value;
    if (!name || !email || !address) {
      return alert("Please , fill up all  the field")
    }
    const customerInfo = {
      name, email, address
    }

    fetch('https://backend-email-nodemailer.vercel.app/sendemail', {
      // fetch('http://localhost:5000/sendemail', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(customerInfo)
    }).then(res => res.json())
      .then(data => {
        if (data) {
          return alert("Email has been sent.Please, Check your email")
        }
      })

    e.target.reset()

  }
  return (
    <div style={{
      backgroundColor: "#6495ED", width: '100vw',
      height: '100vh'
    }} className="App container">
      <h1>Order Now</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder=' Your name' name="name" /> <br />
        <input type="email" placeholder=' Your email' name="email" /> <br />
        <input type="text" placeholder='Your address' name="address" /> <br />
        <input id='btn' type="submit" value="Submit" /> <br />
      </form>
    </div>
  );
}

export default App;

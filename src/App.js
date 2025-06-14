import './App.css';

function App() {
  return (
    <>
      <div className='navbar'>
        <div className='navTitle'>Parul University</div>
        <div className='navData'>
          <div><a href='#home'>Home</a></div>
          <div><a href='#results'>Results</a></div>
          <div><a href='#getAdmission'>Get Admission</a></div>
          <div><a href='#login'>Login</a></div>
        </div>
      </div>
      <div className='container'>
        <div className='sectionimg'>
          <img src="./image/parul.jpg" alt="parul img" />
        </div>

        <div className='query-form'>
          <div className='query-form-head'>
            <h3>Querry Form</h3>
          </div>
          <div className='query-form-body'>
            <form onSubmit={(e) => e.preventDefault()}>
            Full Name:<input type="text" name="name" placeholder="Enter Full Name" />
            Email:<input type="email" name="email" placeholder="Enter Email" />
            Phone Number:<input type="text" name="number" placeholder="Enter Phone number" />
            Course:<input type="text" name="course" placeholder="Enter Phone number" />
            Query:<textarea type="text" name="query" placeholder="Enter Query" />
            <button type='submit'>Submit</button> 
          </form>
          </div>
        </div>
      </div>
      <div className='footer'>
          © 2025 Parul University | All Rights Reserved
      </div>
    </>
  );
}

export default App;

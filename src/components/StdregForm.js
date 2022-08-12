import React from "react";

export default function StdregForm() {
  return (
    <div>
      <div className="form-register">
        <form action="">
          <h2>Student Registration</h2>
          <div
            style={{
              display: "flex",
            }}
          >
            <input type="text" name="" id="" placeholder="First name" />
            <br />
            <input type="text" name="" id="" placeholder="Last name" />
            <br />
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <input
              style={{
                width: "100%",
              }}
              type="text"
              name=""
              id=""
              placeholder="Email"
            />
            <br />
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <input type="text" name="" id="" placeholder="Phone" />
            <br />
            <input type="text" name="" id="" placeholder="Address" />
            <br />
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <input type="date" name="dob" id="" placeholder="DateofBirth" />
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <select className="edubox" name="edulevel" placeholder="Education">
              <option value="SSC">SSC</option>
              <option value="HSC">HSC</option>
              <option value="Undergraduate">BSC</option>
            </select>
          </div>
          <div
            style={{
              display: "flex",
            }}
          >
            <input type="text" name="" id="" placeholder="Password" />
            <br />
            <input type="text" name="" id="" placeholder="Confrim Password" />
            <br />
          </div>

          <button>Sing up</button>
        </form>
      </div>
    </div>
  );
}

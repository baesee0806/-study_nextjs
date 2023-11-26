import Modal from "@/components/Modal";

function Register() {
  return (
    <Modal>
      <div className="auth_container">
        <h1>Register</h1>
        <form action="">
          <div>
            <label htmlFor="name">Your Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div>
            <label htmlFor="email">Your Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Your Password</label>
            <input type="password" name="password" id="password" />
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default Register;

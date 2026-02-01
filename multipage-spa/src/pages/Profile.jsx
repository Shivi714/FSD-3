import profileImg from "../assets/cat.jpg";

function Profile() {
  return (
    <div className="card">

      <img
        className="profile-img"
        src={profileImg}
        alt="Profile"
      />

      <h2>Shivali</h2>
      <p><b>Branch:</b> Computer Science</p>
      <p><b>Email:</b> student@gmail.com</p>

      <h3>Projects</h3>
      <ul>
        <li>Customer Churn Prediction</li>
        <li>Fake News Detection</li>
        <li>Diabetes Prediction</li>
      </ul>

      <h3>Internship</h3>
      <p>Deloitte Data Analytics Virtual Internship</p>

    </div>
  );
}

export default Profile;

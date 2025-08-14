import React from "react";

function LandingPage() {
  const containerStyle = {
    padding: "50px",
    maxWidth: "900px",
    margin: "auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    animation: "fadeIn 1s ease forwards",
  };

  const headingStyle = {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: "20px",
    textAlign: "center",
  };

  const subHeadingStyle = {
    fontSize: "1.2rem",
    color: "#7F8C8D",
    marginBottom: "40px",
    textAlign: "center",
    maxWidth: "700px",
    margin: "0 auto 40px auto",
  };

  const sectionStyle = {
    marginBottom: "40px",
    lineHeight: "1.6",
    color: "#34495E",
    fontSize: "1.05rem",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to StudentGrader</h1>
      <p style={subHeadingStyle}>
        The smart way for students to assess, improve, and prepare for the job
        market.
      </p>

      <section style={sectionStyle}>
        <h2>📌 What is StudentGrader?</h2>
        <p>
          StudentGrader is an interactive assessment platform where students can
          log in, take skill-based quizzes, and instantly get their performance
          scores. The system is designed to help students identify their
          strengths and weaknesses, making it easier to focus on areas that need
          improvement.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>💡 Why StudentGrader?</h2>
        <p>
          In today’s competitive job market, technical skills and
          problem-solving ability are essential. StudentGrader helps students
          evaluate their readiness for placement drives, competitive exams, and
          interviews. By regularly taking assessments, students can track
          progress and work on specific areas to increase their job readiness.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2>⚙ How Does It Work?</h2>
        <ol>
          <li>Sign up or log in to your StudentGrader account.</li>
          <li>Select and take the available assessments and exams.</li>
          <li>Get instant feedback with your final score.</li>
          <li>Review your weak areas and try again to improve.</li>
          <li>Track your progress over time to achieve your goals.</li>
        </ol>
      </section>

      <section style={sectionStyle}>
        <h2>🚀 Get Job Ready</h2>
        <p>
          StudentGrader isn’t just about marks — it’s about growth. Each
          assessment moves you one step closer to being fully prepared for your
          dream job. Practice, improve, and succeed with StudentGrader.
        </p>
      </section>
    </div>
  );
}

export default LandingPage;

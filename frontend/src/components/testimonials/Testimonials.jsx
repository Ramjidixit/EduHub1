import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "Shreya",
      position: "Student",
      message:
        "This platform helped me learn so effectively. The courses are amazing and the instructors are top-notch.",
      image:
      "https://media.istockphoto.com/id/1286771193/photo/young-woman-facial-expression-stock-photo.jpg?s=612x612&w=0&k=20&c=5LDI3DgXzp2VX7IV53i5eqPmxt3-5mayRuXNsRajgps="
    },
    {
      id: 2,
      name: "Manvi",
      position: "Student",
      message:
        "I've learned more here than in any other place. The interactive lessons and quizzes make learning enjoyable.",
      image:
        "https://media.istockphoto.com/id/1493173739/photo/cute-little-schoolgirl-studying-at-home-isolated-childhood-education-concept.webp?b=1&s=170667a&w=0&k=20&c=YW2zLFf8mo9xZR2_VIDoqIgBFB5MaZDtLlJIdQdNddY=",
    },
    {
      id: 3,
      name: "Ananya",
      position: "Student",
      message:
      "This eLearning platform is amazing! The courses are interactive and engaging, and I love that I can learn at my own pace with expert instructors",
      image:
      "https://media.istockphoto.com/id/1353588870/photo/young-indian-woman-on-yellow-copy-space-background-stock-photo.webp?b=1&s=170667a&w=0&k=20&c=z937RoQ5LGXULAiSTLxS1RbQ4CZ-f-6io-JyJUV165I="
    },
    {
      id: 4,
      name: "Prachi",
      position: "Student",
      message:"This eLearning platform is fantastic, offering engaging courses and the flexibility to learn at my own pace with expert instructors.",
      image:
      "https://media.istockphoto.com/id/1221041044/photo/teenage-girl-at-white-background-stock-images.webp?b=1&s=170667a&w=0&k=20&c=0Gy4mH-Gobn1EeqlVOPicXxWQtl3Y9IhVrumvlxFZKk="
    },
  ];
  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testmonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt="loading.." />
            </div>
            <p className="message">{e.message}</p>
            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

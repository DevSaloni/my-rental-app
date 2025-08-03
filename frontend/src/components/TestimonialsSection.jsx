import React from 'react';
import { BiMessageDetail } from 'react-icons/bi'; 
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Aarav Mehta',
    role: 'Recent Graduate - Moved to Pune',
    photo: '/user1.jpg',
    rating: 5,
    feedback:
      "UrbanDwell made moving so easy! I found a furnished flat within a day and the owner was super genuine."
  },
  {
    name: 'Isha Patil',
    role: 'Software Developer - Bangalore',
    photo: '/user2.jpeg',
    rating: 4,
    feedback:
      "No broker fees, no drama. The verified listings saved me time and stress. I love the simplicity!"
  },
  {
    name: 'Ritik Sharma',
    role: 'MBA Student - Mumbai',
    photo: '/user3.jpeg',
    rating: 5,
    feedback:
      "From search to shifting, everything was smooth. UrbanDwell is a blessing for students like me!"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials">
    <div className="testimonial-heading">
        What Our Users Say... <BiMessageDetail className="chat-icon" style={{"font-size":'46px'}} />
    </div>     
    <div className="testimonial-wrapper">
        {testimonials.map((user, index) => (
          <div className="testimonial-card" key={index}>
            <img src={user.photo} alt={user.name} className="user-photo" />
            <h3>{user.name}</h3>
            <p className="user-role">{user.role}</p>
            <p className="user-feedback">“{user.feedback}”</p>
            <div className="rating">
              {'★'.repeat(user.rating)}{'☆'.repeat(5 - user.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;

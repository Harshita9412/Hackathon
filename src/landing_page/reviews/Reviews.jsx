import React, { useState } from 'react';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      name: 'John Doe',
      rating: 5,
      comment: 'This service really helped me during a tough time. Highly recommend!',
    },
    {
      name: 'Jane Smith',
      rating: 4,
      comment: 'Very supportive and helpful staff. Would love to see more resources available.',
    },
    {
      name: 'Emily White',
      rating: 5,
      comment: 'Incredible experience! The resources provided made a huge difference in my mental health journey.',
    },
    {
      name: 'Michael Brown',
      rating: 3,
      comment: 'Helpful but I think there could be more follow-up after sessions.',
    },
  ]);

  // State for new review input fields
  const [newName, setNewName] = useState('');
  const [newRating, setNewRating] = useState(1);
  const [newComment, setNewComment] = useState('');

  // Handle form submission
  const handleAddReview = (e) => {
    e.preventDefault();
    if (newName && newComment) {
      const newReview = {
        name: newName,
        rating: newRating,
        comment: newComment,
      };
      setReviews([newReview, ...reviews]); // Add new review at the top
      setNewName('');
      setNewRating(1);
      setNewComment('');
    }
  };

  return (
    <div className="reviews-container">
      {/* Reviews Section */}
      <section className="reviews-section">
        <h2 className="reviews-title">What Our Clients Say</h2>
        <div className="reviews-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-header">
                <h3 className="review-name">{review.name}</h3>
                <div className="review-rating">
                  {Array.from({ length: review.rating }, (_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
              <p className="review-comment">{review.comment}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Add Your Review Section */}
      <section className="add-review-section">
        <h3 className="add-review-title">Add Your Review</h3>
        <form onSubmit={handleAddReview} className="add-review-form">
          <div className="form-field">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              placeholder="Your Name"
              required
              className="input-field"
            />
          </div>
          <div className="form-field">
            <select
              value={newRating}
              onChange={(e) => setNewRating(Number(e.target.value))}
              className="input-field"
            >
              <option value={1}>1 Star</option>
              <option value={2}>2 Stars</option>
              <option value={3}>3 Stars</option>
              <option value={4}>4 Stars</option>
              <option value={5}>5 Stars</option>
            </select>
          </div>
          <div className="form-field">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Your Comment"
              required
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-btn">Submit Review</button>
        </form>
      </section>
    </div>
  );
};

export default Reviews;

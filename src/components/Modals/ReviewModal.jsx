import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchDataByIds, postDataById } from "../../config/Api Services/apiServices";
import { showSuccessToast } from "../Toast/Toast";

const ReviewModal = ({ open, onClose, taskNo }) => {
  const { id } = useParams();

  const token = localStorage.getItem("token");
  const [review, setReview] = useState();

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleReview = async () => {
    const dataToSubmit = {
      review: review,
    };
    try {
      await postDataById(
        "assign-review",
        dataToSubmit,
        token,
        id,
        taskNo
      );
      showSuccessToast("Review send successfully.");
      onClose();
    } catch (error) {
      console.error("Error:", error);
    }finally{
        setReview("")
    }
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "90%",
            sm: 400,
            md: 450,
            lg: 500,
          },          bgcolor: "background.paper",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Typography id="modal-title" variant="h6">
          Review Task
        </Typography>
        <TextField
          id="review"
          label="Enter your review"
          multiline
          rows={4}
          variant="outlined"
          value={review}
          onChange={handleReviewChange}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleReview}
          sx={{ mt: 2 }}
        >
          Submit Review
        </Button>
      </Box>
    </Modal>
  );
};
export const GetReviewModal = ({ open, onClose, taskNo }) => {
    const id = localStorage.getItem("agentId");
    const token = localStorage.getItem("token");
    const [reviews, setReviews] = useState([]);
    
    useEffect(() => {
      const fetchReviews = async () => {
        if (open && taskNo) {
          try {
            const data = await fetchDataByIds(
              "get-assign-reviews",
              token,
              id,
              taskNo
            );
            
            if (Array.isArray(data)) {
              setReviews(data);
            } else {
              console.error("Unexpected data format:", data);
              showErrorToast('Failed to fetch review');
            }
            
          } catch (error) {
            console.error("Error fetching reviews:", error);
            showErrorToast('Failed to fetch review');
          }
        }
      };
  
      fetchReviews();
    }, [open, taskNo, id, token]);
  
    return (
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
                width: {
                  xs: "90%",
                  sm: 400,
                  md: 450,
                  lg: 500,
                },
            maxHeight: "80vh",
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden"
          }}
        >
          <Typography id="modal-title" variant="h6" style={{fontWeight: "bold", marginBottom: "10px"}}>
            Reviews for Task {taskNo}
          </Typography>
          
          <Box
            sx={{
              flex: 1,
              overflowY: "auto", 
              mb: 2, 
            }}
          >
            {reviews.length > 0 ? (
              reviews.map((review, index) => (
                <Typography
                  key={index}
                  variant="body1"
                  sx={{ mb: 2, whiteSpace: 'pre-line' }} 
                >
                  <strong>Review {index + 1}:</strong> {review.review || 'No review available'}
                </Typography>
              ))
            ) : (
              <Typography>No reviews available for this task.</Typography>
            )}
          </Box>
          
          <Button
            variant="contained"
            color="primary"
            onClick={onClose}
            sx={{ mt: 2 }}
          >
            Close
          </Button>
        </Box>
      </Modal>
    );
  };
export default ReviewModal;

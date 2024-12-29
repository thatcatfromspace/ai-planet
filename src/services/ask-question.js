import axios from "axios";

const askQuestion = async (question) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/ask_question/",
      question,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.status === 200) {
      return response.data;
    } else {
      return "Question submission failed";
    }
  } catch (error) {
    return error.toString();
  }
};

export default askQuestion;

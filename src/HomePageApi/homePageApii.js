import axios from "axios";

const baseUrl = "http://localhost:8000/";

const homePage = async () => {
  try {
    const res = await axios.get(baseUrl, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status === 200) {
      const data = res.data;
      console.log(data);
    }
  } catch (error) {
    console.error("Error fetching homepage:", error.message);
  }
};

module.exports = { homePage };
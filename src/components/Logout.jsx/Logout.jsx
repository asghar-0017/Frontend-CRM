import axios from "axios";
import API_CONFIG from "../../config/API/api";

const handleLogout = async () => {
    const { apiKey } = API_CONFIG;

    try {
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("No token found");
      }

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      const response = await axios.post(`${apiKey}/logout`, {}, config);

      console.log("Logout successful:", response.data);

      localStorage.removeItem("token");
      localStorage.removeItem("agentId");
      localStorage.removeItem("agentInfo");
      localStorage.removeItem("onlineAgents");
      window.location.reload();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  export default handleLogout;
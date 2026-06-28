import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000",
});

export const analyzeCompany = async (company) => {
    const response = await API.post("/analyze", {
        company,
    });

    return response.data;
};
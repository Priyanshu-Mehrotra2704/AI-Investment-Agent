import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000",
});

export const analyzeCompany = async (company) => {
    const response = await API.post("/analyze", {
        company,
    });

    return response.data;
};
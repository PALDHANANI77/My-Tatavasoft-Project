import request from "./request"; // Make sure this path is correct

const ENDPOINT = "api/user";

const login = async (data) => {
  const url = `${ENDPOINT}/login`;
  try {
    const response = await request.post(url, data);
    return response;
  } catch (error) {
    // Handle the error here if needed
    throw error;
  }
};

const create = async (data) => {
  const url = `${ENDPOINT}`;
  try {
    const response = await request.post(url, data);
    return response;
  } catch (error) {
    // Handle the error here if needed
    throw error;
  }
};

const authService = {
  login,
  create,
};

export default authService;

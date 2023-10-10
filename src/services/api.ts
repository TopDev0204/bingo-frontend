import apiInstance from "../utils/apiHelper";

export const submitFormData = async (formData: FormData) => {
  try {
    const response = await apiInstance.post("/submit", formData);

    return {
      success: true,
      data: response.data,
      msg: "",
    };
  } catch (error: any) {
    return {
      success: false,
      msg: error.message || "Unexpected Error",
    };
  }
};

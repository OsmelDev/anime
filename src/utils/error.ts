export const isAxiosError = (error: unknown) => {
  const isError = error && typeof error === "object" && "response" in error;

  const axiosError = error as { response: { data: { message: string } } };

  const frontError = error as { message: string };

  let message = frontError.message;

  if (axiosError.response && axiosError.response.data) {
    message = axiosError.response.data.message;
  }

  return {
    isError,
    message,
  };
};

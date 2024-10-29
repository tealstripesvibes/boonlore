export const mockAsyncValidation = async (data: Record<string, any>) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async validation complete:", data);
      resolve(true);
    }, 10);
  });
};

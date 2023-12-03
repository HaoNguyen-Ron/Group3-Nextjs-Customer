export const getProductLimit = async () => {
  try {
      const res = await axiosClient.get('/query/getProductLimit')

      return res.data.payload || []
  } catch (error) {
      console.log('««««« apiError »»»»»', error);
  }
};
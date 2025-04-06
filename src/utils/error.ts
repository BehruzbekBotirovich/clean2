const defaultErrorHandler = async (error: any, errorMessage?: string) => {
    const { response } = error;

    if (errorMessage) {
        return response.data;
    }

    if (response.data == null) {
        return Promise.reject(error);
    }

    return response.data;
};

export { defaultErrorHandler };

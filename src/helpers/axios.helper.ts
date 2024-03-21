import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 5000, // tiempo de espera de 5 segundos
});

// Interceptor de solicitudes: se ejecuta antes de que se envíe la solicitud
axiosInstance.interceptors.request.use(async (config: InternalAxiosRequestConfig<any>) => {
    const token = localStorage.getItem('token-momo');
    if (token) {
        config.headers['x-token'] = `${token}`;
    }
    return config;
},
    (error: AxiosError) => {
        return Promise.reject(error);
    }
);

// Interceptor de respuestas: se ejecuta después de recibir la respuesta
axiosInstance.interceptors.response.use(
    (response) => {
        // Si la respuesta es exitosa, simplemente devuélvela
        return response;
    },
    async (error: AxiosError) => {
        // Si la respuesta es un error, puedes manejarlo aquí, por ejemplo, renovar el token si es necesario y reintentar la solicitud
        const originalRequest: any = error.config;

        if (error.response?.status === 401 && error.name == "TokenExpiredError" || !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Renovar el token
                const newToken = await renewToken(); // Función para renovar el token

                // Actualizar el token en el almacenamiento local o donde sea necesario
                localStorage.setItem('token-momo', newToken);

                // Repetir la solicitud original con el nuevo token
                if (newToken) {
                    originalRequest.headers['x-token'] = `${newToken}`;
                    return axiosInstance(originalRequest);
                } else {
                    // Si no se puede renovar el token, puedes redirigir al usuario a la página de inicio de sesión o hacer cualquier otra acción
                    console.error('No se pudo renovar el token');
                    // Por ejemplo, redirigir al usuario a la página de inicio de sesión
                    window.location.href = '/';
                    return Promise.reject(error);
                }
            } catch (error) {
                console.error('Error al renovar el token:', error);
                localStorage.removeItem('token-momo');
                window.location.href = '/';
                return Promise.reject(error);
            }
        }

        // Si no es un error de autenticación o si no se puede renovar el token, simplemente devuelve el error
        return Promise.reject(error);
    }
);

// Función para renovar el token
const renewToken = async () => {
    const employeeId = localStorage.getItem("employee-id");
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/update_token`, {
        "id": employeeId
    });
    return response.data.token;
};

export default axiosInstance;
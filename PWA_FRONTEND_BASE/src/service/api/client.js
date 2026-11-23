
const API_URL = import.meta.env.VITE_API_URL || "";

export const apiFetch = (path, options = {}) => {
  const endpoint = API_URL
    ? `${API_URL.replace(/\/$/, "")}${path.replace(/^\/api/, "")}`
    : path;

  return fetch(endpoint, {
    credentials: "include",
    ...options,
  });
};

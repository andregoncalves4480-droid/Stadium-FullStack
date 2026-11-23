
import { apiFetch } from "./client";

export const getUsers = ({ pageSize, current } = {}) => {
  const query = new URLSearchParams({
    limit: pageSize || 10,
    skip: (current || 1) - 1,
  });

  return apiFetch(`/api/users?${query}`, {
    headers: { Accept: "application/json" },
  }).then((response) => response.json());
};

export const createUser = (data) =>
  apiFetch("/api/users", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  });

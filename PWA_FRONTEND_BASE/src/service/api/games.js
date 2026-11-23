
import { apiFetch } from "./client";

export const getGames = ({ pageSize, current } = {}) => {
  const query = new URLSearchParams({
    limit: pageSize || 10,
    skip: (current || 1) - 1,
  });

  return apiFetch(`/api/games?${query}`, {
    headers: { Accept: "application/json" },
  }).then((response) => response.json());
};

export const createGame = (data) =>
  apiFetch("/api/games", {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  });

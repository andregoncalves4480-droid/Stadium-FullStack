
import { apiFetch } from "./client";

export const getMember = (userId) =>
  apiFetch(`/api/users/member/${userId}`, {
    headers: { Accept: "application/json" },
  }).then((response) => response.json());

export const createMember = (userId, data) =>
  apiFetch(`/api/users/${userId}/member`, {
    headers: { "Content-Type": "application/json" },
    method: "POST",
    body: JSON.stringify(data),
  });


import { apiFetch } from "./client";

export const getPerfil = () =>
  apiFetch("/api/users/perfil", {
    headers: { Accept: "application/json" },
  }).then((response) => response.json());

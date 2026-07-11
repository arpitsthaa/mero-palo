const KEYS = {
  USER: 'meropalo_user',
  TOKENS: 'meropalo_tokens',
  USERS_DB: 'meropalo_users_db',
};

export function getUser() {
  const raw = localStorage.getItem(KEYS.USER);
  return raw ? JSON.parse(raw) : null;
}

export function setUser(user) {
  localStorage.setItem(KEYS.USER, JSON.stringify(user));
}

export function clearUser() {
  localStorage.removeItem(KEYS.USER);
}

export function getUsersDb() {
  const raw = localStorage.getItem(KEYS.USERS_DB);
  return raw ? JSON.parse(raw) : [];
}

export function saveUserToDb(user) {
  const db = getUsersDb();
  db.push(user);
  localStorage.setItem(KEYS.USERS_DB, JSON.stringify(db));
}

export function findUserByEmail(email) {
  return getUsersDb().find((u) => u.email === email);
}

export function getTokens() {
  const raw = localStorage.getItem(KEYS.TOKENS);
  return raw ? JSON.parse(raw) : [];
}

export function saveToken(token) {
  const tokens = getTokens();
  tokens.push(token);
  localStorage.setItem(KEYS.TOKENS, JSON.stringify(tokens));
  return token;
}

export function cancelToken(tokenId) {
  const tokens = getTokens().map((t) =>
    t.id === tokenId ? { ...t, status: 'cancelled' } : t
  );
  localStorage.setItem(KEYS.TOKENS, JSON.stringify(tokens));
}

export function getTokensForUser(email) {
  return getTokens().filter((t) => t.userEmail === email);
}

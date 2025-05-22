// lib/auth.ts
type User = {
  email: string;
  password: string; 
};

let mockUsers: User[] = [];

export function registerUser(email: string, password: string): boolean {
  const exists = mockUsers.find((u) => u.email === email);
  if (exists) return false;
  mockUsers.push({ email, password });
  return true;
}

export function loginUser(email: string, password: string): boolean {
  return mockUsers.some((u) => u.email === email && u.password === password);
}

export function logoutUser(email: string): boolean {
  const index = mockUsers.findIndex((u) => u.email === email);
  if (index === -1) return false;
  mockUsers.splice(index, 1);
  return true;
}
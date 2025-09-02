export type Person = {
  id: string;
  name: string;
  role?: string;
  email?: string;
  avatarUrl?: string;
  github: string;   // NOVA propriedade obrigatória
  isSelf?: boolean; // marca quem é você (vem primeiro)
};
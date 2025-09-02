import type { Person } from "../types";

export default function Card({ person }: { person: Person }) {
  return (
    <article className="card">
      <img
        className="avatar"
        src={person.avatarUrl || "https://via.placeholder.com/160"}
        alt={`Foto de ${person.name}`}
      />
      <div className="content">
        <h3 className="name">{person.name}</h3>
        {person.role && <p className="role">{person.role}</p>}
        {person.email && <p className="email">{person.email}</p>}
        <a
          className="githubBtn"
          href={person.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
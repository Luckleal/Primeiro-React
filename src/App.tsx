import "./index.css";
import Card from "./components/Card";
import { people } from "./data/team";

export default function App() {
  const me = people.find((p) => p.isSelf);
  const others = people
    .filter((p) => !p.isSelf)
    .sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));

  const ordered = (me ? [me] : []).concat(others);

  return (
    <main className="container">
      <h1>Projeto React Cards</h1>
      <p className="subtitle">
        Lucas Leal Ferreira. Igor Projenio e Jonas Gabriel
      </p>

      <section className="grid">
        {ordered.map((person) => (
          <Card key={person.id} person={person} />
        ))}
      </section>
    </main>
  );
}
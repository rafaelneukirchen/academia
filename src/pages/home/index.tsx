import * as S from "./styles";
import { Iexercicios, exercicios } from "../../storage/Rafael/exerciciosPerna";

const Home: React.FC = () => {
  const data = exercicios;

  return (
    <main>
      <S.Corpo>
        <div>
          <h3>Olá,</h3>
          <h2>Desenvolvedor Maromba!</h2>
        </div>
        <table>
          <tr>
            <th>Exercício</th>
            <th>Quantidade</th>
            <th>Repetições</th>
          </tr>
          {data.map(({ nome, reps, sets }: Iexercicios) => {
            return (
              <tr>
                <td>{nome}</td>
                <td>{reps}</td>
                <td>{sets}</td>
              </tr>
            );
          })}
        </table>
      </S.Corpo>
    </main>
  );
};

// Agachamento drop 4x até a falha
// Leg 45 3x
// Agachamento sumô ou terra 3x até a falha
// Agachamento búlgaro 3x ate a falha
// Cadeira flexora 5x até a falha
// Stiff 3x
// Cadeira abdutora 3x até a falha
// Cadeira solear 5x
// Panturrilha em pé 5x até a falha

export default Home;

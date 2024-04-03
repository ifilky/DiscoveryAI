import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import minhaFoto from "assets/perfil.jpg";

const SobreMim = () => {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre Mim">
      <h3 className={styles.subtitulo}>Olá, eu sou Ilky</h3>

      <img
        src={minhaFoto}
        alt="Foto de Ilky"
        className={styles.fotoSobreMim}
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou estudante do curso de Sistemas de Informação. No momento, trabalho como suporte de sistema ERP, mas sou um grande entusiasta da programação e das incríveis soluções que ela pode criar para os mais diversos tipos de situações.
      </p>
      <p className={styles.paragrafo}>
        Minha história com programação começou no Instituto Federal de Alagoas
        (IFAL), quando iniciei meu curso de ensino superior. Eu
        aprendi lógica de programação e o básico de várias linguagens, como C,
        Java, PHP, mas sem aprofundar muito.
      </p>
      <p className={styles.paragrafo}>
        Passado o tempo, quando fui conhecendo mais o ecossistema das stacks, comecei a me aproximar mais do front-end, criando uma base sólida com HTML, CSS, Javascript e atualmente estou estudando a biblioteca do React e buscando desenvolver projetos significativos com essas tecnologias. Essa página é apenas um dos vários projetos que tive o prazer de desenvolver. Para conhecer mais alguns, te convido a visitar meu perfil do <a href="https://github.com/ifilky">GitHub</a> e do <a href="https://www.linkedin.com/in/ilkyandre/">Linkedin</a>.
      </p>
    </PostModelo>
  );
};

export default SobreMim;

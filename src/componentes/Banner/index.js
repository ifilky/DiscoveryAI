import styles from "./Banner.module.css";
import circuloColorido from "assets/circulo_colorido.png";
import fotoIA from "assets/IA.png";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Good Tools!</h1>
        <p className={styles.paragrafo}>
          Aqui você encontrará algumas sugestões de ferramentas de inteligência artificial que poderão lhe auxiliar no seu dia a dia, seja para fins de trabalho, estudo ou uso pessoal
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.circuloColorido}
          src={circuloColorido}
          aria-hidden={true}
          alt=""
        />

        <img
            className={styles.minhaFoto}
            src={fotoIA}
            alt="Foto IA"
        />
      </div>
    </div>
  );
};

export default Banner;

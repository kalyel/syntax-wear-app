import galeriaHomem from "@/assets/images/products/galeria-homem.jpg";
import galeriaTenisRoxo from "@/assets/images/products/galeria-roxo-verde-grid.jpg";
import galeriaTenisCinza from "@/assets/images/products/galeria-futurista-grid.jpg";
import galeriaTenisBrancoPeto from "@/assets/images/products/galeria-preto-branco-grid.jpg";
import galeriaTenisColorido from "@/assets/images/products/galeria-moderno-grid.jpg";
import galeriaModelo from "@/assets/images/products/galeria-modelo-feminino.jpg";
import styles from "./Gallery.module.css";
import { Button } from "../Button";

export const Gallery = () => {
  return (
    // Container principal da galeria
    <div className="container">
      {/* Grid da galeria, definido pelo CSS Modules */}
      <div className={styles.galleryGrid}>
        {/* Highlight - Modelo Masculino (galeria-homem.jpg) */}
        {/* Card de destaque com overlay e botões */}
        <div className={`${styles.imageCard} ${styles.highlight} relative rounded-[20px] overflow-hidden`}>
          <img
            className="w-full h-full object-cover"
            src={galeriaHomem}
            alt="Krypton One - Estilo urbano com atitude"
          />
          <div className={styles.overlay}>
            <div className={styles.textContent}>
              <p className={styles.productName}>Krypton One</p>
              <p className={styles.productDescription}>
                Estilo urbano com atitude
              </p>
            </div>
            <div className={styles.buttonGroup}>
              <Button variant="secondary">Feminino</Button>
              <Button variant="secondary">Masculino</Button>
            </div>
          </div>
        </div>

        {/* Sneaker Purple - Tênis Roxo (galeria-tenis-roxo.jpg) */}
        {/* Card do tênis roxo */}
        <div className={`${styles.imageCard} ${styles.sneakerPurple} relative rounded-[20px] overflow-hidden`}>
          <img className="w-full h-full object-cover" src={galeriaTenisRoxo} alt="Tênis Roxo" />
        </div>

        {/* Model - Modelo Feminina (galeria-modelo.jpg) */}
        {/* Card da modelo feminina */}
        <div className={`${styles.imageCard} ${styles.model} relative rounded-[20px] overflow-hidden`}>
          <img className="w-full h-full object-cover" src={galeriaModelo} alt="Modelo Feminina" />
        </div>

        {/* Sneaker Color - Tênis Colorido (galeria-tenis-colorido.jpg) */}
        {/* Card do tênis colorido */}
        <div className={`${styles.imageCard} ${styles.sneakerColor} relative rounded-[20px] overflow-hidden`}>
          <img className="w-full h-full object-cover" src={galeriaTenisColorido} alt="Tênis Colorido" />
        </div>

        {/* Sneaker White - Tênis Branco e Preto (galeria-tenis-branco-e-preto.jpg) */}
        {/* Card do tênis branco e preto */}
        <div className={`${styles.imageCard} ${styles.sneakerWhite} relative rounded-[20px] overflow-hidden`}>
          <img className="w-full h-full object-cover" src={galeriaTenisBrancoPeto} alt="Tênis Branco e Preto" />
        </div>

        {/* Sneaker Silver - Tênis Cinza (galeria-tenis-cinza.jpg) */}
        {/* Card do tênis cinza */}
        <div className={`${styles.imageCard} ${styles.sneakerSilver} relative rounded-[20px] overflow-hidden`}>
          <img className="w-full h-full object-cover" src={galeriaTenisCinza} alt="Tênis Cinza" />
        </div>
      </div>
    </div>
  );
};

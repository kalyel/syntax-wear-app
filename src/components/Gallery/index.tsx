import galeriaHomem from "@/assets/images/products/galeria-homem.jpg";
import galeriaTenisRoxo from "@/assets/images/products/galeria-roxo-verde-grid.jpg";
import galeriaTenisCinza from "@/assets/images/products/galeria-futurista-grid.jpg";
import galeriaTenisBrancoPeto from "@/assets/images/products/galeria-preto-branco-grid.jpg";
import galeriaTenisColorido from "@/assets/images/products/galeria-moderno-grid.jpg";
import galeriaModelo from "@/assets/images/products/galeria-modelo-feminino.jpg";
import styles from "./Gallery.module.css";
import { Button } from "../Button";
import { Overlay } from "../Overlay";

export const Gallery = () => {
  return (

    <div className="container">

      <div className={styles.galleryGrid}>

        <div className={`${styles.imageCard} ${styles.highlight} relative rounded-[20px] overflow-hidden`}>
          <img
            className="w-full h-full object-cover"
            src={galeriaHomem}
            alt="Krypton One - Estilo urbano com atitude"
          />
          <Overlay title="Krypton One" subtitle="Estilo urbano com atitude" className="inset-0 justify-center">
            <Button variant="secondary">Feminino</Button>
            <Button variant="secondary">Masculino</Button>
          </Overlay>
        </div>


        <div className={`${styles.imageCard} ${styles.sneakerPurple} relative rounded-[20px] overflow-hidden`}>
          <img className="w-full h-full object-cover" src={galeriaTenisRoxo} alt="Tênis Roxo" />
        </div>

        <div className={`${styles.imageCard} ${styles.model} relative rounded-[20px] overflow-hidden`}>
          <img className="w-full h-full object-cover" src={galeriaModelo} alt="Modelo Feminina" />
        </div>


        <div className={`${styles.imageCard} ${styles.sneakerColor} relative rounded-[20px] overflow-hidden`}>
          <img className="w-full h-full object-cover" src={galeriaTenisColorido} alt="Tênis Colorido" />
        </div>


        <div className={`${styles.imageCard} ${styles.sneakerWhite} relative rounded-[20px] overflow-hidden`}>
          <img className="w-full h-full object-cover" src={galeriaTenisBrancoPeto} alt="Tênis Branco e Preto" />
        </div>


        <div className={`${styles.imageCard} ${styles.sneakerSilver} relative rounded-[20px] overflow-hidden`}>
          <img className="w-full h-full object-cover" src={galeriaTenisCinza} alt="Tênis Cinza" />
        </div>
      </div>
    </div>
  );
};

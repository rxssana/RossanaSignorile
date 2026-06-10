// All site images, bundled by Vite from the web-optimized copies in
// asset/web/ (generated from the originals, max 1600px).
const assetModules = import.meta.glob("../../asset/web/*.{jpg,JPG,jpeg,JPEG,png,PNG}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

const asset = (path: string) => {
  const url = assetModules[`../../asset/web/${path}`];
  if (!url && import.meta.env.DEV) console.warn(`Missing asset: ${path}`);
  return url ?? "";
};

/**
 * Image map, matched 1:1 against the "Website-2" mockup PDF.
 */
export const siteAssets = {
  // ── Home / header sketches ────────────────────────────────
  homeStar: asset("IMG_20251013_2106422.png"),
  homeMoon: asset("IMG_20251013_210642.png"),
  homeAngel: asset("IMG_20251013_210657.png"),

  // ── Background fabric textures (from the mockup pages) ───
  textureDark: asset("photo_6014705891501870113_y.jpg"),
  textureLight: asset("photo_6014705891501870112_y.jpg"),

  // ── Shorts ────────────────────────────────────────────────
  horrorVacui: {
    poster: asset("f7c142692b-poster.jpg"),
    stills: [
      asset("Screenshot 2026-04-24 222938.png"),
      asset("Screenshot 2026-04-24 222952.png"),
      asset("Screenshot 2026-04-24 223016.png"),
    ],
  },
  witchesDream: {
    feature: asset("WhatsApp Image 2025-05-09 at 19.46.21 2.jpg"),
    stills: [
      asset("WhatsApp Image 2025-05-09 at 19.46.20 (3).jpeg"),
      asset("WhatsApp Image 2025-05-09 at 19.46.22.jpeg"),
    ],
  },
  uneVague: {
    poster: asset("locandina idea.jpg"),
    stills: [
      asset("Sequenza 01.00_37_41_21.Immagine033.jpg"),
      asset("Sequenza 01.00_19_38_04.Immagine042.jpg"),
      asset("Sequenza 01.00_27_57_07.Immagine028.jpg"),
    ],
  },
  mnemosine: {
    poster: asset("poster2.jpg"),
    stills: [
      asset("Still 2025-11-29 200443_1.12.1.jpg"),
      asset("Still 2025-11-29 200443_1.43.1.jpg"),
      asset("Still 2025-11-29 200443_1.17.1.jpg"),
    ],
  },
  angeloSterminatore: {
    poster: asset("locandina angelo sterminatore.jpg"),
    stills: [
      asset("Still 2026-04-08 002351_2.131.6.jpg"),
      asset("Still 2026-04-08 002351_2.118.2.jpg"),
      asset("Still 2026-04-08 002351_2.145.3.jpg"),
    ],
  },
  biffiEBaffi: {
    stills: [
      asset("_FHD2036.jpg"),
      asset("_FHD4875.jpg"),
      asset("_FHD2554.jpg"),
      asset("_FHD3321.jpg"),
      asset("_FHD4688.jpg"),
    ],
  },

  // ── Music videos ──────────────────────────────────────────
  forseUnGiorno: {
    title: asset("Screenshot 2026-04-22 233006.png"),
    stills: [
      asset("Still 2025-12-10 202043_1.1.16.jpg"),
      asset("Still 2025-12-10 202043_1.2.3.jpg"),
      asset("Still 2025-12-10 202043_1.1.13.jpg"),
    ],
  },
  handycamVideo: {
    stills: [
      asset("M2U00482.00_24_10_20.Immagine035.jpg"),
      asset("M2U00482.00_32_40_00.Immagine047.jpg"),
      asset("M2U00482.00_27_56_02.Immagine040.jpg"),
    ],
  },
  magma: {
    title: asset("Screenshot 2026-04-22 233415.png"),
    stills: [
      asset("Still 2026-04-08 002351_2.79.3.jpg"),
      asset("Still 2026-04-08 002351_2.139.2.jpg"),
      asset("Still 2026-04-08 002351_2.149.4.jpg"),
    ],
  },

  // ── Performance ───────────────────────────────────────────
  ballad: {
    poster: asset("photo_5886220544678937890_y.jpg"),
    masks: asset("_FHD6251.JPG"),
    stills: [
      asset("2 (1) (2).jpg"),
      asset("DSCF0908.JPG"),
      asset("photo_5855028026864160295_y.jpg"),
      asset("Sequenza 01.00_11_16_08.Immagine006 (1).jpg"),
      asset("photo_5855028026864160297_y.jpg"),
    ],
  },
  indagine: [
    asset("C0001.00_15_12_22.Immagine010.jpg"),
    asset("918d36c7-a349-412d-b14a-9a9d84bcf91f.jpg"),
    asset("6fcd199e-2e57-4279-9574-c562570b98c6.jpg"),
  ],
  butoh: [asset("Photo2252.jpg"), asset("Photo2254.jpg")],
  innereAuge: [asset("_FHD7700.jpg"), asset("DSC08968.jpg")],
  asterion: [asset("photo_5427319322218009430_y.jpg"), asset("DSC08966.jpg")],

  // ── About ─────────────────────────────────────────────────
  aboutPortrait: asset("Still 2026-03-17 220424_1.30.1.jpg"),
  aboutWorking: asset("Roll1_00000030.JPG"),
  aboutFlower: asset("IMG_20251028_144429.jpg"),
  aboutDarkFlower: asset("Photo2279.jpg"),

  // ── Prints / Links ────────────────────────────────────────
  zine: [
    asset("M2U00538.00_00_06_03.Immagine002.jpg"),
    asset("M2U00538.00_01_04_03.Immagine009.jpg"),
    asset("M2U00538.00_00_50_18.Immagine007.jpg"),
  ],
};

/**
 * Birdland works — browsed through a thirdworlds.net-style folder index.
 */
export interface BirdlandWork {
  folder: string;
  title: string;
  description: string;
  images: string[];
}

export const birdlandWorks: BirdlandWork[] = [
  {
    folder: "01_called_or_uncalled",
    title: "1. Called or uncalled, the divine will be present.",
    description:
      "Il vento ha operato in segretezza, con le ali frantumate, dove nulla chiude gli occhi al buio. Il tessuto si lascia modellare, assorbe le memorie, un canto antico che ha un'attenzione diversa, interna. Un'attenzione capace di trasformare, poi, la materia. Il processo alchemico della trasmutazione della materia è lo specchio della trasformazione interna. I materiali ruvidi vivono delle loro ombre, la cartapesta assume le sembianze di una massa viva informe, che contiene i germi divini di vita. — Project inside the exhibit Sincroniche Anomalie, with Aurora Bini and band Gat Osken, February 2026, at Arci Magma, Rome. Materials: papier maché, bed sheets, black wax, acrylics, charcoal, oil pastels, oil chalks.",
    images: [
      "_DSC0318.jpg",
      "_FHD7501.JPG",
      "_FHD7494.JPG",
      "0006_6A.jpg",
      "0007_7A.jpg",
      "0008_8A.jpg",
      "0009_9A.jpg",
      "0010_10A.jpg",
      "0011_11A.jpg",
      "_DSC0310.jpg",
      "_DSC0314.jpg",
      "_DSC0315.jpg",
      "_DSC0316.jpg",
      "_DSC0317.jpg",
      "_DSC0324.jpg",
      "_DSC0325.jpg",
      "_DSC0326.jpg",
      "_DSC0329.jpg",
      "_DSC0330.jpg",
      "_DSC0331.jpg",
      "_DSC0332.jpg",
      "_DSC0333.jpg",
      "_DSC0334.jpg",
      "_FHD7506.JPG",
      "_FHD7823.JPG",
      "_DSC0340.jpg",
      "_DSC0341.jpg",
      "_DSC0342.jpg",
      "_DSC0343.jpg",
      "_DSC0344.jpg",
      "_DSC0345.jpg",
      "_DSC0347.jpg",
      "_DSC0348.jpg",
    ],
  },
  {
    folder: "01b_teli_sonori",
    title: "Teli sonori",
    description:
      "Some painted sheets used during the performance Innere Auge, in the Sincroniche Anomalie event. The performance was made by Andrea Donvito and his percussions and Rossana Signorile as the moving body. The black and blue one had contact mics attached to it so it made noise if touched, while the long one made noise simply when being shaken, due to the wood and objects attached to it.",
    images: ["_DSC0322.jpg", "photo_5915655428732209032_y2.jpg"],
  },
  {
    folder: "02_every_bird_dies_by_its_own_song",
    title: "2. Every bird dies by its own song",
    description:
      "Exhibited in Oblò121, in Rome, in April. 'In the woods there is a bird; his song stops you and makes you blush.' [Rimbaud] Birds experience the sounds of the universe without interrupting it with matter. They die with their birdsongs. Humans live by metaphors, they have to imitate and create something from outside of them. They are always aware of the becoming of things, they are aware of death. The concept was creating a space with two different angles: the angle of silence, where bells were made of wax and therefore could not ring, and the angle of human noise, where Damiano Tata had a sound performance using organ pipes.",
    images: [
      "_FHD8010.JPG",
      "_FHD8002.JPG",
      "_FHD8016.JPG",
      "_FHD8017.JPG",
      "_FHD8037.JPG",
      "_FHD8039.JPG",
      "_FHD8041.JPG",
      "_FHD8043.JPG",
      "_FHD8007.JPG",
      "_FHD7923.JPG",
      "_FHD7996.JPG",
      "_FHD8001.JPG",
    ],
  },
  {
    folder: "03_birdland_magic_box",
    title: "3. Birdland Magic Box",
    description:
      "A sort of noise box made of copper paper. It contains objects inside and a string made with my hair, it makes noise when connected to a mic.",
    images: [
      "_FHD7949.JPG",
      "_FHD7935.JPG",
      "_FHD7943.JPG",
      "_FHD7955.JPG",
      "_FHD7958.JPG",
      "_FHD7957.JPG",
      "_FHD7961.JPG",
      "_FHD7964.JPG",
      "_FHD7828.JPG",
    ],
  },
  {
    folder: "04_birdthatcannotsing",
    title: "4. Birdthatcannotsing",
    description:
      "A bird that cannot sing becomes a hummingbird, with its wings so light, barely noticeable, but a beauty so loud and a beak so long that it sings with its presence. Illustrations and other creations. Materials: acrylics, oil pastels, charcoal.",
    images: [
      "camaleonte stellato.jpg",
      "ADE.jpg",
      "_DSC6516.jpg",
      "0033_moth.jpg",
      "0024-home.jpg",
      "0024_unicorn.jpg",
      "collage didyrovi.jpg",
      "photo_5944894556766062962_y.jpg",
      "photo_5769566269392144029_y.jpg",
      "photo_5886220544678937876_y.jpg",
      "photo_5886220544678937883_y.jpg",
      "photo_5886220544678937891_y.jpg",
      "IMG_20260329_115806-2.jpg",
      "IMG_20260329_115823.jpg",
      "IMG_20260329_115534_2.jpg",
      "Senza titolo-1.jpg",
      "IMG_20251013_211750.jpg",
      "0026_26Amodif.jpg",
      "_DSC0354.jpg",
      "_DSC0355.jpg",
      "_DSC0358.jpg",
    ],
  },
  {
    folder: "05_theatre_of_the_starving_angel",
    title: "5. Theatre of the starving angel",
    description:
      "A theater made of wood, which contains some creatures made of mud, wood pieces, and other magical objects. The walls are changeable and there's a long stair coming out of the theatre. The theatre folds like a box, to be carried everywhere.",
    images: ["_DSC0360.jpg", "_FHD7967.JPG", "_FHD7982.JPG", "_FHD7983.JPG"],
  },
  {
    folder: "06_puppets_wip",
    title: "6. Puppets (work in progress)",
    description: "Begia and Samhain.",
    images: ["0004_4A.jpg", "0005_5A.jpg"],
  },
  {
    folder: "07_appeso_attesa_wip",
    title: "7. Appeso, attesa (work in progress)",
    description: "",
    images: ["_FHD7825.JPG", "_FHD7908.JPG", "_FHD7612.JPG"],
  },
  {
    folder: "08_cipa_nonpa_cipi",
    title: "8. Cipa, nonpa, cipi, nonpa, cipi — non partecipi alla danza?",
    description: "",
    images: ["_FHD7984.JPG", "_FHD7988.JPG"],
  },
  {
    folder: "09_uno_studio_sull_impermanenza",
    title: "9. Uno studio sull' Impermanenza",
    description: "",
    images: [
      "_DSC0346.jpg",
      "_DSC0350.jpg",
      "photo_6014705891501870112_y.jpg",
      "photo_6014705891501870113_y.jpg",
    ],
  },
];

export const birdlandAsset = asset;

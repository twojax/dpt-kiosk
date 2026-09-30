// All copy, asset paths and positions live here so the screens can be
// updated without touching component code.
// Coordinates are in stage pixels (1920 × 1080), measured from the comp.

export interface Rect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Hub {
  cx: number;
  cy: number;
  photoRadius: number;
  arcRadius: number;
  /** The dashed arc runs from -arcSpan° to +arcSpan°. */
  arcSpan: number;
  photo: string;
}

export interface Section {
  id: string;
  label: string;
  /** Panel heading. Omit for panels that are just body text and an image. */
  title?: string;
  /** A paragraph, or an array of strings for a bulleted list. */
  body: string | string[];
  image: string;
  imageAlt: string;
  /** Angle of this node on the dashed arc, in degrees (0 = straight right). */
  nodeAngle: number;
  /** Top-left corner of the hex button; width defaults to PILL.width. */
  pill: { x: number; y: number; width?: number };
  /** Overrides the page's panel top so this button's connector meets the panel. */
  panelY?: number;
}

export interface HubPage {
  id: string;
  title: string;
  hub: Hub;
  /** Leave out height to size the panel to its text plus a 3:2 image.
   *  Sections without a title always size this way. */
  panel: Omit<Rect, "height"> & { height?: number };
  sections: Section[];
}

export type Screen =
  | "home"
  | "corporateOverview"
  | "development"
  | "semiSolids"
  | "liquids"
  | "aerosols"
  | "analytics"
  | "commercialSupply";

export const STAGE = { width: 1920, height: 1080 };

export const BACKGROUND = "./assets/bg-bubbles.jpg";

export const LOGO = {
  small: "./assets/viatris-logo-small.png",
  large: "./assets/viatris-logo-large.png",
};

const HUB_SIZE = { photoRadius: 214, arcRadius: 266, arcSpan: 88 };

export const PILL = { width: 344, height: 68, tip: 22 };

export const IDLE_TIMEOUT_MS = 90_000;

export type OverviewIcon =
  | "microscope"
  | "gears"
  | "handshake"
  | "people"
  | "growth"
  | "network"
  | "viatris"
  | "products"
  | "customers"
  | "facilities";

export interface Milestone {
  year: string;
  /** Bold lead line(s); "\n" forces a line break. */
  title: string;
  detail?: string;
  icon: OverviewIcon;
  /** Centre of the node, year and card. */
  x: number;
  cardWidth: number;
}

export interface Stat {
  value: string;
  /** "\n" forces a line break. */
  label: string;
  icon: OverviewIcon;
  /** Left edge of the icon circle. */
  x: number;
  small?: boolean;
}

export const CORPORATE_OVERVIEW = {
  title: "Corporate Overview",
  timeline: { lineY: 392, nodeSize: 112, yearY: 463, cardY: 510, cardHeight: 122 },
  milestones: [
    { year: "1938", icon: "microscope", title: "Founded as\nTexas Pharmacal\nCompany", detail: "(San Antonio, TX)", x: 191, cardWidth: 191 },
    { year: "1966", icon: "gears", title: "Acquired by\nWarner-Lambert", x: 423, cardWidth: 180 },
    { year: "1979", icon: "handshake", title: "Contract\nManufacturing\nBegins", detail: "(Acquired by Alcon)", x: 655, cardWidth: 201 },
    { year: "1990", icon: "people", title: "DPT Laboratories\nEstablished", detail: "(Acquired by DFB\nPharmaceuticals)", x: 903, cardWidth: 201 },
    { year: "2012", icon: "growth", title: "Expansion of\nCommercial Capabilities", detail: "(Acquired by Renaissance)", x: 1172, cardWidth: 253 },
    { year: "2016", icon: "network", title: "Integration into a\nGlobal Pharmaceutical\nOrganization", detail: "(Acquired by Mylan Inc.)", x: 1472, cardWidth: 261 },
    { year: "2020", icon: "viatris", title: "Part of Viatris", detail: "A stronger future\nfor patients\nworldwide", x: 1734, cardWidth: 173 },
  ] satisfies Milestone[],
  stats: {
    bar: { x: 96, y: 679, width: 1723, height: 191 },
    iconSize: 114,
    /** Vertical divider lines, in stage x. */
    dividers: [536, 949, 1397],
    items: [
      { value: "500+", label: "Products\nCommercialized", icon: "products", x: 134 },
      { value: "40+", label: "Commercial\nCustomers", icon: "customers", x: 576 },
      { value: "506,978", label: "sq ft of Integrated\nDevelopment &\nManufacturing Campus", icon: "microscope", x: 992, small: true },
      { value: "5", label: "Specialized\nFacilities", icon: "facilities", x: 1437 },
    ] satisfies Stat[],
  },
};

export const HOME = {
  headline:
    "A leading CDMO at the forefront of semi-solid, liquid, and aerosol dosage forms since 1938",
  /** First card's top-left; the rest follow at width + gap. */
  cards: { x: 111, y: 484, width: 258, height: 324, gap: 30 },
  sections: [
    { screen: "development", label: "Development", image: "./assets/home/development.jpg" },
    { screen: "semiSolids", label: "Semi-Solids", image: "./assets/home/semi-solids.jpg" },
    { screen: "liquids", label: "Liquids", image: "./assets/home/liquids.jpg" },
    { screen: "aerosols", label: "Aerosols", image: "./assets/home/aerosols.jpg" },
    { screen: "analytics", label: "Analytics", image: "./assets/home/analytics.jpg" },
    { screen: "commercialSupply", label: "Commercial Supply", image: "./assets/home/commercial-supply.jpg" },
  ] satisfies { screen: Screen; label: string; image: string }[],
  overview: { label: "Corporate Overview", x: 670, y: 882, width: 577, height: 77 },
};

export const development: HubPage = {
  id: "development",
  title: "Development",
  hub: { ...HUB_SIZE, cx: 335, cy: 589, photo: "./assets/development/hub.jpg" },
  panel: { x: 1236, y: 223, width: 564, height: 724 },
  sections: [
    {
      id: "formulations",
      label: "Formulations",
      title: "Formulation expertise across complex dosage forms",
      body: "DPT develops complex semi-solid, liquid, and aerosol formulations including creams, emulsions, gels, lotions, ointments, solutions, suspensions, foams, and sprays. Capabilities support topical, transdermal, oral, nasal, vaginal, and rectal products.",
      image: "./assets/development/formulations.jpg",
      imageAlt:
        "Scientist recording results beside cream and liquid samples in a lab",
      nodeAngle: -42,
      pill: { x: 715, y: 298 },
    },
    {
      id: "analytical",
      label: "Analytical",
      title: "Integrated Analytical Development & Validation",
      body: "Analytical services include method development, assessment, validation, transfer, stability testing, chromatography, spectroscopy, diffusion studies, particle size analysis, and in vitro release testing expertise.",
      image: "./assets/development/analytical.jpg",
      imageAlt: "",
      nodeAngle: 0,
      pill: { x: 793, y: 555 },
    },
    {
      id: "scaleUp",
      label: "Scale-Up",
      title: "From Development to Commercial Manufacturing",
      body: "Development services support pre-formulation, formulation development, process development, process validation, technology transfer, clinical trial material manufacturing, and Quality by Design (QbD) approaches.",
      image: "./assets/development/scale-up.jpg",
      imageAlt: "",
      nodeAngle: 42,
      pill: { x: 715, y: 802 },
    },
  ],
};

export const semiSolids: HubPage = {
  id: "semiSolids",
  title: "Semi-Solids",
  hub: { ...HUB_SIZE, cx: 365, cy: 598, photo: "./assets/semi-solids/hub.jpg" },
  panel: { x: 1264, y: 232, width: 532 },
  sections: [
    {
      id: "creams",
      label: "Creams",
      body: "Development and manufacturing of cream formulations from pilot through commercial scale production.",
      image: "./assets/semi-solids/creams.jpg",
      imageAlt: "",
      nodeAngle: -52,
      pill: { x: 710, y: 272 },
    },
    {
      id: "ointments",
      label: "Ointments",
      body: "Expertise in ointment formulation, compounding, fill-finish, and commercial manufacturing.",
      image: "./assets/semi-solids/ointments.jpg",
      imageAlt: "",
      nodeAngle: -20,
      pill: { x: 812, y: 473 },
    },
    {
      id: "gels",
      label: "Gels",
      body: "Development and production of gel products supported by formulation, analytical, and manufacturing capabilities.",
      image: "./assets/semi-solids/gels.jpg",
      imageAlt: "",
      nodeAngle: 20,
      pill: { x: 812, y: 655 },
      panelY: 430,
    },
    {
      id: "pastes",
      label: "Pastes",
      body: "Specialized compounding and manufacturing expertise for high-viscosity semi-solid products. Supported by batch sizes from 0.3 kg to 25,000 kg.",
      image: "./assets/semi-solids/pastes.jpg",
      imageAlt: "",
      nodeAngle: 52,
      pill: { x: 710, y: 846 },
      panelY: 430,
    },
  ],
};

export const liquids: HubPage = {
  id: "liquids",
  title: "Liquids",
  hub: { ...HUB_SIZE, cx: 350, cy: 590, photo: "./assets/liquids/hub.jpg" },
  panel: { x: 1242, y: 204, width: 554 },
  sections: [
    {
      id: "solutions",
      label: "Solutions",
      body: "Development and manufacturing of solution-based products supported by pilot, clinical, and commercial-scale operations.",
      image: "./assets/liquids/solutions.jpg",
      imageAlt: "",
      nodeAngle: -62,
      pill: { x: 655, y: 251 },
    },
    {
      id: "suspensions",
      label: "Suspensions",
      body: "Suspension formulation and manufacturing supported by advanced compounding and analytical testing capabilities.",
      image: "./assets/liquids/suspensions.jpg",
      imageAlt: "",
      nodeAngle: -34,
      pill: { x: 760, y: 407 },
    },
    {
      id: "syrups",
      label: "Syrups",
      body: "Oral liquid development and manufacturing from clinical supply through commercial launch.",
      image: "./assets/liquids/syrups.jpg",
      imageAlt: "",
      nodeAngle: 0,
      pill: { x: 806, y: 556 },
    },
    {
      id: "drops",
      label: "Drops",
      body: "Liquid dosage form development supported by precision fill-finish operations and analytical testing.",
      image: "./assets/liquids/drops.jpg",
      imageAlt: "",
      nodeAngle: 34,
      pill: { x: 760, y: 705 },
      panelY: 430,
    },
    {
      id: "nasalSprays",
      label: "Nasal Sprays",
      body: "Formulation and manufacturing support for nasal dosage forms utilizing DPT's spray development expertise.",
      image: "./assets/liquids/nasal-sprays.jpg",
      imageAlt: "",
      nodeAngle: 62,
      pill: { x: 655, y: 854 },
      panelY: 430,
    },
  ],
};

export const aerosols: HubPage = {
  id: "aerosols",
  title: "Aerosols",
  hub: { ...HUB_SIZE, cx: 321, cy: 589, photo: "./assets/aerosols/hub.jpg" },
  panel: { x: 1246, y: 186, width: 564, height: 715 },
  sections: [
    {
      id: "meteredDose",
      label: "Metered Dose",
      title: "Specialized Aerosol Manufacturing",
      body: "Dedicated aerosol filling capabilities support development and commercial manufacturing of aerosol dosage forms. DPT operates a dedicated aerosol manufacturing facility in San Antonio, TX.",
      image: "./assets/aerosols/metered-dose.jpg",
      imageAlt: "",
      nodeAngle: -42,
      pill: { x: 701, y: 298 },
    },
    {
      id: "foams",
      label: "Foams",
      body: "Development and manufacturing of foam products supported by formulation expertise and aerosol filling capabilities.",
      image: "./assets/aerosols/foams.jpg",
      imageAlt: "",
      nodeAngle: 0,
      pill: { x: 779, y: 555 },
    },
    {
      id: "topicalSprays",
      label: "Topical Sprays",
      body: "Topical spray development and manufacturing supported by aerosol filling and commercial-scale operations.",
      image: "./assets/aerosols/topical-sprays.jpg",
      imageAlt: "",
      nodeAngle: 42,
      pill: { x: 701, y: 802 },
      panelY: 430,
    },
  ],
};

export const analytics: HubPage = {
  id: "analytics",
  title: "Analytics",
  hub: { ...HUB_SIZE, cx: 308, cy: 604, photo: "./assets/analytics/hub.jpg" },
  panel: { x: 1214, y: 249, width: 600 },
  sections: [
    {
      id: "stabilityTesting",
      label: "Stability Testing",
      body: [
        "ICH and custom stability studies",
        "Accelerated and long-term studies",
        "Physical, chemical, and microbiological testing",
        "Photostability and freeze/thaw studies",
      ],
      image: "./assets/analytics/stability-testing.jpg",
      imageAlt: "",
      nodeAngle: -42,
      pill: { x: 683, y: 317 },
    },
    {
      id: "microbiologyTesting",
      label: "Microbiology Testing",
      body: [
        "Microbial limits testing",
        "Antimicrobial effectiveness testing (AET)",
        "Water testing",
        "Environmental monitoring",
      ],
      image: "./assets/analytics/microbiology-testing.jpg",
      imageAlt: "",
      nodeAngle: 0,
      pill: { x: 726, y: 570, width: 382 },
    },
    {
      id: "analyticalTesting",
      label: "Analytical Testing",
      body: [
        "Method development and validation",
        "Gas and liquid chromatography",
        "Spectroscopy",
        "Diffusion studies",
        "In vitro release testing",
        "Method transfer support",
      ],
      image: "./assets/analytics/analytical-testing.jpg",
      imageAlt: "",
      nodeAngle: 42,
      pill: { x: 683, y: 819 },
      panelY: 290,
    },
  ],
};

export const commercialSupply: HubPage = {
  id: "commercialSupply",
  title: "Commercial Supply",
  hub: {
    ...HUB_SIZE,
    cx: 357,
    cy: 632,
    photo: "./assets/commercial-supply/hub.jpg",
  },
  panel: { x: 1284, y: 242, width: 532 },
  sections: [
    {
      id: "packaging",
      label: "Packaging",
      body: "Packaging capabilities include bottles, jars, tubes, airless pumps, metered-dose pumps, aluminum canisters, and applicator-based systems.",
      image: "./assets/commercial-supply/packaging.jpg",
      imageAlt: "",
      nodeAngle: -51,
      pill: { x: 697, y: 313 },
    },
    {
      id: "commercialManufacturing",
      label: "Commercial Manufacturing",
      body: "Commercial operations support finished product packaging and serialization readiness for global markets.",
      image: "./assets/commercial-supply/commercial-manufacturing.jpg",
      imageAlt: "",
      nodeAngle: -19,
      pill: { x: 733, y: 511, width: 482 },
    },
    {
      id: "warehouseDistribution",
      label: "Warehouse & Distribution",
      body: "DPT supports regulated pharmaceutical supply through quality systems and commercial launch capabilities.",
      image: "./assets/commercial-supply/warehouse-and-distribution.jpg",
      imageAlt: "",
      nodeAngle: 19,
      pill: { x: 733, y: 685, width: 482 },
      panelY: 300,
    },
    {
      id: "commercialSupply",
      label: "Commercial Supply",
      body: "Dedicated commercial supply teams support launch coordination, ongoing commercialization, and repeatable replenishment supply.",
      image: "./assets/commercial-supply/commercial-supply.jpg",
      imageAlt: "",
      nodeAngle: 51,
      pill: { x: 697, y: 874 },
      panelY: 460,
    },
  ],
};

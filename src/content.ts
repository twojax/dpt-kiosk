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
  body: string;
  image: string;
  imageAlt: string;
  /** Angle of this node on the dashed arc, in degrees (0 = straight right). */
  nodeAngle: number;
  /** Top-left corner of the hex button. */
  pill: { x: number; y: number };
  /** Overrides the page's panel top so this button's connector meets the panel. */
  panelY?: number;
}

export interface HubPage {
  title: string;
  hub: Hub;
  /** Leave out height to size the panel to its text plus a 3:2 image. */
  panel: Omit<Rect, "height"> & { height?: number };
  sections: Section[];
}

export const STAGE = { width: 1920, height: 1080 };

export const BACKGROUND = "./assets/bg-bubbles.jpg";

export const LOGO = {
  small: "./assets/viatris-logo-small.png",
  large: "./assets/viatris-logo-large.png",
};

const HUB_SIZE = { photoRadius: 214, arcRadius: 266, arcSpan: 88 };

export const PILL = { width: 344, height: 68, tip: 22 };

export const IDLE_TIMEOUT_MS = 90_000;

export const development: HubPage = {
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
  title: "Semi-Solids",
  hub: { ...HUB_SIZE, cx: 365, cy: 598, photo: "./assets/semi-solids/hub.jpg" },
  panel: { x: 1264, y: 232, width: 500 },
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

// All copy, asset paths and positions live here so the screen can be
// updated without touching component code.
// Coordinates are in stage pixels (1920 × 1080), measured from the comp.

export type SectionId = "formulations" | "analytical" | "scaleUp";

export interface Section {
  id: SectionId;
  label: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  /** Angle of this node on the dashed arc, in degrees (0 = straight right). */
  nodeAngle: number;
  /** Top-left corner of the hex button. */
  pill: { x: number; y: number };
}

export const STAGE = { width: 1920, height: 1080 };

export const BACKGROUND = "./assets/bg-bubbles.jpg";

export const LOGO = {
  small: "./assets/viatris-logo-small.png",
  large: "./assets/viatris-logo-large.png",
};

export const HUB = {
  cx: 335,
  cy: 589,
  photoRadius: 214,
  arcRadius: 266,
  arcSpan: 88, // arc runs from -88° to +88°
  photo: "./assets/development/hub.jpg",
};

export const PILL = { width: 344, height: 68, tip: 22 };

export const PANEL = { x: 1236, y: 223, width: 564, height: 724 };

export const IDLE_TIMEOUT_MS = 90_000;

export const sections: Section[] = [
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
];

 // Single source of truth for every service location.

// NAP (name / address / phone) consistency matters for local SEO, so all
// metadata, JSON-LD and sitemap code must read city data from here.

// Order matters: the first entry is the primary SEO focus city.

export const validLocations = [
  "gurugram",
  "delhi-ncr",
  "noida",
] as const;

export const locationData = {
  gurugram: {
    areas: [
      "Sector 14",
      "Sector 15",
      "Sector 29",
      "Sector 31",
      "Sector 32",
      "Sector 33",
      "Sector 40",
      "Sector 43",
      "Sector 45",
      "Sector 46",
      "Sector 49",
      "Sector 50",
      "Sector 54",
      "Sector 55",
      "Sector 56",
      "Golf Course Road",
      "Sohna Road",
      "DLF Phase 1",
      "DLF Phase 2",
      "DLF Phase 3",
      "DLF Phase 4",
      "DLF Phase 5",
    ],

    // Short list used in meta descriptions, where length is at a premium.
    primaryAreas: [
      "Sector 33",
      "Golf Course Road",
      "Sohna Road",
      "DLF Phase 1",
      "DLF Phase 4",
    ],

    description:
      "Professional invisible grill and safety net services across Gurugram and major residential and commercial areas",

    state: "Haryana",

    priority: 1.0,

    latitude: 28.4595,

    longitude: 77.0266,

    name: "Gurugram",

    streetAddress:
      "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33",

    postalCode: "122004",
  },

  "delhi-ncr": {
    areas: [
      "South Delhi",
      "Dwarka",
      "Rohini",
      "Pitampura",
      "Janakpuri",
      "Vasant Kunj",
      "Saket",
      "Greater Kailash",
      "Lajpat Nagar",
      "Mayur Vihar",
      "Preet Vihar",
      "Shahdara",
      "Vasant Vihar",
      "Karol Bagh",
      "Rajouri Garden",
      "Uttam Nagar",
      "Paschim Vihar",
      "Model Town",
    ],

    primaryAreas: [
      "Dwarka",
      "Vasant Kunj",
      "Saket",
      "Greater Kailash",
      "Rohini",
    ],

    description:
      "Invisible grills, safety nets, pigeon nets and balcony protection services across Delhi NCR",

    state: "Delhi",

    priority: 0.95,

    latitude: 28.6139,

    longitude: 77.209,

    name: "Delhi NCR",

    streetAddress:
      "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33, Gurugram",

    postalCode: "122004",
  },

  noida: {
    areas: [
      "Sector 15",
      "Sector 16",
      "Sector 18",
      "Sector 27",
      "Sector 28",
      "Sector 29",
      "Sector 37",
      "Sector 41",
      "Sector 44",
      "Sector 50",
      "Sector 51",
      "Sector 52",
      "Sector 61",
      "Sector 62",
      "Sector 74",
      "Sector 75",
      "Sector 76",
      "Sector 77",
      "Sector 78",
      "Sector 79",
      "Sector 93",
      "Sector 137",
      "Sector 143",
      "Greater Noida",
    ],

    primaryAreas: [
      "Sector 18",
      "Sector 50",
      "Sector 62",
      "Sector 74",
      "Sector 137",
    ],

    description:
      "Professional invisible grill, safety net, pigeon net and balcony protection services across Noida and Greater Noida",

    state: "Uttar Pradesh",

    priority: 0.95,

    latitude: 28.5355,

    longitude: 77.391,

    name: "Noida",

    streetAddress:
      "Rajeev Chowk, near Jain Complex, Hans Enclave, Sector 33, Gurugram",

    postalCode: "122004",
  },
} as const;

export type LocationSlug = (typeof validLocations)[number];

// The city the site leads with in titles, descriptions and schema.
export const PRIMARY_LOCATION_SLUG: LocationSlug = "gurugram";

export const PRIMARY_LOCATION = locationData[PRIMARY_LOCATION_SLUG];

// Ordered city list for copy such as "Gurugram, Delhi NCR, Noida".
export const LOCATION_NAMES = validLocations.map(
  (slug) => locationData[slug].name,
);
// Standardized center/campus data for all forms
export const CENTERS = [
  {
    id: "delhi",
    name: "Saket, Delhi",
    displayName: "Saket, Delhi",
    address: "Plot No. 123, Saket, New Delhi-110017, Delhi, India",
    directionsUrl: "https://maps.google.com/?q=Saket+New+Delhi+110017"
  }
  ,
  {
    id: "kalkaji",
    name: "Kalkaji, Delhi",
    displayName: "Kalkaji, Delhi",
    address: "Near Kalkaji Mandir Metro Station, Kalkaji, New Delhi-110019, Delhi, India",
    directionsUrl: "https://maps.google.com/?q=Kalkaji+Mandir+Metro+Station+New+Delhi+110019"
  }
];

// Simple list of center IDs for dropdowns
export const CENTER_OPTIONS = CENTERS.map(center => ({ value: center.id, label: center.displayName }));

// Get center details by ID
export const getCenterById = (id: string) => {
  return CENTERS.find(center => center.id === id);
};

// Get display name by ID
export const getCenterDisplayName = (id: string) => {
  const center = getCenterById(id);
  return center ? center.displayName : id;
};

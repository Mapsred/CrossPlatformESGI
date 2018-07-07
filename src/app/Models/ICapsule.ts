export interface ICapsule {
  id: string;
  name: string;
  type: string;
  active: boolean;
  crew_capacity: number;
  sidewall_angle_deg: number;
  orbit_duration_yr: number;
  heat_shield: Heatshield;
  thrusters: Thruster[];
  launch_payload_mass: Launchpayloadmass;
  launch_payload_vol: Launchpayloadvol;
  return_payload_mass: Launchpayloadmass;
  return_payload_vol: Launchpayloadvol;
  pressurized_capsule: Pressurizedcapsule;
  trunk: Trunk;
  height_w_trunk: Heightwtrunk;
  diameter: Heightwtrunk;
}

interface Heightwtrunk {
  meters: number;
  feet: number;
}

interface Trunk {
  trunk_volume: Launchpayloadvol;
  cargo: Cargo;
}

interface Cargo {
  solar_array: number;
  unpressurized_cargo: boolean;
}

interface Pressurizedcapsule {
  payload_volume: Launchpayloadvol;
}

interface Launchpayloadvol {
  cubic_meters: number;
  cubic_feet: number;
}

interface Launchpayloadmass {
  kg: number;
  lb: number;
}

interface Thruster {
  type: string;
  amount: number;
  pods: number;
  fuel_1: string;
  fuel_2: string;
  thrust: Thrust;
}

interface Thrust {
  kN: number;
  lbf: number;
}

interface Heatshield {
  material: string;
  size_meters: number;
  temp_degrees: number;
  dev_partner: string;
}

interface ICapsuleDetails {
  capsule_serial: string;
  capsule_id: string;
  status: string;
  original_launch?: string;
  original_launch_unix?: number;
  missions: string[];
  landings: number;
  type: string;
  details?: string;
}

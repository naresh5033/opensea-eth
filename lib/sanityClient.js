import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: 'pewt5o6c',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skMqa4ZftjgK1WA2vLI4xhCMBVSBdXdVjXxw6D5Pja0eTIc3iz7gcVi9XDfSkJIe7XF4J8lTQFXF9TOM6T8fIilT2RC37bDMC8rt4F8uTEtx5P83e2N5Pbw3duPKyiDltZtdKlkeNWZ00lhQRiTCWAUQ9nph7cRAqXF5GMSJ3pyNgxH0A0ao',
  useCdn: false,
})

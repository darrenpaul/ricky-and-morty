export default interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: OriginInfo
  location: LocationInfo
  image: string
  episode: string[]
  url: string
  created: string
}

interface OriginInfo {
  name: string
  url: string
}

interface LocationInfo {
  name: string
  url: string
}

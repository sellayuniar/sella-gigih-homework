export interface Response {
    album: Album
    artists: Artist2[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds
    external_urls: ExternalUrls4
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom
    restrictions: Restrictions27
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls
    href: string
    id: string
    images: Image[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions
    type: string
    uri: string
    album_group: string
    artists: Artist[]
  }
  
  export interface ExternalUrls {
    spotify: string
  }
  
  export interface Image {
    url: string
    height: number
    width: number
  }
  
  export interface Restrictions {
    reason: string
  }
  
  export interface Artist {
    external_urls: ExternalUrls2
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls2 {
    spotify: string
  }
  
  export interface Artist2 {
    external_urls: ExternalUrls3
    followers: Followers
    genres: string[]
    href: string
    id: string
    images: Image2[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls3 {
    spotify: string
  }
  
  export interface Followers {
    href: string
    total: number
  }
  
  export interface Image2 {
    url: string
    height: number
    width: number
  }
  
  export interface ExternalIds {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls4 {
    spotify: string
  }
  
  export interface LinkedFrom {
    album: Album2
    artists: Artist4[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds2
    external_urls: ExternalUrls8
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom2
    restrictions: Restrictions26
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album2 {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls5
    href: string
    id: string
    images: Image3[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions2
    type: string
    uri: string
    album_group: string
    artists: Artist3[]
  }
  
  export interface ExternalUrls5 {
    spotify: string
  }
  
  export interface Image3 {
    url: string
    height: number
    width: number
  }
  
  export interface Restrictions2 {
    reason: string
  }
  
  export interface Artist3 {
    external_urls: ExternalUrls6
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls6 {
    spotify: string
  }
  
  export interface Artist4 {
    external_urls: ExternalUrls7
    followers: Followers2
    genres: string[]
    href: string
    id: string
    images: Image4[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls7 {
    spotify: string
  }
  
  export interface Followers2 {
    href: string
    total: number
  }
  
  export interface Image4 {
    url: string
    height: number
    width: number
  }
  
  export interface ExternalIds2 {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls8 {
    spotify: string
  }
  
  export interface LinkedFrom2 {
    album: Album3
    artists: Artist6[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds3
    external_urls: ExternalUrls12
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom3
    restrictions: Restrictions25
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album3 {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls9
    href: string
    id: string
    images: Image5[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions3
    type: string
    uri: string
    album_group: string
    artists: Artist5[]
  }
  
  export interface ExternalUrls9 {
    spotify: string
  }
  
  export interface Image5 {
    url: string
    height: number
    width: number
  }
  
  export interface Restrictions3 {
    reason: string
  }
  
  export interface Artist5 {
    external_urls: ExternalUrls10
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls10 {
    spotify: string
  }
  
  export interface Artist6 {
    external_urls: ExternalUrls11
    followers: Followers3
    genres: string[]
    href: string
    id: string
    images: Image6[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls11 {
    spotify: string
  }
  
  export interface Followers3 {
    href: string
    total: number
  }
  
  export interface Image6 {
    url: string
    height: number
    width: number
  }
  
  export interface ExternalIds3 {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls12 {
    spotify: string
  }
  
  export interface LinkedFrom3 {
    album: Album4
    artists: Artist8[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds4
    external_urls: ExternalUrls16
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom4
    restrictions: Restrictions24
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album4 {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls13
    href: string
    id: string
    images: Image7[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions4
    type: string
    uri: string
    album_group: string
    artists: Artist7[]
  }
  
  export interface ExternalUrls13 {
    spotify: string
  }
  
  export interface Image7 {
    url: string
    height: number
    width: number
  }
  
  export interface Restrictions4 {
    reason: string
  }
  
  export interface Artist7 {
    external_urls: ExternalUrls14
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls14 {
    spotify: string
  }
  
  export interface Artist8 {
    external_urls: ExternalUrls15
    followers: Followers4
    genres: string[]
    href: string
    id: string
    images: Image8[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls15 {
    spotify: string
  }
  
  export interface Followers4 {
    href: string
    total: number
  }
  
  export interface Image8 {
    url: string
    height: number
    width: number
  }
  
  export interface ExternalIds4 {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls16 {
    spotify: string
  }
  
  export interface LinkedFrom4 {
    album: Album5
    artists: Artist10[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds5
    external_urls: ExternalUrls20
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom5
    restrictions: Restrictions23
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album5 {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls17
    href: string
    id: string
    images: Image9[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions5
    type: string
    uri: string
    album_group: string
    artists: Artist9[]
  }
  
  export interface ExternalUrls17 {
    spotify: string
  }
  
  export interface Image9 {
    url: string
    height: number
    width: number
  }
  
  export interface Restrictions5 {
    reason: string
  }
  
  export interface Artist9 {
    external_urls: ExternalUrls18
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls18 {
    spotify: string
  }
  
  export interface Artist10 {
    external_urls: ExternalUrls19
    followers: Followers5
    genres: string[]
    href: string
    id: string
    images: Image10[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls19 {
    spotify: string
  }
  
  export interface Followers5 {
    href: string
    total: number
  }
  
  export interface Image10 {
    url: string
    height: number
    width: number
  }
  
  export interface ExternalIds5 {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls20 {
    spotify: string
  }
  
  export interface LinkedFrom5 {
    album: Album6
    artists: Artist12[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds6
    external_urls: ExternalUrls24
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom6
    restrictions: Restrictions22
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album6 {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls21
    href: string
    id: string
    images: Image11[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions6
    type: string
    uri: string
    album_group: string
    artists: Artist11[]
  }
  
  export interface ExternalUrls21 {
    spotify: string
  }
  
  export interface Image11 {
    url: string
    height: number
    width: number
  }
  
  export interface Restrictions6 {
    reason: string
  }
  
  export interface Artist11 {
    external_urls: ExternalUrls22
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls22 {
    spotify: string
  }
  
  export interface Artist12 {
    external_urls: ExternalUrls23
    followers: Followers6
    genres: string[]
    href: string
    id: string
    images: Image12[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls23 {
    spotify: string
  }
  
  export interface Followers6 {
    href: string
    total: number
  }
  
  export interface Image12 {
    url: string
    height: number
    width: number
  }
  
  export interface ExternalIds6 {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls24 {
    spotify: string
  }
  
  export interface LinkedFrom6 {
    album: Album7
    artists: Artist14[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds7
    external_urls: ExternalUrls28
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom7
    restrictions: Restrictions21
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album7 {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls25
    href: string
    id: string
    images: Image13[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions7
    type: string
    uri: string
    album_group: string
    artists: Artist13[]
  }
  
  export interface ExternalUrls25 {
    spotify: string
  }
  
  export interface Image13 {
    url: string
    height: number
    width: number
  }
  
  export interface Restrictions7 {
    reason: string
  }
  
  export interface Artist13 {
    external_urls: ExternalUrls26
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls26 {
    spotify: string
  }
  
  export interface Artist14 {
    external_urls: ExternalUrls27
    followers: Followers7
    genres: string[]
    href: string
    id: string
    images: Image14[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls27 {
    spotify: string
  }
  
  export interface Followers7 {
    href: string
    total: number
  }
  
  export interface Image14 {
    url: string
    height: number
    width: number
  }
  
  export interface ExternalIds7 {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls28 {
    spotify: string
  }
  
  export interface LinkedFrom7 {
    album: Album8
    artists: Artist16[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds8
    external_urls: ExternalUrls32
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom8
    restrictions: Restrictions20
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album8 {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls29
    href: string
    id: string
    images: Image15[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions8
    type: string
    uri: string
    album_group: string
    artists: Artist15[]
  }
  
  export interface ExternalUrls29 {
    spotify: string
  }
  
  export interface Image15 {
    url: string
    height: number
    width: number
  }
  
  export interface Restrictions8 {
    reason: string
  }
  
  export interface Artist15 {
    external_urls: ExternalUrls30
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls30 {
    spotify: string
  }
  
  export interface Artist16 {
    external_urls: ExternalUrls31
    followers: Followers8
    genres: string[]
    href: string
    id: string
    images: Image16[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls31 {
    spotify: string
  }
  
  export interface Followers8 {
    href: string
    total: number
  }
  
  export interface Image16 {
    url: string
    height: number
    width: number
  }
  
  export interface ExternalIds8 {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls32 {
    spotify: string
  }
  
  export interface LinkedFrom8 {
    album: Album9
    artists: Artist18[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds9
    external_urls: ExternalUrls36
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom9
    restrictions: Restrictions19
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album9 {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls33
    href: string
    id: string
    images: Image17[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions9
    type: string
    uri: string
    album_group: string
    artists: Artist17[]
  }
  
  export interface ExternalUrls33 {
    spotify: string
  }
  
  export interface Image17 {
    url: string
    height: number
    width: number
  }
  
  export interface Restrictions9 {
    reason: string
  }
  
  export interface Artist17 {
    external_urls: ExternalUrls34
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls34 {
    spotify: string
  }
  
  export interface Artist18 {
    external_urls: ExternalUrls35
    followers: Followers9
    genres: string[]
    href: string
    id: string
    images: Image18[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls35 {
    spotify: string
  }
  
  export interface Followers9 {
    href: string
    total: number
  }
  
  export interface Image18 {
    url: string
    height: number
    width: number
  }
  
  export interface ExternalIds9 {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls36 {
    spotify: string
  }
  
  export interface LinkedFrom9 {
    album: Album10
    artists: Artist20[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds10
    external_urls: ExternalUrls40
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom10
    restrictions: Restrictions18
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album10 {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls37
    href: string
    id: string
    images: Image19[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions10
    type: string
    uri: string
    album_group: string
    artists: Artist19[]
  }
  
  export interface ExternalUrls37 {
    spotify: string
  }
  
  export interface Image19 {
    url: string
    height: number
    width: number
  }
  
  export interface Restrictions10 {
    reason: string
  }
  
  export interface Artist19 {
    external_urls: ExternalUrls38
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls38 {
    spotify: string
  }
  
  export interface Artist20 {
    external_urls: ExternalUrls39
    followers: Followers10
    genres: string[]
    href: string
    id: string
    images: Image20[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls39 {
    spotify: string
  }
  
  export interface Followers10 {
    href: string
    total: number
  }
  
  export interface Image20 {
    url: string
    height: number
    width: number
  }
  
  export interface ExternalIds10 {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls40 {
    spotify: string
  }
  
  export interface LinkedFrom10 {
    album: Album11
    artists: Artist22[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds11
    external_urls: ExternalUrls44
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom11
    restrictions: Restrictions17
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album11 {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls41
    href: string
    id: string
    images: Image21[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions11
    type: string
    uri: string
    album_group: string
    artists: Artist21[]
  }
  
  export interface ExternalUrls41 {
    spotify: string
  }
  
  export interface Image21 {
    url: string
    height: number
    width: number
  }
  
  export interface Restrictions11 {
    reason: string
  }
  
  export interface Artist21 {
    external_urls: ExternalUrls42
    href: string
    id: string
    name: string
    type: string
    uri: string
  }
  
  export interface ExternalUrls42 {}
  
  export interface Artist22 {
    external_urls: ExternalUrls43
    followers: Followers11
    genres: string[]
    href: string
    id: string
    images: Image22[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls43 {
    spotify: string
  }
  
  export interface Followers11 {
    href: string
    total: number
  }
  
  export interface Image22 {}
  
  export interface ExternalIds11 {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls44 {
    spotify: string
  }
  
  export interface LinkedFrom11 {
    album: Album12
    artists: Artist24[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds12
    external_urls: ExternalUrls47
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom12
    restrictions: Restrictions16
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album12 {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls45
    href: string
    id: string
    images: Image23[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions12
    type: string
    uri: string
    album_group: string
    artists: Artist23[]
  }
  
  export interface ExternalUrls45 {
    spotify: string
  }
  
  export interface Image23 {}
  
  export interface Restrictions12 {
    reason: string
  }
  
  export interface Artist23 {}
  
  export interface Artist24 {
    external_urls: ExternalUrls46
    followers: Followers12
    genres: string[]
    href: string
    id: string
    images: Image24[]
    name: string
    popularity: number
    type: string
    uri: string
  }
  
  export interface ExternalUrls46 {}
  
  export interface Followers12 {}
  
  export interface Image24 {}
  
  export interface ExternalIds12 {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls47 {
    spotify: string
  }
  
  export interface LinkedFrom12 {
    album: Album13
    artists: Artist26[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds13
    external_urls: ExternalUrls49
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom13
    restrictions: Restrictions15
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album13 {
    album_type: string
    total_tracks: number
    available_markets: string[]
    external_urls: ExternalUrls48
    href: string
    id: string
    images: Image25[]
    name: string
    release_date: string
    release_date_precision: string
    restrictions: Restrictions13
    type: string
    uri: string
    album_group: string
    artists: Artist25[]
  }
  
  export interface ExternalUrls48 {}
  
  export interface Image25 {}
  
  export interface Restrictions13 {}
  
  export interface Artist25 {}
  
  export interface Artist26 {
    genres: any[]
    images: any[]
  }
  
  export interface ExternalIds13 {
    isrc: string
    ean: string
    upc: string
  }
  
  export interface ExternalUrls49 {
    spotify: string
  }
  
  export interface LinkedFrom13 {
    album: Album14
    artists: Artist27[]
    available_markets: any[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    external_ids: ExternalIds14
    external_urls: ExternalUrls50
    href: string
    id: string
    is_playable: boolean
    linked_from: LinkedFrom14
    restrictions: Restrictions14
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
    is_local: boolean
  }
  
  export interface Album14 {
    available_markets: any[]
    images: any[]
    artists: any[]
  }
  
  export interface Artist27 {}
  
  export interface ExternalIds14 {}
  
  export interface ExternalUrls50 {}
  
  export interface LinkedFrom14 {
    artists: any[]
    available_markets: any[]
  }
  
  export interface Restrictions14 {}
  
  export interface Restrictions15 {
    reason: string
  }
  
  export interface Restrictions16 {
    reason: string
  }
  
  export interface Restrictions17 {
    reason: string
  }
  
  export interface Restrictions18 {
    reason: string
  }
  
  export interface Restrictions19 {
    reason: string
  }
  
  export interface Restrictions20 {
    reason: string
  }
  
  export interface Restrictions21 {
    reason: string
  }
  
  export interface Restrictions22 {
    reason: string
  }
  
  export interface Restrictions23 {
    reason: string
  }
  
  export interface Restrictions24 {
    reason: string
  }
  
  export interface Restrictions25 {
    reason: string
  }
  
  export interface Restrictions26 {
    reason: string
  }
  
  export interface Restrictions27 {
    reason: string
  }
  
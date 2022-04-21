import { FormEvent, ChangeEvent } from "react";

export type ResponseTracks = Tracks[];

export type PlaylistParams = {
    title: string,
    description: string,
};

export type ItemParams = {
    uris: string[]
}

export type ResponseAddItemToPlaylist = {
    data: Data
    status: number
    statusText: string
    headers: Headers
    config: Config
    request: Request
};

export type ResponseUser = {
    display_name: string
    followers: Followers
    href: string
    id: string
    images: Image[]
    type: string
    uri: string
};

export type ResponsePlaylist = {
    id: string,
    name: string,
    description: string,
    public: boolean,
    collaborative: boolean,
    uri: string,
    href: string,
    external_urls: {
        spotify: string,
    },
    followers: {
        href: string,
        total: number,
    },
    images: [
        {
            height: number,
            width: number,
            url: string,
        },
    ],
    owner: {
        display_name: string,
        external_urls: {
            spotify: string,
        },
        href: string,
        id: string,
        type: string,
        uri: string,
    },
    tracks: {
        href: string,
        total: number,
    },
}

export type SearchBarProps = {
    onSubmit: (e: FormEvent) => void,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export type TracksProps = {
    mergedTracks: MergedTracks[],
    handleSelectTrack: (uri: string) => void,
}

export interface MergedTracks {
    album: Album
    artists: Artist[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    href: string
    id: string
    is_local: boolean
    name: string
    popularity: number
    preview_url?: string
    track_number: number
    type: string
    uri: string
    isSelected: boolean
}

export interface Tracks {
    album: Album
    artists: Artist[]
    available_markets: string[]
    disc_number: number
    duration_ms: number
    explicit: boolean
    href: string
    id: string
    is_local: boolean
    name: string
    popularity: number
    preview_url: string
    track_number: number
    type: string
    uri: string
}

export interface Album {
    album_type: string
    artists: Artist[]
    available_markets: string[]
    href: string
    id: string
    images: Image[]
    name: string
    release_date: string
    release_date_precision: string
    total_tracks: number
    type: string
    uri: string
}

export interface Artist {
    href: string
    id: string
    name: string
    type: string
    uri: string
}

export interface Image {
    height: number
    url: string
    width: number
}

export interface Followers {
    href: any
    total: number
}

export interface Data {
    snapshot_id: string
}

export interface Headers {
    "cache-control": string
    "content-length": string
    "content-type": string
}

export interface Config {
    transitional: Transitional
    transformRequest: any[]
    transformResponse: any[]
    timeout: number
    xsrfCookieName: string
    xsrfHeaderName: string
    maxContentLength: number
    maxBodyLength: number
    headers: Headers2
    method: string
    url: string
    data: string
}

export interface Transitional {
    silentJSONParsing: boolean
    forcedJSONParsing: boolean
    clarifyTimeoutError: boolean
}

export interface Headers2 {
    Accept: string
    "Content-Type": string
    Authorization: string
}

export interface Request { }
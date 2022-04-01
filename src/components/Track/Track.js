import Image from "./Image/Image";
import Text from "./Text/Text";
import SelectText from "./Button/Button";

const Track = ({image, name, artists, uri}) => (
        <div className="container">
        <div className="card">
        <Image url={image}/>
        <Text name={name} artists={artists}/>
        <SelectText idn={uri} />
        </div>
        </div>
)

const TrackLoop = ({data}) => {
    return data.map((a) => (
        <Track
        key={a.id}
        image={a.album.images[1].url}
        name={a.album.name}
        artists={a.album.artists[0].name}
        uri = {a.album.external_urls.uri}
        />
    ))
}

export default TrackLoop;



import Image from "./Image/Image";
import Text from "./Text/Text";
import Button from "./Button/Button";

const Track = ({image, name, artists}) => (
        <div className="container">
        <div className="card">
        <Image url={image}/>
        <Text name={name} artists={artists}/>
        <Button/>
        </div>
        </div>
)

const TrackLoop = ({data}) => {
    return data.map((a) => (
        <Track
        key={a.idx}
        image={a.album.images[1].url}
        name={a.album.name}
        artists={a.album.artists[0].name}
        />
    ))
}

export default TrackLoop;



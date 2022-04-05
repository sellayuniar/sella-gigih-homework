
import './playlistForm.css';


const PlaylistForm = ({accessToken, handleAddPlaylistSubmit}) => {

    
    return (
        <div className="form-create-playlist">
        <form className="myform" onSubmit={handleAddPlaylistSubmit}>
            <h1>Create Playlist</h1>
            <div className="form-item">
            <label htmlfor="title">Title</label>
            <br />
            <input type="text" />
            </div>

            <div className="form-item">
            <label>Description</label>
            <br />
            <textarea></textarea>
            </div>

            <button>Submit</button>
        </form>

    </div>
    )

}

export default PlaylistForm;
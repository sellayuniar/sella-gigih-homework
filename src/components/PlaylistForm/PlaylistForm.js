import './playlistForm.css';
const PlaylistForm = () => {
    return (
        <div className="form-create-playlist">
        <form className="myform">
            <h1>Create Playlist</h1>
            <div class="form-item">
            <label>Title</label>
            <br />
            <input type="text" />
            </div>

            <div class="form-item">
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
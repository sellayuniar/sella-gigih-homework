import './playlistForm.css';

const PlaylistForm = (
    {handleAddPlaylistSubmit, handleAddPlayListChange, addPlaylist}
) => {

    return (
        <div className="form-create-playlist">
            <form className="myform" onSubmit={handleAddPlaylistSubmit}>
                <h1>Create Playlist</h1>
                <div className="form-item">
                    <label htmlFor="name">Title</label>
                    <br/>
                    <input
                        id="name"
                        type="text"
                        placeholder="Enter playlist name"
                        name="name"
                        onChange={handleAddPlayListChange}
                        value={addPlaylist.name}
                        required minLength="10"/>
                </div>

                <div className="form-item">
                    <label htmlFor="descriptionn">Description</label>
                    <br/>
                    <textarea
                        id="description"
                        name="description"
                        type="text"
                        placeholder='Enter playlist description'
                        onChange={handleAddPlayListChange}
                        value={addPlaylist.description}
                        />
                </div>

                <button type="submit">Submit</button>
            </form>

        </div>
    )

}

export default PlaylistForm;
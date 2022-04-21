import styles from './playlistForm.module.css';

const PlaylistForm = (
    {handleAddPlaylistSubmit, handleAddPlayListChange, addPlaylist}
) => {

    return (
        <div className="form-create-playlist">
            <form className={styles.myform} onSubmit={handleAddPlaylistSubmit}>
                <h1>Create Playlist</h1>
                <div className="form-item">
                    <label htmlFor="title">Title</label>
                    <br/>
                    <input
                        id="title"
                        type="text"
                        placeholder="Enter playlist name"
                        name="title"
                        onChange={handleAddPlayListChange}
                        value={addPlaylist.title}
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
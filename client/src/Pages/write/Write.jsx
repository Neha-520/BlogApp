import axios from 'axios';
import { useContext, useState } from 'react'
import { Context } from '../../context/Context';
import './write.css'

export default function Write() {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);

    const { user } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newPost = {
            userName: user.userName,
            title,
            desc,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name; //to prevent images with same name
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.post("/posts", newPost);
            window.location.replace("/post/" + res.data._id);
        } catch (err) { }
    }

    return (
        <div className="write">
            {file && (
                <img
                    className="writeImg"
                    src={URL.createObjectURL(file)}
                    alt=""
                />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className=" writeIcon zmdi zmdi-plus"></i>
                    </label>
                    <input type="file" id="fileInput" onChange={(e) => setFile(e.target.files[0])} style={{ display: "none" }}></input>
                    <input type="text" placeholder="Title" className="writeInput" onChange={(e) => setTitle(e.target.value)} autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea onChange={(e) => setDesc(e.target.value)} placeholder="Tell your story...."
                        type="text"
                        className="writeInput writeText"></textarea>
                </div>
                <button type='submit' className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

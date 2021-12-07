import './write.css'

export default function Write() {
    return (
        <div className="write">
            <img
                className="writeImg"
                src="https://media.istockphoto.com/photos/day-one-of-getting-my-life-into-gear-picture-id1278058065?b=1&k=20&m=1278058065&s=170667a&w=0&h=01ookdBsMGGNplphN2fHRXsEetWTPvES4HUSGVCgnJ8="
                alt=""
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className=" writeIcon zmdi zmdi-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }}></input>
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story...."
                        type="text"
                        className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

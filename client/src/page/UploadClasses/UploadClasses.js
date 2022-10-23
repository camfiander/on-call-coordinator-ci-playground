import "./UploadClasses.css";
import readXlsxFile from "read-excel-file";

export default function UploadClasses() {
    const handleupload = (e) => {
        console.log(e.target.files[0]);
        //console.log(e.target.files[0][1]);
        readXlsxFile(e.target.files[0]).then((rows) => {
            console.log(rows[0][1]);
        });
        //console.log(e.target.files[1][2]);
    };

    return (
        <div className="root">
            <h1>Select Excel File</h1>
            <input type="file" id="file" onChange={handleupload} />
        </div>
    );
}
import React from 'react'
import Resizer from 'react-image-file-resizer'

const ImageUpload = ({ values, updatedValues, setValues, setUpdatedValues, setLoading, singleUpload = false }) => {

    const fileResizeAndUpload = (e) => {
        e.preventDefault()
        setLoading(true)

        var file = e.target.files[0];
        let fileInput = false
        if (file) {

            fileInput = true
        }
        if (fileInput) {
            Resizer.imageFileResizer(
                file,
                500,
                500,
                'JPEG',
                100,
                0,
                uri => {
                    //console.log(uri)
                    if (singleUpload) {
                        //single upload
                        if (values) {
                            setValues({ ...values, image: { url: uri } })
                        }
                        if (updatedValues) {
                            setUpdatedValues({ ...updatedValues, image: { url: uri } })
                        }
                        setLoading(false)
                    }
                },
                'base64'
            );
        }
    }

    return (
        <div>
            {/* //For single image */}
            <div className="text-center mb-2">
                {values && values.image.url && <img
                    id="img"
                    alt={values.image.public_id}
                    src={values.image.url.length ? values.image.url : "https://via.placeholder.com/200?text=Zob"}
                    key={values.image.public_id}
                />
                }
                {updatedValues && updatedValues.image && <img
                    className="card-img-top"
                    id="img"
                    alt={updatedValues.image.public_id}
                    src={updatedValues.image.url ? updatedValues.image.url : updatedValues.image}
                    key={updatedValues.image.public_id}
                />}
            </div>
            <div className="col-md-12">
                <div className="form-group">
                    <label className="btn btn-primary">
                        Changer l'image du site
                    <input
                            hidden
                            className="form-control"
                            placeholder="Images"
                            type="file"
                            accept="image/*"
                            onChange={fileResizeAndUpload}
                        />
                    </label>
                </div>
            </div>
            
        </div >
    )
}

export default ImageUpload
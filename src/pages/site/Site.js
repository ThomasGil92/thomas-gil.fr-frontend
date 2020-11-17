import React, { useState, useContext } from 'react'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../context/authContext'
import { useMutation } from '@apollo/react-hooks'
import { SITE_CREATE } from '../../graphql/mutations'
import { GET_ALL_SITES } from '../../graphql/queries'
import FileUpload from '../../components/admin/FileUpload'
import axios from 'axios'

const initialState = {
    title: 'Titre à titre d*exemple',
    description: 'Exemple de description d un projet en cours de développement',
    image: {
        url: "",
        public_id: ''
    }
}

const Site = () => {
    const { state } = useContext(AuthContext)
    const history = useHistory()
    const [values, setValues] = useState(initialState)
    const [loading, setLoading] = useState(false)

    const { title, description, image, url, github } = values

    const [siteCreate] = useMutation(SITE_CREATE, {

        update: (cache, { data: { siteCreate } }) => {
            const { allSites } = cache.readQuery({
                query: GET_ALL_SITES
            })
            cache.writeQuery({
                query: GET_ALL_SITES,
                data: {
                    allSites: [siteCreate, ...allSites]
                }
            })
        },
        onError: (err) => console.log(err)
    })


    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        axios.post(
            `${process.env.REACT_APP_REST_ENDPOINT}/uploadimages`,
            { image: image.url },
            {
                headers: {
                    authtoken: state.user.token
                }
            }
        )
            .then(response => {
                setLoading(false)
                console.log('CLOUDINARY UPLOAD', response)
                /* setValues({
                    image: {
                        url: response.data.url,
                        public_id: response.data.public_id
                    }
                }) */
                siteCreate({
                    variables: {
                        input: {
                            title,
                            description,
                            image: {
                                url: response.data.url,
                                public_id: response.data.public_id
                            },
                            github: `https://github.com/ThomasGil92/${github}`,
                            url
                        }
                    }
                })
            })
            .catch(error => {
                setLoading(false)
                console.log('CLOUDINARY UPLOAD FAILED', error)
            })


        setValues(initialState)
        setLoading(false)
        toast.success('Site ajouté')
        history.push('/admin-dashboard')
    }

    const handleChange = e => {
        e.preventDefault()
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const createForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <input
                    type="text"
                    value={title}
                    onChange={handleChange}
                    name="title"
                    className="form-control"
                    placeholder="Titre du site"
                    maxLength="150"
                    disabled={loading}
                >
                </input>
            </div>
            <div className="form-group">
                <textarea
                    type="text"
                    value={description}
                    onChange={handleChange}
                    name="description"
                    className="form-control"
                    placeholder="Description du projet"
                    maxLength="150"
                    disabled={loading}
                ></textarea>
            </div>

            <div className="form-group">
                <input
                    type="text"
                    value={url}
                    onChange={handleChange}
                    name="url"
                    className="form-control"
                    placeholder="Adresse URL du site"
                    maxLength="150"
                    disabled={loading}
                >
                </input>
            </div>

            <div className="form-group">
                <input
                    type="text"
                    value={github}
                    onChange={handleChange}
                    name="github"
                    className="form-control"
                    placeholder="Nom du repertoire Github"
                    maxLength="150"
                    disabled={loading}
                >
                </input>
            </div>

            <FileUpload
                setValues={setValues}
                values={values}
                setLoading={setLoading}
                singleUpload={true}
            />
            <button className="btn btn-primary" type="submit" disabled={loading || !title}>
                Ajouter
            </button>
        </form>
    )

    return (
        <div className="container p-5">
            {loading ? <h4 className="text-danger">Loading...</h4> : <h4>Ajouter un site</h4>}

            <div className="row">
                {values && JSON.stringify(values)}
                <div className="col-md-10 mx-auto">
                    {createForm()}
                </div>

                {/* <div className="row p-5">
                    {posts && posts.postsByUser.map(p => (
                        <div key={p._id} className="col-md-6 pt-5">
                            <PostCard
                                post={p}
                                showUpdateButton={true}
                                showDeleteButton={true}
                                handleDelete={handleDelete}
                            />
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    )
}

export default Site
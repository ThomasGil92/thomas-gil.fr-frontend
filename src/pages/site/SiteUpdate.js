import React, { useState, useContext, useEffect, useMemo } from 'react'
import { useLazyQuery, useMutation } from "@apollo/react-hooks"
import { SINGLE_SITE } from '../../graphql/queries'
import { SITE_UPDATE } from '../../graphql/mutations'
import { useParams, useHistory } from 'react-router-dom'
import SiteCard from '../../components/SiteCard'
import FileUpload from '../../components/admin/FileUpload'
import { AuthContext } from '../../context/authContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import omitDeep from 'omit-deep'

const SiteUpdate = () => {
    const { state } = useContext(AuthContext)
    const { user } = state
    const [loading, setLoading] = useState(false)
    const [getSingleSite, { data: singleSite }] = useLazyQuery(SINGLE_SITE)
    const [siteUpdate] = useMutation(SITE_UPDATE)
    const history = useHistory()

    const [values, setValues] = useState({
        title: '',
        description: '',
        image: {
            url: '',
            public_id: ''
        },
        url:'',
        github:''
    })
    const [updatedValues, setUpdatedValues] = useState({
        title: '',
        description: '',
        image: {
            url: '',
            public_id: ''
        },
        url:'',
        github:''
    })
    const { title, description, image,url,github } = updatedValues
    const { siteid } = useParams()

    useEffect(() => {
        console.log(siteid)
        getSingleSite({ variables: { siteId: siteid } })
    }, [])

    useMemo(() => {
        if (singleSite) {
            console.log('héhéhéhhé')
            setValues({
                ...values,
                _id: singleSite.singleSite._id,
                title: singleSite.singleSite.title,
                description: singleSite.singleSite.description,
                image: omitDeep(singleSite.singleSite.image, ['__typename']) ,
                url:singleSite.singleSite.url,
                github:singleSite.singleSite.github
            })
            setUpdatedValues({
                ...updatedValues,
                _id: singleSite.singleSite._id,
                title: singleSite.singleSite.title,
                description: singleSite.singleSite.description,
                image: omitDeep(singleSite.singleSite.image, ['__typename']),
                url:singleSite.singleSite.url,
                github:singleSite.singleSite.github
            })
        }
    }, [singleSite])

    const handleChange = (e) => {
        setUpdatedValues({ ...updatedValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (!updatedValues.image.url.includes('http')) {
            axios.post(
                `${process.env.REACT_APP_REST_ENDPOINT}/uploadimages`,
                { image: image.url },
                {
                    headers: {
                        authtoken: user.token
                    }
                }
            )
                .then(response => {
                    setLoading(false)
                    console.log('CLOUDINARY UPLOAD', response)
                    siteUpdate({
                        variables: {
                            input: {
                                ...updatedValues,
                                image: {
                                    url: response.data.url,
                                    public_id: response.data.public_id
                                }
                            }
                        }
                    })
                })
                .catch(error => {
                    setLoading(false)
                    console.log('CLOUDINARY UPLOAD FAILED', error)
                })
        } else {
            console.log('prout')
            siteUpdate({
                variables: {
                    input:updatedValues 
                }
            })
        }



        setUpdatedValues('initialState')
        setLoading(false)
        toast.success('Site modifié')
        history.push('/admin-dashboard')
    }


    const updateForm = () => (
        <div className="card">
            <div className="card-body">
                <FileUpload
                    updatedValues={updatedValues}
                    loading={loading}
                    setUpdatedValues={setUpdatedValues}
                    setLoading={setLoading}
                    singleUpload={true}
                />
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            value={title}
                            onChange={handleChange}
                            name="title"
                            className="form-control"
                            maxLength="150"
                            disabled={loading}
                        >
                        </input>
                    </div>
                    <div className="form-group">
                        <textarea
                            rows="5"
                            value={description}
                            onChange={handleChange}
                            name="description"
                            className="form-control"
                            maxLength="150"
                            disabled={loading}
                        >
                        </textarea>
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            value={url}
                            onChange={handleChange}
                            name="url"
                            className="form-control"
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
                            maxLength="150"
                            disabled={loading}
                        >
                        </input>
                    </div>
                    <button className="btn btn-primary" type="submit" disabled={loading || !image}>
                        Enregistrer les modifications
                </button>
                </form>
            </div>
        </div>

    )

    return (
        <div className="container">
            <h1>Site update</h1>
            <div className="row d-flex justify-content-around">
                <div className="col-md-5 ">
                    <SiteCard site={values} />
                </div>
                <div className="col-md-1 d-flex align-items-center">
                    <span>{'->'}</span>
                </div>
                <div className="col-md-5 text-center">
                    {updateForm()}
                </div>
            </div>
            {JSON.stringify(updatedValues)}
            {/*  <hr/>
            {singleSite && JSON.stringify(singleSite)} */}
        </div>

    )
}

export default SiteUpdate
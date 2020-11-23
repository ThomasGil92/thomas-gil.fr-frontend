import React, { Fragment, useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { SITE_DELETE } from "../graphql/mutations";
import { GET_ALL_SITES } from "../graphql/queries";

const SiteCard = ({
  site,
  showUpdateButton = false,
  showDeleteButton = false,
}) => {
  const [loading, setLoading] = useState(false);
  const [siteDelete] = useMutation(SITE_DELETE, {
    update: ({ data }) => {
      console.log("SITE DELETE MUTATION", data);
      toast.error("✂ Site deleted ");
    },
    onError: (err) => {
      console.log(err);
      toast.error("Site delete failed", err);
    },
  });

  const handleDelete = async (siteId) => {
    const answer = window.confirm("Delete?");
    if (answer) {
      setLoading(true);
      siteDelete({
        variables: { siteId },
        refetchQueries: [{ query: GET_ALL_SITES }],
      });
      setLoading(false);
    }
  };

  const stringsRenderer = (strings) => {
    return strings
      .toString()
      .split(",")
      .map((string, i) => {
        return (
          <p key={i} className="m-0">
            -{string.trim().charAt(0).toUpperCase() + string.trim().slice(1)}
          </p>
        );
      });
  };

  return (
    <div className="card">
      <div className="position-absolute" style={{ right: "0" }}>
        <button
          onClick={() => handleDelete(site._id)}
          className="btn btn-light text-dark"
          style={{ opacity: "0.5" }}
          value="65454x"
        >
          x
        </button>
      </div>
      <div className="card-body text-left">
        <div className="text-center mb-2">
          <img className="card-img-top" src={site.image.url} alt={site.title} />
        </div>
        {showUpdateButton && (
          <Fragment>
            <div className="my-5">
              <Link
                to={`/site/update/${site._id}`}
                className="text-success"
                title="Modifier ce site"
              >
                <div className="card-title text-center">
                  <h5>{site.title}</h5>
                </div>
              </Link>
              <p className="lead mt-5">Description:</p>
              <p className="card-text text-justify">{site.description}</p>
              <p className="lead mt-5">Missions:</p>
              <p className="card-text text-justify">
                {site.missions.length > 0 && stringsRenderer(site.missions)}
              </p>
              <p className="lead mt-5">Techno:</p>
              <p className="card-text text-justify">
                {site.technos.length > 0 && stringsRenderer(site.technos)}
              </p>
            </div>
            <p className="mb-0 text-right">Posted by {site.postedBy.email}</p>
          </Fragment>
        )}
        {!showUpdateButton && (
          <div className="my-5">
            <div className="card-title text-center">
              <h5>{site.title}</h5>
            </div>
            <p className="card-text text-justify">{site.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SiteCard;

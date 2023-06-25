import { Form, useLoaderData } from "react-router-dom";
import backend from "../api/backend.js";
import RecordEdit, { RecordData } from "./RecordEdit.js";

export async function loader({ params }) {
  const jobListAPI = new backend.JobListAPI(backend.API_BASE_URL);
  let job;

  if (params.jobId) {
    job = await jobListAPI.getJobDB(params.jobId);
    if (!job) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
  } else job = backend.JobListAPI.createJob("", "");

  return { job };
}

export default function Job() {
  const data = new RecordData(useLoaderData().job, {
    sections: [
      {
        title: "Information",
        numColumns: 2,
        fields: [
          {
            name: "title",
            type: "text",
            label: "Title",
          },
          {
            name: "description",
            type: "text",
            label: "Description",
          },
        ],
      },
    ],
  });

  return (
    <div id="job">
      <div>
        <div>
          <Form action="edit">
            <button type="submit">Edit</button>
          </Form>
          <Form
            method="post"
            action="destroy"
            onSubmit={(event) => {
              if (
                !window.confirm(
                  "Please confirm you want to delete this record."
                )
              ) {
                event.preventDefault();
              }
            }}
          >
            <button type="submit">Delete</button>
          </Form>
        </div>
      </div>
      <RecordEdit recordData={data} />
    </div>
  );
}

// function Favorite({ contact }) {
//   // yes, this is a `let` for later
//   let favorite = contact.favorite;
//   return (
//     <Form method="post">
//       <button
//         name="favorite"
//         value={favorite ? "false" : "true"}
//         aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
//       >
//         {favorite ? "★" : "☆"}
//       </button>
//     </Form>
//   );
// }

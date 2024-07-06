const PET_GRAPHQL_FIELDS = `
  sys {
    id
  }
  name
  slug
  age
  description
  size
  type
  mediaCollection {
    items {
      title
      url
    }
  }
`;

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${preview
          ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
          : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["pets"] },
    }
  ).then((response) => response.json());
}

function extractPetEntries(fetchResponse) {
  return fetchResponse?.data?.petCollection?.items;
}

export async function getAllPets(
  isDraftMode = false
) {
  const pets = await fetchGraphQL(
    `query {
        petCollection(preview: ${isDraftMode ? "true" : "false"
    }) {
          items {
            ${PET_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractPetEntries(pets);
}

export async function getLast3Pets(
  limit = 3,
  isDraftMode = false
) {
  const pets = await fetchGraphQL(
    `query {
        petCollection(limit: ${limit}, preview: ${isDraftMode ? "true" : "false"
    }) {
          items {
            ${PET_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractPetEntries(pets);
}

export async function getPet(
  slug,
  isDraftMode = false
) {
  const pet = await fetchGraphQL(
    `query {
        petCollection(where:{slug: "${slug}"}, limit: 1, preview: ${isDraftMode ? "true" : "false"
    }) {
          items {
            ${PET_GRAPHQL_FIELDS}
          }
        }
      }`,
    isDraftMode
  );
  return extractPetEntries(pet)[0];
}
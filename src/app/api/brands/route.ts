// localhost:3000/api/brands

export function GET() {
  const data = [
    {
      id: "1",
      name: "Brand 1",
      slug: "brand-1",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      id: "1",
      name: "Brand 1",
      slug: "brand-1",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      id: "1",
      name: "Brand 1",
      slug: "brand-1",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      id: "1",
      name: "Brand 1",
      slug: "brand-1",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
  ];

  return new Response(JSON.stringify(data));
}

// export function POST() {
//   const data = [
//     {
//       id: "1",
//       name: "Brand 1",
//       slug: "brand-1",
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//     },
//     {
//       id: "1",
//       name: "Brand 1",
//       slug: "brand-1",
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//     },
//     {
//       id: "1",
//       name: "Brand 1",
//       slug: "brand-1",
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//     },
//     {
//       id: "1",
//       name: "Brand 1",
//       slug: "brand-1",
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJhbmR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
//     },
//   ];

//   return new Response(JSON.stringify(data));
// }

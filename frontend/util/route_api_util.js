

export const createRoute = route => (
  $.ajax({
    method: "post",
    url: "/api/routes",
    data: { route },
  })
);

// export const deleteRoute = route => (
//   $.ajax({
//     method: "delete",
//     url: `/api/user/route/${route.id}`
//   })
// )
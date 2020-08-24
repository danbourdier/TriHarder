 

export const createRoute = route => {


  return (
    $.ajax({
      method: "post",
      url: "/api/routes",
      data: { route },
    })
  )
};

export const deleteRoute = routeId => (
  $.ajax({
    method: "delete",
    url: `/api/routes/${routeId}`
  })
);

export const getRoute = routeId => (
  $.ajax({
    method: "get",
    url:  `/api/routes/${routeId}`
  })

);

export const getRoutes = () => (
  $.ajax({
    method: "get",
    url: "/api/routes"
  })
);

export const editRoute = route => (
  $.ajax({
    method: "patch",
    url: `/api/routes/${route.id}`,
    data: { route }
  })
);
export const OPEN_ROUTE_MODAL = 'OPEN_ROUTE_MODAL';
export const OPEN_USER_MODAL = "OPEN_USER_MODAL";
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openRouteModal = (modal, polyline) => {
  debugger
  return {
    type: OPEN_ROUTE_MODAL,
    modal,
    polyline
  };
};

export const openUserModal = modal => {
  debugger
  return {
    type: OPEN_USER_MODAL,
    modal,
  };
};

export const closeModal = () => {
  debugger
  return {
    type: CLOSE_MODAL
  };
};

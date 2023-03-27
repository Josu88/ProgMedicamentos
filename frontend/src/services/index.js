export const getFilterLabMedService = async (Lab) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/listMed?Lab=${Lab}`
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const getAllMedService = async () => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/listMed`);

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const sendMedService = async ({ data }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/newMed`, {
    method: "POST",
    body: data,
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const deleteMedService = async ({ idMed }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/DelMed/${idMed}`,
    {
      method: "DELETE",
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const editMedService = async ({ id, Lab, Composition, Name, Units }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/EditMed/${id}`,
    {
      method: "PUT",
      body: JSON.stringify({ Lab, Composition, Name, Units }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

export const addUnitsService = async ({ idMed }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/addUnits/${idMed}`,
    {
      method: "POST",
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const delUnitsService = async ({ idMed }) => {
  const response = await fetch(
    `${process.env.REACT_APP_BACKEND}/delUnits/${idMed}`,
    {
      method: "POST",
    }
  );

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const registerUserService = async ({ username, email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/register`, {
    method: "POST",
    body: JSON.stringify({ username, email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }
};

export const logInUserService = async ({ email, password }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.authToken;
};

export const deleteUserService = async ({ password, token }) => {
  const response = await fetch(`${process.env.REACT_APP_BACKEND}/user`, {
    method: "DELETE",
    body: JSON.stringify({ password }),
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
  });

  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json.data;
};

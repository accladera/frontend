import axios from "axios";
import { SYSTEM_ERROR } from "config/CONSTANTS";
import { BUSINESS_COMPANY, BUSINESS_REGISTER_EMPRESA,BUSINESS_JOB } from "./CONSTANTS";

export const getBussinesOnly = (id) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(BUSINESS_COMPANY + "/" + id + "/only")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject({ name: "System", message: SYSTEM_ERROR });
    }
  });
};

export const getListBussinesByUser = (idUser) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(BUSINESS_COMPANY + "/" + idUser + "/user")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject({ name: "System", message: SYSTEM_ERROR });
    }
  });
};

export const postBusiness = (datos) => {
  return new Promise((resolve, reject) => {
    try {
      const headers = {
        "Content-Type": "application/json; charset=utf-8",
        "content-type": "application/json",
      };

      axios
        .post(BUSINESS_REGISTER_EMPRESA, datos, { headers })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject({ name: "System", message: SYSTEM_ERROR });
    }
  });
};


export const deleteCompanie = (id) => {
  return new Promise((resolve, reject) => {
      try {
          axios.delete(BUSINESS_COMPANY + "/" + id + "/delete")
              .then((res) => {
                  resolve(res.data);
              })
              .catch((err) => {
                  reject(err)
              })
      } catch (err) {
          reject({ "name": "System", "message": SYSTEM_ERROR })
      }
  });
}



// Job
export const getListJobByCompanie = (idCompanie) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(BUSINESS_JOB + "/" + idCompanie + "/companies")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject({ name: "System", message: SYSTEM_ERROR });
    }
  });
};


export const deleteJob = (id) => {
  return new Promise((resolve, reject) => {
      try {
          axios.delete(BUSINESS_JOB + "/" + id + "/delete")
              .then((res) => {
                  resolve(res.data);
              })
              .catch((err) => {
                  reject(err)
              })
      } catch (err) {
          reject({ "name": "System", "message": SYSTEM_ERROR })
      }
  });
}

export const postJob = (datos) => {
  return new Promise((resolve, reject) => {
    try {
      const headers = {
        "Content-Type": "application/json; charset=utf-8",
        "content-type": "application/json",
      };

      axios
        .post(BUSINESS_JOB+"/store", datos, { headers })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject({ name: "System", message: SYSTEM_ERROR });
    }
  });
};

export const getAllJobs = () => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(BUSINESS_JOB + "/list")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject({ name: "System", message: SYSTEM_ERROR });
    }
  });
};

export const getBusquedaJobs = ( url ) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(BUSINESS_JOB + "/list"+url)
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject({ name: "System", message: SYSTEM_ERROR });
    }
  });
};
export const getJobOnly = ( id ) => {
  return new Promise((resolve, reject) => {
    try {
      axios
        .get(BUSINESS_JOB +"/"+ id+"/only")
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    } catch (err) {
      reject({ name: "System", message: SYSTEM_ERROR });
    }
  });
};



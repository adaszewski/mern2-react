import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

function AddStay(props) {
  const [formData, setFormData] = useState({
    data_rezerwacja: {
      poczatek: "",
      koniec: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    axios
      .put("http://localhost:5000/api/bed/update/" + props.stayadd.bedId, {
        $push: {
          data_rezerwacja: {
            poczatek: data.data_rezerwacja.poczatek,
            koniec: data.data_rezerwacja.koniec,
          },
        },
      })
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          setResStatus("dodano rezerwację");
          setFormData({
            data_rezerwacja: {
              poczatek: "",
              koniec: "",
            },
          });
        } else {
          setResStatus("wystąpił błąd");
        }
      })
      .catch((error) => {
        console.log(error);
        setResStatus("wystąpił błąd");
      });
  };

  const [resStatus, setResStatus] = useState("");

  return (
    <div>
      {props.stayadd.isVisible ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3>
            <strong>dodaj rezerwację</strong>
          </h3>
          <br />

          <label>
            <b>1. rozpoczęcie pobytu</b>
          </label>
          <br />
          <input
            {...register("data_rezerwacja.poczatek", { required: true })}
            type="date"
            value={formData.data_rezerwacja.poczatek}
            onChange={(e) =>
              setFormData({
                ...formData,
                data_rezerwacja: {
                  ...formData.data_rezerwacja,
                  poczatek: e.target.value,
                },
              })
            }
          />
          {errors.data_rezerwacja?.poczatek?.type === "required" && (
            <p>To pole jest wymagane</p>
          )}
          <br />

          <label>
            <b>2. zakończenie pobytu</b>
          </label>
          <br />
          <input
            {...register("data_rezerwacja.koniec", { required: true })}
            type="date"
            value={formData.data_rezerwacja.koniec}
            onChange={(e) =>
              setFormData({
                ...formData,
                data_rezerwacja: {
                  ...formData.data_rezerwacja,
                  koniec: e.target.value,
                },
              })
            }
          />
          {errors.data_rezerwacja?.koniec?.type === "required" && (
            <p>To pole jest wymagane</p>
          )}
          <br />

          <hr />
          <input type="submit" />
        </form>
      ) : null}
    </div>
  );
}

export default AddStay;

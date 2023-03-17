import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

function AnkietaBarthel(props) {
  const { id } = useParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
    axios
    .post("http://localhost:5000/api/barthel/add/" + id, data)
    .then((response) => {
      console.log(response.status);
      if (response.status === 200) {
        setResStatus("dodano badanie");
      } else {
        setResStatus("error");
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

  const [resStatus, setResStatus] = useState("");

  console.log(errors);

  console.log(resStatus);

  return (
    <div>
      {props.barthelexam ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>
            <strong> Ocena według skali Barthel</strong>
          </h1>
          <br />
          <label>
            Pacjent o numerze PESEL:<b>{props.patientOne?.pesel}</b>
          </label>
          <br />
          <label>
            <b>data badania:</b>
          </label>
          <br/>
          <br/>
          <input
            {...register("date_of_examination", { required: true })}
            type="date"
          />
          <br />
          <label>
            <b>1. Spożywanie posiłków</b>
          </label>
          <br />
          <input
            {...register("barthel1", { required: true })}
            type="radio"
            value="10"
          />
          <label> samodzielny, niezależny </label>
          <br />
          <input
            {...register("barthel1", { required: true })}
            type="radio"
            value="5"
          />
          <label>
            potrzebuje pomocy w krojeniu, smarowaniu, karmieniu doustnym
          </label>
          <br />
          <input
            {...register("barthel1", { required: true })}
            type="radio"
            value="0"
          />
          <label>nie jest w stanie samodzielnie jeść lub przełykać</label>
          <br />
          <hr />
          <label>
            <b>
              2. Przemieszczanie się z łóżka na krzesło i z powrotem/siadanie
            </b>
          </label>
          <br />
          <input
            {...register("barthel2", { required: true })}
            type="radio"
            value="15"
          />
          <label> samodzielny</label>
          <br />
          <input
            {...register("barthel2", { required: true })}
            type="radio"
            value="10"
          />
          <label> mniejsza pomoc (słowna lub fizyczna)</label>
          <br />
          <input
            {...register("barthel2", { required: true })}
            type="radio"
            value="5"
          />
          <label>
            przemieszcza się z pomocą fizyczną jednej lub dwóch osób, może
            siedzieć
          </label>
          <br />
          <input
            {...register("barthel2", { required: true })}
            type="radio"
            value="0"
          />
          <label>
            {" "}
            nie jest w stanie przemieszczać się, nie zachowuje równowagi przy
            siadaniu oraz siedzeniu
          </label>
          <br />
          <hr />
          <label>
            <strong>3. Utrzymanie higieny osobistej</strong>
          </label>
          <br />
          <input
            {...register("barthel3", { required: true })}
            type="radio"
            value="10"
          />
          <label>
            samodzielny przy myciu twarzy, czesaniu się, myciu zębów, także z
            zapewnionymi pomocami
          </label>
          <br />
          <input
            {...register("barthel3", { required: true })}
            type="radio"
            value="5"
          />
          <label>
            potrzebuje pomocy przy wykonywaniu czynności higienicznych
          </label>
          <br />
          <input
            {...register("barthel3", { required: true })}
            type="radio"
            value="0"
          />
          <label>
            nie jest w stanie wykonać żadnych czynności higienicznych
          </label>
          <br />
          <hr />
          <label>
            <b>4. Korzystanie z toalety </b>
          </label>
          <br />
          <input
            {...register("barthel4", { required: true })}
            type="radio"
            value="10"
          />
          <label>
            samodzielny w dotarciu do toalety oraz w zdejmowaniu i zakładaniu
            części garderoby
          </label>
          <br />
          <input
            {...register("barthel4", { required: true })}
            type="radio"
            value="5"
          />
          <label>
            potrzebuje lub częściowo potrzebuje pomocy przy korzystaniu z
            toalety
          </label>
          <br />
          <input
            {...register("barthel4", { required: true })}
            type="radio"
            value="0"
          />
          <label>nie korzysta w ogóle z toalety</label>
          <br />
          <hr />
          <label><b>5. Mycie i kąpiel całego ciała</b></label>
          <br />
          <input
            {...register("barthel5", { required: true })}
            type="radio"
            value="10"
          />
          <label> samodzielny</label>
          <br />
          <input
            {...register("barthel5", { required: true })}
            type="radio"
            value="5"
          />
          <label>wymaga pomocy</label>
          <br />
          <input
            {...register("barthel5", { required: true })}
            type="radio"
            value="0"
          />
          <label>kąpany w wannie przy pomocy podnośnika</label>
          <br />
          <hr />
          <label><b>6. Poruszanie się po powierzchniach płaskich</b></label>
          <br />
          <input
            {...register("barthel6", { required: true })}
            type="radio"
            value="10"
          />
          <label>
            samodzielny, niezależny w poruszaniu się na odległość powyżej 50m,
            także w użyciem sprzętu wspomagającego
          </label>
          <br />
          <input
            {...register("barthel6", { required: true })}
            type="radio"
            value="5"
          />
          <label>
            porusza się na odległość do 50m za pomocą sprzętu wspomagającego i z
            pomocą co najmniej jednej osoby
          </label>
          <br />
          <input
            {...register("barthel6", { required: true })}
            type="radio"
            value="0"
          />
          <label>w ogóle nie porusza się</label>
          <br />
          <hr />
          <label><b>7. Wchodzenie i schodzenie po schodach</b></label>
          <br />
          <input
            {...register("barthel7", { required: true })}
            type="radio"
            value="10"
          />
          <label>samodzielny</label>
          <br />
          <input
            {...register("barthel7", { required: true })}
            type="radio"
            value="5"
          />
          <label>potrzebuje pomocy fizycznej asekuracji, przenoszenia</label>
          <br />
          <input
            {...register("barthel7", { required: true })}
            type="radio"
            value="0"
          />
          <label>
            nie jest w stanie wchodzić i schodzić po schodach nawet z pomocą
            innej osoby
          </label>
          <br />
          <hr />
          <label><b>8. Ubieranie się i rozbieranie</b></label>
          <br />
          <input
            {...register("barthel8", { required: true })}
            type="radio"
            value="10"
          />
          <label>
            samodzielny, niezależny (także w zapinaniu guzików, zamka,
            zawiązywanie sznurowadeł)
          </label>
          <br />
          <input
            {...register("barthel8", { required: true })}
            type="radio"
            value="5"
          />
          <label>potrzebuje częściowej pomocy innej osoby</label>
          <br />
          <input
            {...register("barthel8", { required: true })}
            type="radio"
            value="0"
          />
          <label>potrzebuje kompleksowej pomocy innej osoby</label>
          <br />
          <hr />
          <label><b>9. Kontrolowanie stolca/zwieracza odbytu</b></label>
          <br />
          <input
            {...register("barthel9", { required: true })}
            type="radio"
            value="10"
          />
          <label>kontroluje oddawanie stolca</label>
          <br />
          <input
            {...register("barthel9", { required: true })}
            type="radio"
            value="5"
          />
          <label>sporadycznie bezwiednie oddaje stolec</label>
          <br />
          <input
            {...register("barthel9", { required: true })}
            type="radio"
            value="0"
          />
          <label>nie panuje nad oddawaniem stolca</label>
          <br />
          <hr />
          <label><b>10. Kontrolowanie moczu/zwieracza pęcherza moczowego</b></label>
          <br />
          <input
            {...register("barthel10", { required: true })}
            type="radio"
            value="0"
          />
          <label>
            nie panuje nad oddawaniem moczu lub cewnikowany i przez
            to niesamodzielmy
          </label>
          <br />
          <input
            {...register("barthel10", { required: true })}
            type="radio"
            value="5"
          />
          <label>czasami popuszcza (zdarzenia przypadkowe)</label>
          <br />
          <input
            {...register("barthel10", { required: true })}
            type="radio"
            value="10"
          />
          <label>panuje, utrzymuje mocz</label>
          <br />
          <hr />
          <input type="submit" />
        </form>
      ) : (
        ""
      )}
    </div>
  );
}

export default AnkietaBarthel;
